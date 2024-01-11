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
        "w-full max-w-[1366px] flex items-center justify-around min-h-screen px-[36px] bg-[#f5f5f5]"
      }
    >
      <aside className={`${localStorage.getItem("@burg3r_Is_bought") === null ? "hidden" : ""} text-[20px]`}>
        <Title text="" span="🍔 Show de Bola! 🎉" />
        <p className="text-[#636363]">Pedido realizado com sucesso!</p>
        <p className="mb-[15px]">
          A <span className={secondaryFont.className}>Burger</span> agradece
          pela preferência.
        </p>
        <Link href={"/"}>
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
          className="w-full max-w-[200px] m-auto"
        />
        <Image
          src={burgerImg}
          alt={"Imagem meramente ilustrativa de um hambúrguer"}
          className="mirror-picture absolute left-1/2 -bottom-[40%] w-full max-w-[200px] m-auto opacity-[.10] blur-[2px]"
        />
        <Image
          src={seal}
          alt={"Imagem meramente ilustrativa de um hambúrguer"}
          className="absolute right-[-60px] -top-[40px] w-full max-w-[150px] m-auto"
        />
      </aside>
    </main>
  );
}

export default Page;
