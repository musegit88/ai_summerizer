import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "🇺🇲" },
  { code: "am", name: "አማርኛ", flag: "🇪🇹" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-400/20 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/30 transition-all hover:bg-gray-400/30 dark:hover:bg-gray-800/60 active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform text-gray-500 dark:text-gray-400 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 origin-top-right rounded-xl bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-900/40 transition-colors ${
                  i18n.language === lang.code
                    ? "bg-sky-100/50 dark:bg-sky-900/60 font-bold text-sky-600 dark:text-sky-400"
                    : ""
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
