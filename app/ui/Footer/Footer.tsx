"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import logo from "@/public/media/icons/nobg-logo-icon.png"

function Footer() {
  return ( 
    <footer className={`w-full py-[26px] px-[36px] text-black bg-[#f5f5f5] z-[100] ${clsx({
      "bg-white": usePathname() !== "/"
    })}`}>
      <div className="flex flex-col ssm:flex-row items-center ssm:items-start smlg:items-center gap-[36px] justify-between w-full max-w-[1115px] m-auto overflow-visible">
        <FooterLinks links={
          [
            {text: "Início", href: "/"},
            {text: "Sobre Nós", href: "/#sobre"},
            {text: "Avaliações", href: "/#avaliacoes"},
            {text: "Cardápio", href: "/cardapio"},
            {text: "Sacola", href: "/sacola"},
            {text: "Perfil", href: "/configuracoes-do-perfil"},
          ]
        } />
        <span className="flex flex-col xsm:flex-row items-center font-medium min-w-fit gap-[7.5px]">
          <Image src={logo} alt="Imagem referente a logo do website" className="w-[46px]" />
          <p className="hidden md:block">© Burger, {new Date().getFullYear()}. All rights reserved.</p>
          <p className="md:hidden text-center">© Burger, {new Date().getFullYear()}. <br />All rights reserved.</p>
        </span>
      </div>
    </footer>
   );
}

export default Footer;