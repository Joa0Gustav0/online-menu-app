"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import SideBar from "./SideBar";
import Image from "next/image";
import logo from "@/public/media/icons/nobg-logo-icon.png";
import { secondaryFont } from "../fonts";
import clsx from "clsx";

import { useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    var test = typeof window === undefined;
    if (test === false) {
      setScrolled(window.scrollY > 0);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 ${
        secondaryFont.className
      } w-full px-[36px] py-[26px] text-black bg-white z-[100] ${clsx({
        "shadow-md": scrolled,
      })} transition-all duration-[.25s]`}
    >
      <div className="flex flex-row justify-between w-full max-w-[1115px] m-auto">
        <Link href={"/"} className="group relative">
          <h1
            className={`w-fit text-[28px] group-hover:scale-[0%] transition-all duration-[.25s]`}
          >
            Burger.
          </h1>
          <Image
            src={logo}
            alt="Imagem referente à logo desse website"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] scale-[0%] group-hover:scale-[100%] group-active:scale-[75%] transition-all duration-[.25s]"
          />
        </Link>
        <NavLink
          links={[
            { text: "Início", href: "/" },
            { text: "Sobre Nós", href: "/#sobre" },
            { text: "Avaliações", href: "/#avaliacoes" },
            { text: "Cardápio", href: "/cardapio" },
          ]}
        />
        <SideBar />
      </div>
    </header>
  );
}

export default Header;
