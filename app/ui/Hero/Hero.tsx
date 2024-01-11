import Image, { StaticImageData } from "next/image";
import Button from "../button";
import Link from "next/link";
import { secondaryFont } from "../fonts";
import clsx from "clsx";
import SlideDots from "./SlideDots";

function Hero({
  theme,
}: {
  theme: {
    foodText: string;
    picture: {
      hero: StaticImageData;
      border: {
        picture: StaticImageData;
        text: string;
      };
    };
    textColor: string;
    bgColor: string;
  };
}) {
  return (
    <section className="relative w-full max-w-[1366px] px-[20px] smlst:px-[36px] m-auto">
      <div className="relative flex flex-col lgst:flex-row justify-center lgst:justify-around items-center w-full max-w-[1115px] overflow-visible min-h-screen py-[145px] m-auto">
        <aside className="flex flex-col font-bold items-center lgst:items-start">
          <p className="relative text-[22px] ssm:text-[28px] text-center lgst:text-left w-fit px-[15px] mb-[36px] lgst:mb-[5px] transition-all duration-[.25s]">
            Sua fome{" "}
            <br
              className={`${
                theme.foodText === "hambúrguer" ? "hidden" : ""
              } lgst:hidden`}
            />
            pede <br
              className={`${
                theme.foodText !== "hambúrguer" ? "hidden" : ""
              } lgst:hidden`}
            />por{" "}
            <span className={`${theme.textColor}`}>{theme.foodText}.</span>
            <span
              className={`absolute -translate-x-1/2 left-1/2 bottom-[-5px] w-full h-[4px] ${theme.bgColor}`}
            ></span>
          </p>
          <aside className="relative lgst:hidden mb-[15px]">
            <Image
              src={theme.picture.hero}
              alt={"Imagem meramente ilustrativa de " + theme.foodText}
              className="w-full max-w-[200px] ssm:max-w-[250px] m-auto transition-all duration-[.25s]"
            />
            <Image
              src={theme.picture.hero}
              alt={"Imagem meramente ilustrativa de " + theme.foodText}
              className="mirror-picture absolute left-1/2 -bottom-[40%] w-full max-w-[200px] ssm:max-w-[250px] m-auto opacity-[.10] blur-[2px] transition-all duration-[.25s]"
            />
          </aside>
          <p className="relative text-[28px] smlst:text-[32px] ssm:text-[38px] text-center lgst:text-left w-fit px-[15px] mb-[52px] lgst:mb-[26px]">
            Pode contar <br className="lgst:hidden" />
            com a{" "}
            <span
              className={`${secondaryFont.className} text-[32px] smlst:text-[36px] ssm:text-[48px] ${theme.textColor}`}
            >
              Burger.
            </span>
            <span
              className={`absolute -translate-x-1/2 left-1/2 bottom-[0px] w-full h-[4px] ${theme.bgColor}`}
            ></span>
          </p>
          <Link href={"/cardapio"} className="w-fit ml-[15px]">
            <Button
              bgColor={theme.bgColor}
              text={"Vamos Lá"}
              fontSize="28px"
              irregular={true}
              auto={false}
            />
          </Link>
        </aside>
        <aside className="relative hidden lgst:block">
          <Image
            src={theme.picture.hero}
            alt={"Imagem meramente ilustrativa de " + theme.foodText}
            className="w-full max-w-[300px] m-auto"
          />
          <Image
            src={theme.picture.hero}
            alt={"Imagem meramente ilustrativa de " + theme.foodText}
            className="mirror-picture absolute left-1/2 -bottom-[40%] w-full max-w-[300px] m-auto opacity-[.10] blur-[2px]"
          />
        </aside>
        <p className="absolute left-0 bottom-[26px] text-center w-full md:w-fit text-[#939393] font-medium transition-all duration-[.25s]">
          © Burger, {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
      <Image
        src={theme.picture.border.picture}
        alt={"Imagem meramente ilustrativa de " + theme.picture.border.text}
        className="hidden md:block absolute right-0 bottom-0 w-full max-w-[300px] lgst:max-w-[350px] transition-all duration-[.25s]"
      />
      <Image
        src={theme.picture.border.picture}
        alt={"Imagem meramente ilustrativa de " + theme.picture.border.text}
        className="hidden md:block mirror-border-picture absolute right-0 bottom-0 w-full max-w-[300px] lgst:max-w-[350px] opacity-[.15] blur-[2px] transition-all duration-[.25s]"
      />
      <span className="absolute bottom-[82px] sxsm:bottom-[65px] md:bottom-[33px] left-1/2 -translate-x-1/2 flex gap-[15px] transition-all duration-[.25s]">
        {["bg-default", "bg-pizza", "bg-acai"].map((elem, i) => (
          <SlideDots
            key={"dot-" + i}
            behaviour={
              theme.bgColor.includes(elem) ? `${elem} scale-[125%]` : "bg-black"
            }
          />
        ))}
      </span>
    </section>
  );
}

export default Hero;
