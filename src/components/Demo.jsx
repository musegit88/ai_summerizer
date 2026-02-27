import { useState } from "react";
import { useEffect } from "react";
import { loader } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { useTranslation } from "react-i18next";
const Demo = () => {
  const { t, i18n } = useTranslation();

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [copied, setCopied] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles"),
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
      lang: i18n.language,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 2800);
  };

  const handleDelete = (index) => {
    const updatedAllArticles = allArticles.filter((_, i) => i !== index);
    setAllArticles(updatedAllArticles);
    localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    window.location.reload();
  };

  return (
    <section className="mt-16 max-w-xl w-full">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center rtl:flex-row-reverse"
          onSubmit={handleSubmit}
        >
          {/* link icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-0 my-2 ml-3 w-5 h-5"
          >
            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
          <input
            type="url"
            placeholder={t("placeholder")}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 dark:peer-focus:text-white"
          >
            {/* submit icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
              <path d="M6 12h16" />
            </svg>
          </button>
        </form>
        {/* Browse URL History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                {copied === item.url ? (
                  // tick icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-green-500"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  // copy icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                )}
              </div>
              <p className="flex-1 font-satoshi text-gray-700 dark:text-gray-300 font-medium text-sm truncate">
                {item.url}
              </p>
              <div className="copy_btn" onClick={() => handleDelete(index)}>
                {/* delete icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-red-500"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img
            src={loader}
            alt="loader"
            className="w-20 h-20 object-contain "
          />
        ) : error ? (
          <p className="font-inter font-bold text-black dark:text-white text-center">
            {t("error")} <br />{" "}
            <span className="font-satoshi font-normal text-gray-700 dark:text-gray-400">
              {error?.data?.error}
            </span>{" "}
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-4">
              <h2 className="font-satoshi font-bold text-gray-600 dark:text-gray-300 text-xl">
                {t("Article")}{" "}
                <span className="blue_gradient">{t("Summary")}</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-justify">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
