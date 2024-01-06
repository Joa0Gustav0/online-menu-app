import clsx from "clsx";
import { secondaryFont } from "./fonts";

function Button({
  bgColor,
  text,
  fontSize,
  irregular,
  auto,
}: {
  bgColor?: string;
  text: string;
  fontSize: string;
  irregular: boolean;
  auto: boolean;
}) {
  const _fontSize = fontSize.replace(fontSize, "text-[" + fontSize + "]")

  return (
    <button className={`${_fontSize} ${secondaryFont.className} text-white ${bgColor ? bgColor : "bg-default"} rounded-[5px] ${clsx({
      "w-full": auto === true,
      "py-[5px] px-[15px]": irregular === true,
      "p-[15px]": irregular === false,
    })} hover:duration-[.25s] hover:animate-button_hover hover:scale-[115%] active:scale-[85%]`}>
      {text.toUpperCase()}
    </button>
  );
}

export default Button;
