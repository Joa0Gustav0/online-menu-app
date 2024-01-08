"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/media/icons/nobg-logo-icon.png";
import { secondaryFont } from "../fonts";
import DivisionLine from "../DivisionLine";
import SideBarLinks from "./SideBarLinks";
import bagIcon from "@/public/media/icons/bag-icon.png";
import burgerIcon from "@/public/media/icons/burger-icon.png";
import profileIcon from "@/public/media/icons/profile-icon.png";
import bagWhiteIcon from "@/public/media/icons/bag-white-icon.png";
import burgerWhiteIcon from "@/public/media/icons/burger-white-icon.png";
import profileWhiteIcon from "@/public/media/icons/profile-white-icon.png";
import blob from "@/public/media/extra/filled-yellow-blob-picture.png";
import closeIcon from "@/public/media/icons/close-icon.png"

import { useState } from "react";
import clsx from "clsx";

function SideBar( {sidebarActive, setSidebarStatus}: {sidebarActive: boolean, setSidebarStatus: (val: boolean) => {}} ) {
  return (
    <>
      <div
        onClick={() => setSidebarStatus(false)}
        className={`fixed top-0 left-0 flex justify-end items-stretch w-full min-h-[-webkit-fill-available] h-screen bg-[rgba(0,0,0,.25)] z-[140] transition-all duration-[.5s] ${clsx(
          {
            "translate-x-[110%]": sidebarActive === false,
          }
        )}`}
      ></div>
      <aside
        className={`fixed top-0 right-0 overflow-hidden w-full max-w-[320px] h-full max-h-full p-[26px] pb-[235px] bg-white transition-transform duration-[.5s] z-[150] ${clsx(
          {
            "translate-x-[110%]": sidebarActive === false,
          }
        )}`}
      >
        <button onClick={() => setSidebarStatus(false)} className="group absolute top-[35px] right-[26px]">
          <Image src={closeIcon} alt={"Icone representativo do botão para ocultar barra de navegação lateral"} className="w-[25px] group-hover:scale-[115%] group-hover:animate-button_hover group-active:scale-[85%] rounded-full transition-all duration-[.125s]" />
        </button>
        <div className="max-w-min m-auto">
          <Link href={"/"} className="group relative" onClick={() => setSidebarStatus(false)}>
            <h1
              className={`w-fit m-auto text-[28px] ${secondaryFont.className} group-hover:scale-[0%] transition-all duration-[.25s]`}
            >
              Burger.
            </h1>
            <Image
              src={logo}
              alt="Imagem referente à logo desse website"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] scale-[0%] group-hover:scale-[100%] group-active:scale-[75%] transition-all duration-[.25s]"
            />
          </Link>
        </div>
        <DivisionLine />
        <SideBarLinks setSidebarStatus={() => setSidebarStatus(false)}
          links={[
            {
              icon: burgerIcon,
              altIcon: burgerWhiteIcon,
              text: "Cardápio",
              href: "/cardapio",
            },
            {
              icon: bagIcon,
              altIcon: bagWhiteIcon,
              text: "Sacola",
              href: "/sacola",
            },
            {
              icon: profileIcon,
              altIcon: profileWhiteIcon,
              text: "Configurações do Perfil",
              href: "/configuracoes-do-perfil",
            },
          ]}
        />
        <h1 className="absolute bottom-[26px] left-1/2 -translate-x-1/2 text-center text-white font-medium z-[2]">
          © Burger, 2023.
          <br />
          All rights reserved.
        </h1>
        <Image
          src={blob}
          alt="Imagem de uma figura abstrata"
          className="absolute left-0 translate-x-[-35px] bottom-[40px] rotate-[-132.5deg] min-w-[400px] translate-y-1/2"
        />
      </aside>
    </>
  );
}

export default SideBar;
