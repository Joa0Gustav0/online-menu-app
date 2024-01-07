import { ReactNode } from "react";
import { secondaryFont } from "./fonts";

function Title( {text, span, textColor}: {text: string, span?: string, textColor?: string} ) {
  return (
    <h1 className={`w-fit max-w-[472.5px] m-auto text-[40px] text-center ${secondaryFont.className}`}>{text}<span className={textColor ? textColor : "text-default"}> {span}</span></h1>
  );
}

export default Title;