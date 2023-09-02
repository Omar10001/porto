import { useTranslation } from "../localization/index";

const LangSwitch = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();

  const handleSwitchLanguage = (newLang) => {
    changeLanguage(newLang);
  };

  return (
    <div className="flex gap-2 p-4" dir="ltr">
      <button
        onClick={() => handleSwitchLanguage("en")}
        className={`px-4 py-2  rounded-xl ${
          currentLanguage === "en"
            ? "bg-white/10 text-white"
            : "bg-black/80 text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleSwitchLanguage("ar")}
        className={`px-4 py-2  rounded-xl ${
          currentLanguage === "ar"
            ? "bg-white/10 text-white"
            : "bg-black/80 text-white"
        }`}
      >
        AR
      </button>
      <button
        onClick={() => handleSwitchLanguage("ja")}
        className={`px-4 py-2  rounded-xl ${
          currentLanguage === "ja"
            ? "bg-white/10 text-white"
            : "bg-black/80 text-white"
        }`}
      >
        JP
      </button>
    </div>
  );
};

export default LangSwitch;
