import { ReactNode } from "react";
import { secondaryFont } from "./fonts";

function Title({
  text,
  span,
  textColor,
  small,
  unrestrict
}: {
  text: string;
  span?: string;
  textColor?: string;
  small?: true;
  unrestrict?: true;
}) {
  return (
    <h1
      className={`w-fit ${unrestrict ? "" : "max-w-[472.5px]"} text-[32px] m-auto ${!small ? "ssm:text-[40px]" : "ssm:text-[1.25em]"} text-center ${secondaryFont.className} transition-all duration-[.25s]`}
    >
      {text}
      <span className={textColor ? textColor : "text-default"}> {span}</span>
    </h1>
  );
}

export default Title;
