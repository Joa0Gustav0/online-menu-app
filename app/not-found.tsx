import Image from "next/image";
import Link from "next/link";
import notFoundPicture from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import Button from "./ui/button";
import { primaryFont, secondaryFont } from "./ui/fonts";
import Title from "./ui/Title";

function notFoundPage() {
  return (
    <main
      className={
        "w-full min-h-screen px-[20px] smlst:px-[36px] bg-[#f5f5f5] " + secondaryFont.className
      }
    >
      <div className="relative flex flex-col justify-center items-center gap-[32px] w-full max-w-[1115px] min-h-screen m-auto text-center pt-[140px] pb-[45px] overflow-x-hidden">
        <Title text="Erro" span="404" />
        <Image
          src={notFoundPicture}
          alt={"Imagem meramente ilustrativa de um hambúrguer"}
          className="w-full max-w-[150px] smlst:max-w-[200px] opacity-[.25] blur-[2px] transition-all duration-[.25s]"
        />
        <aside>
          <Title text="Página Não Encontrada"/>
          <p className={"hidden smlst:block text-[16px] ssm:text-[20px] font-medium transition-all duration-[.25s] " + primaryFont.className}>
            Onde estão as{" "}
            <span className="text-default font-semibold">comidinhas</span>
            ?!...🍔🍕🍟
          </p>
          <p className={"smlst:hidden text-[16px] ssm:text-[20px] font-medium transition-all duration-[.25s] " + primaryFont.className}>
            Onde estão as{" "}
            <span className="text-default font-semibold">comidinhas</span>
            ?! <br />🍔🍕🍟
          </p>
          <Link
            href={"/"}
            className="lgst:hidden flex max-w-fit m-auto my-[26px]"
          >
            <Button
              text={
                <p>
                  Voltar à<br />
                  navegação
                </p>
              }
              fontSize={"18px"}
              irregular={true}
              auto={false}
              arrow={"invert"}
            />
          </Link>
        </aside>
        <Link
          href={"/"}
          className="hidden lgst:block absolute right-[45px] top-1/2 -translate-y-1/2"
        >
          <Button
            text={
              <p>
                Voltar à<br />
                navegação
              </p>
            }
            fontSize={"20px"}
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
