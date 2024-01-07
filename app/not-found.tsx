import Image from "next/image";
import Link from "next/link";
import notFoundPicture from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import Button from "./ui/button";
import { primaryFont, secondaryFont } from "./ui/fonts";

function notFoundPage() {
  return (
    <main
      className={
        "w-full min-h-screen px-[36px] bg-[#f5f5f5] " +
        secondaryFont.className
      }
    >
      <div className="relative flex flex-col justify-center items-center gap-[32px] w-full max-w-[1115px] min-h-screen m-auto text-center pt-[95px] pb-[26px]">
        <h1 className="relative text-[60px]">Erro <span className="text-default">404</span></h1>
        <Image
          src={notFoundPicture}
          alt={"Imagem meramente ilustrativa de um hambúrguer"}
          className="w-full max-w-[250px] opacity-[.25] blur-[2px]"
        />
        <aside>
          <h1 className="text-[36px]">Página Não Encontrada</h1>
          <p className={"text-[20px] font-medium " + primaryFont.className}>
            Onde estão as <span className="text-default font-semibold">comidinhas</span>?!...🍔🍕🍟
          </p>
        </aside>
        <Link href={"/"} className="absolute right-[0px] top-1/2 -translate-y-1/2">
          <Button
            text={
              <p>
                Voltar à<br />
                navegação
              </p>
            }
            fontSize={"28px"}
            irregular={false}
            auto={false}
            arrow={"invert"}
          />
        </Link>
      </div>
    </main>
  );
}

export default notFoundPage;
