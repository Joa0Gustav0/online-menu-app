"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import burgerImg from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import seal from "@/public/media/icons/check-mark.png";
import Title from "../ui/Title";
import { secondaryFont } from "../ui/fonts";
import Button from "../ui/button";
import Link from "next/link";

function Page() {
  onbeforeunload = () => {
    localStorage.removeItem("@burg3r_Is_bought");
  };

  const { push } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("@burg3r_Is_bought") === null) {
      push("/");
    }
  }, );

  return (
    <main
      className={
        "w-full bg-[#f5f5f5]"
      }
    >
      <div className="w-full max-w-[1115px] flex flex-col smlg:flex-row items-center justify-center smlg:justify-evenly min-h-screen px-[20px] smlst:px-[36px] pt-[180px] pb-[85px] m-auto">
        <aside className={`${localStorage.getItem("@burg3r_Is_bought") === null ? "hidden" : ""} smlst:text-[20px] text-center smlg:text-left order-last smlg:order-first z-[5]`}>
          <Title text="" span="🍔 Show de Bola! 🎉" />
          <p className="text-[#636363]">Pedido realizado com sucesso!</p>
          <p className="text-[#636363]">Verifique o seu {localStorage.getItem("@burg3r_Is_method")} para detalhes.</p>
          <p className="my-[15px] font-medium">
            A <span className={secondaryFont.className}>Burger</span> agradece
            pela preferência.
          </p>
          <Link href={"/"} className="flex w-fit m-auto smlg:m-0">
            <Button
              text={
                <>
                  Voltar <br /> ao Início
                </>
              }
              fontSize=""
              auto={false}
              irregular={true}
              arrow={"invert"}
            />
          </Link>
        </aside>
        <aside className={`${localStorage.getItem("@burg3r_Is_bought") === null ? "hidden" : ""} relative`}>
          <Image
            src={burgerImg}
            alt={"Imagem meramente ilustrativa de um hambúrguer"}
            className="w-full max-w-[150px] smlst:max-w-[200px] m-auto transition-all duration-[.25s]"
          />
          <Image
            src={burgerImg}
            alt={"Imagem meramente ilustrativa de um hambúrguer"}
            className="mirror-picture absolute left-1/2 -bottom-[40%] w-full max-w-[150px] smlst:max-w-[200px] m-auto opacity-[.1] blur-[2px] transition-all duration-[.25s]"
          />
          <Image
            src={seal}
            alt={"Imagem meramente ilustrativa de um hambúrguer"}
            className="absolute top-[-15px] right-[-40px] smlst:right-[-60px] smlst:-top-[40px] w-full max-w-[100px] smlst:max-w-[150px] m-auto transition-all duration-[.25s]"
          />
        </aside>
      </div>
    </main>
  );
}

export default Page;
