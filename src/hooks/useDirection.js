import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { rtlLanguages } from "../i18n";

const useDirection = () => {
    const { i18n } = useTranslation()

    useEffect(() => {
        // change the direction of the document based on the language
        const rdir = rtlLanguages.includes(i18n.language) ? "rtl" : "ltr"
        document.documentElement.dir = rdir
        document.documentElement.lang = i18n.language;
        if (document.documentElement.lang === "en-US") {
            document.documentElement.lang = "en"
        }
    }, [i18n.language])
}

export default useDirection