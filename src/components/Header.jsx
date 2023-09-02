import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "../localization/index";

const Header = () => {
  const { t, currentLanguage } = useTranslation();
  const controlsRed = useAnimation();
  const controlsAmber = useAnimation();
  const controlsGray = useAnimation();
  const controlsYellow = useAnimation();

  useEffect(() => {
    const maxHeight = 130;

    const handleScroll = () => {
      let scrollY = window.scrollY;
      if (scrollY > maxHeight) {
        scrollY = maxHeight;
      }

      // For far object, slower, minimal movement, softer spring
      // For far objects, slower, minimal movement, ease-out will make it slow to stop
      controlsYellow.start({
        x: scrollY * 0.02,
        y: scrollY * 0.02,
        transition: { ease: "easeOut", duration: 1.5 },
      });

      // For mid-distance objects, medium speed, ease-in-out will make it slow to start and stop
      controlsGray.start({
        x: scrollY * 0.3,
        y: -scrollY * 0.3,
        transition: { ease: "easeInOut", duration: 1.0 },
      });

      // For close objects, faster, more noticeable movement, ease-in will make it slow to start
      controlsRed.start({
        x: -scrollY * 1.2,
        transition: { ease: "easeIn", duration: 0.5 },
      });

      controlsAmber.start({
        x: scrollY * 1.2,
        transition: { ease: "easeIn", duration: 0.5 },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsRed, controlsAmber, controlsGray, controlsYellow]);

  return (
    <div
      className="w-full sticky top-0  overflow-clip h-screen bg-black"
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full flex justify-center absolute h-[300%] skew-y-[-2deg]  top-0 z-0 bg-orange-900"></div>
      <motion.div
        initial={{ rotate: -6 }}
        animate={controlsYellow}
        className="w-72 flex justify-center absolute h-[300%] left-[64%] skew-y-[45deg]  top-20 z-10 bg-green-500"
      >
        <div className=" w-52 h-screen bg-green-700 absolute top-[88px] -right-52 skew-y-[40deg]"></div>
        {/*<span*/}
        {/*  className="mt-40 ml-20 font-bold text-white text-4xl animate-pulse"*/}
        {/*  style={{ fontFamily: "Akira Expanded" }}*/}
        {/*>*/}
        {/*  {t("greet")}*/}
        {/*</span>*/}
      </motion.div>
      <motion.div
        initial={{ rotate: -6 }}
        animate={controlsRed}
        className="w-[80%] absolute -top-20 -left-72 h-[300%] z-40 bg-red-500"
      ></motion.div>
      <motion.div
        initial={{ rotate: -6 }}
        animate={controlsAmber}
        className="w-[30%] absolute -top-20 -right-40 h-[300%] z-30 bg-amber-400"
      ></motion.div>
      <motion.div
        initial={{ rotate: -6 }}
        animate={controlsGray}
        className="w-[50%] flex justify-center absolute h-[300%] left-[30%] skew-y-[45deg]  top-80 z-20 bg-gray-500"
      >
        <div className=" w-52 h-screen bg-gray-700 absolute top-[88px] -right-52 skew-y-[40deg]"></div>
        <span
          className="mt-40 ml-20 font-bold text-white text-4xl animate-pulse"
          style={{ fontFamily: "Akira Expanded" }}
        >
          {t("OMAR")}
        </span>
      </motion.div>
    </div>
  );
};

export default Header;
