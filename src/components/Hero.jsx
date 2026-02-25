import { useTranslation } from "react-i18next";
import { github } from "../assets";
const Hero = () => {
  const { t, i18n } = useTranslation();
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
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="px-4 py-2 rounded-md bg-gray-400/20"
          >
            <option value="en">🇺🇲 English</option>
            <option value="am">🇪🇹 አማርኛ</option>
            <option value="ar">🇦🇪 العربية</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
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
