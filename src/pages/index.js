import ClassDemo from "../components/Class";
import LangSwitch from "../components/Langswitch";
import Navbar from "../components/Navbar";
import { useTranslation } from "../localization/index";
import Header from "../components/Header";
import Bio from "../components/Bio";

const Demo = () => {
  const { currentLanguage } = useTranslation();

  return (
    <div className="w-full " dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      {/*<Navbar />*/}
      <Header />
      <div className="sticky mt-20 h-fit">
        <Bio />
      </div>
    </div>
  );
};

export default Demo;
