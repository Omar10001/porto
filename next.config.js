/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: "en",

        locales: ["en", "ar", "ja"],

        /*
          disable locale detection for
          preventing redirecting to the default locale
         */
        localeDetection: false,
    },
};

module.exports = nextConfig;
