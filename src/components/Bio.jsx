import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../localization/index";
import LangSwitch from "./Langswitch";

export default function Bio() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-black/60 backdrop-blur-2xl gap-3 flex flex-col justify-center items-center w-full min-h-screen h-full rounded-t-2xl">
      <Head>
        <title>
          {t("name")} - {t("role")}
        </title>
        <meta name="description" content={`${t("short_bio")}`} />
        <meta
          name="keywords"
          content="Front-end Developer, Bio, Portfolio, Akira, Anime, RPG"
        />
      </Head>
      <div className="absolute top-0 left-0">
        <LangSwitch />
      </div>
      <header className="max-w-[1080px] text-white gap-4 pt-20 lg:px-10 px-4 w-full flex flex-col h-fit ">
        <div className="flex gap-6 items-center">
          <Image
            src="/assets/profilepic.jpeg"
            width={200}
            height={200}
            alt={`${t("name")}'s profile picture`}
            className="lg:w-40 lg:h-40 w-20 h-20 rounded-full bg-white mb-6"
          />
          <div className="flex flex-col ">
            <h1 className="lg:text-5xl text-2xl font-bold ">{t("name")}</h1>
            <h2 className="text-xl mb-4">{t("role")}</h2>
          </div>
        </div>
      </header>
      <main className="max-w-[1080px] text-white gap-4 lg:px-10 px-4 w-full flex flex-col h-fit">
        <section className="text-white/90 flex flex-col w-full">
          <p className="text-lg mb-4">{t("short_bio")}</p>
          <p className="text-lg mb-4">{t("long_bio")}</p>
          <p className="text-lg mb-4">{t("tech_stack")}</p>
          <p className="text-lg mb-4">{t("interests")}</p>
          <p className="text-lg mb-4">{t("future_goals")}</p>
        </section>
      </main>
    </div>
  );
}
