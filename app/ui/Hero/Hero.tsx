import Image, { StaticImageData } from "next/image";
import Button from "../button";
import Link from "next/link";
import { secondaryFont } from "../fonts";

function Hero({
  foodText,
  heroPicture,
  borderHeroPicture,
}: {
  foodText: string;
  heroPicture: StaticImageData;
  borderHeroPicture: {
    picture: StaticImageData;
    text: string;
  };
}) {
  return (
    <section className="relative w-full max-w-[1366px] px-[36px] m-auto">
      <div className="relative flex justify-around items-center w-full max-w-[1115px] min-h-screen m-auto">
        <aside className="flex flex-col font-bold">
          <p className="relative text-[28px] w-fit px-[15px] mb-[5px]">
            Sua fome pede por <span>{foodText}.</span>
            <span className="absolute -translate-x-1/2 left-1/2 bottom-[-5px] w-full h-[4px] bg-primaryColor"></span>
          </p>
          <p className="relative text-[46px] w-fit px-[15px] mb-[26px]">
            Pode contar com a{" "}
            <span
              className={`${secondaryFont.className} text-[48px] text-primaryColor`}
            >
              Burger.
            </span>
            <span className="absolute -translate-x-1/2 left-1/2 bottom-[0px] w-full h-[4px] bg-primaryColor"></span>
          </p>
          <Link href={"/cardapio"} className="w-fit ml-[15px]">
            <Button
              text={"Vamos Lá"}
              fontSize="28px"
              irregular={true}
              auto={false}
            />
          </Link>
        </aside>
        <aside className="relative">
          <Image
            src={heroPicture}
            alt={"Imagem meramente ilustrativa de " + foodText}
            className="w-full max-w-[300px] m-auto"
          />
          <Image
            id="mirror-picture"
            src={heroPicture}
            alt={"Imagem meramente ilustrativa de " + foodText}
            className="absolute left-1/2 -bottom-[40%] w-full max-w-[300px] m-auto opacity-[.10] blur-[2px]"
          />
        </aside>
        <p className="absolute left-0 bottom-[26px] text-[#939393] font-medium">© Burger, 2024. All rights reserved.</p>
      </div>
      <Image
        src={borderHeroPicture.picture}
        alt={"Imagem meramente ilustrativa de " + borderHeroPicture.text}
        className="absolute right-0 bottom-0 w-[375px]"
      />
    </section>
  );
}

export default Hero;
