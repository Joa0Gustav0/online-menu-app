"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import logo from "@/public/media/icons/nobg-logo-icon.png"

function Footer() {
  return ( 
    <footer className={`w-full py-[26px] px-[36px] text-black bg-[#f5f5f5] ${clsx({
      "bg-white": usePathname() !== "/"
    })}`}>
      <div className="flex items-center justify-between w-full max-w-[1115px] m-auto">
        <FooterLinks links={
          [
            {text: "Início", href: "/"},
            {text: "Sobre Nós", href: "/#sobre"},
            {text: "Avaliações", href: "/#avaliacoes"},
            {text: "Cardápio", href: "/cardapio"},
          ]
        } />
        <span className="flex items-center font-medium">
          <Image src={logo} alt="Imagem referente a logo do website" className="w-[46px]" />
          <p>© Burger, {new Date().getFullYear()}. All rights reserved.</p>
        </span>
      </div>
    </footer>
   );
}

export default Footer;