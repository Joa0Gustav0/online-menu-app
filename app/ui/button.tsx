import clsx from "clsx";
import Image from "next/image";
import { secondaryFont } from "./fonts";
import arrowIcon from "@/public/media/icons/arrow-icon.png";
import { ReactNode } from "react";

function Button({
  bgColor,
  text,
  fontSize,
  irregular,
  auto,
  arrow,
}: {
  bgColor?: string;
  text: ReactNode;
  fontSize: string;
  irregular: boolean;
  auto: boolean;
  arrow?: "invert" | "no-invert";
}) {
  const _fontSize = fontSize.replace(fontSize, "text-[" + fontSize + "]");

  return (
    <button
      className={`${_fontSize} ${secondaryFont.className} relative text-white uppercase ${
        bgColor ? bgColor : "bg-default transition-all duration-[.25s]"
      } rounded-[5px] w-fit ${clsx({
        "w-full": auto === true,
        "py-[5px] px-[15px]": irregular === true,
        "p-[15px]": irregular === false,
      })}  hover:duration-[.25s] hover:animate-button_hover hover:scale-[115%] active:scale-[85%] ${clsx({
        "flex flex-row justify-center items-center gap-[20px]": arrow
      })}`}
    >
      {text}
      {arrow ? (
        <Image src={arrowIcon} alt="Imagem representativa de uma seta" className={`w-[46px] ${clsx({"rotate-180": arrow === "invert"})}`} />
      ) : null}
    </button>
  );
}

export default Button;
