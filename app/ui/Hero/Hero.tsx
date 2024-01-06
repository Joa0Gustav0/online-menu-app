import Image, { StaticImageData } from "next/image";
import Button from "../button";
import Link from "next/link";
import { secondaryFont } from "../fonts";
import clsx from "clsx";

function Hero({
  theme,
}: {
  theme: {
    foodText: string,
    picture: {
      hero: StaticImageData;
      border: {
        picture: StaticImageData;
        mirrorBorder?: boolean;
        text: string;
      };
    };
    textColor: string;
    bgColor: string;
  };
}) {
  return (
    <section className="relative w-full max-w-[1366px] px-[36px] m-auto">
      <div className="relative flex justify-around items-center w-full max-w-[1115px] min-h-screen m-auto">
        <aside className="flex flex-col font-bold">
          <p className="relative text-[28px] w-fit px-[15px] mb-[5px]">
            Sua fome pede por{" "}
            <span className={`${theme.textColor}`}>{theme.foodText}.</span>
            <span
              className={`absolute -translate-x-1/2 left-1/2 bottom-[-5px] w-full h-[4px] ${theme.bgColor}`}
            ></span>
          </p>
          <p className="relative text-[46px] w-fit px-[15px] mb-[26px]">
            Pode contar com a{" "}
            <span
              className={`${secondaryFont.className} text-[48px] ${theme.textColor}`}
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
        <aside className="relative">
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
        <p className="absolute left-0 bottom-[26px] text-[#939393] font-medium">
          © Burger, {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
      <Image
        src={theme.picture.border.picture}
        alt={"Imagem meramente ilustrativa de " + theme.picture.border.text}
        className="absolute right-0 bottom-0 w-[375px]"
      />
      {theme.picture.border.mirrorBorder && (
        <Image
          src={theme.picture.border.picture}
          alt={"Imagem meramente ilustrativa de " + theme.picture.border.text}
          className="mirror-border-picture absolute right-0 bottom-0 w-[375px] opacity-[.15] blur-[2px]"
        />
      )}
    </section>
  );
}

export default Hero;
