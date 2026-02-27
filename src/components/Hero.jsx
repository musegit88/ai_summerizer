import { useTranslation } from "react-i18next";
import { github } from "../assets";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header className="w-full flex justify-center items-certer flex-col">
      <nav className="flex justify-between items-center w-full pt-4 mb-10">
        <h1 className="text-2xl font-bold blue_gradient">TL;DRead</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              window.open("https://github.com/musegit88/ai_summerizer")
            }
          >
            <div>
              <img
                src={github}
                alt="github"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
          </button>

          {/* language selector */}
          <LanguageSelector />
        </div>
      </nav>
      <div className="head_text">
        {t("headline_a")}
        <br className="max-md:hidden" /> {t("headline_b")}{" "}
        <span className="sky_gradient">{t("headline_c")}</span>
      </div>
      <h2 className="desc">{t("subheadline")}</h2>
    </header>
  );
};

export default Hero;
