import en from "./en.json";
import ar from "./ar.json";
import ja from "./ja.json"; // changed jp to ja for standard language code
import { useRouter } from "next/router";
import { useCallback } from "react";

const locales = { en, ar, ja }; // changed jp to ja
const defaultLocale = 'en';

const useTranslation = () => {
    const router = useRouter();
    const currentLocale = router.locale || defaultLocale;

    const changeLanguage = (locale) => {
        if (locale !== currentLocale && locales[locale]) { // check if locale exists
            router.push(
                {
                    route: router.pathname,
                    query: router.query,
                },
                router.asPath,
                { locale }
            );
        }
    };

    const t = useCallback(
        (str) => {
            if (locales[currentLocale] && locales[currentLocale][str]) {
                return locales[currentLocale][str];
            }
            return locales[defaultLocale][str] || str; // fallback to default language
        },
        [currentLocale]
    );

    return { t, changeLanguage, currentLanguage: currentLocale };
};

const withTranslation = (Component) => (props) => {
    const { t, changeLanguage, currentLanguage } = useTranslation();
    return (
        <Component
            {...props}
            t={t}
            changeLanguage={changeLanguage}
            currentLanguage={currentLanguage}
        />
    );
};

export { useTranslation, withTranslation };
