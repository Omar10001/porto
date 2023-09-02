import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "../localization/index";
import LangSwitch from "./Langswitch";

export default function Navbar(
) {
    const { t } = useTranslation();
    return (
    <nav className=" flex justify-between h-full items-center">
        <h1 className=''>{t("greet")}</h1>
        <div className='h-full'>
            <LangSwitch/>
        </div>
    </nav>
  );
}
