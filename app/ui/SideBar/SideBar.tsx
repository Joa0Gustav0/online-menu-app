"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/media/icons/nobg-logo-icon.png";
import { secondaryFont } from "../fonts";
import DivisionLine from "../DivisionLine";
import SideBarLinks from "./SideBarLinks";

import homeIcon from "@/public/media/icons/home-icon.png";
import homeWhiteIcon from "@/public/media/icons/home-white-icon.png";
import aboutIcon from "@/public/media/icons/magnifying-glass-icon.png";
import aboutWhiteIcon from "@/public/media/icons/magnifying-glass-white-icon.png";
import reviewsIcon from "@/public/media/icons/feedback-icon.png";
import reviewsWhiteIcon from "@/public/media/icons/feedback-white-icon.png";
import bagIcon from "@/public/media/icons/bag-icon.png";
import burgerIcon from "@/public/media/icons/burger-icon.png";
import profileIcon from "@/public/media/icons/profile-icon.png";
import bagWhiteIcon from "@/public/media/icons/bag-white-icon.png";
import burgerWhiteIcon from "@/public/media/icons/burger-white-icon.png";
import profileWhiteIcon from "@/public/media/icons/profile-white-icon.png";
import blob from "@/public/media/extra/filled-yellow-blob-picture.png";
import closeIcon from "@/public/media/icons/close-icon.png";

import { useState } from "react";
import clsx from "clsx";

function SideBar({
  sidebarActive,
  setSidebarStatus,
}: {
  sidebarActive: boolean;
  setSidebarStatus: (val: boolean) => {};
}) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 flex justify-end items-stretch w-full min-h-[-webkit-fill-available] h-screen bg-[rgba(0,0,0,.25)] z-[140] transition-all duration-[.5s] ${clsx(
          {
            "translate-x-[110%]": sidebarActive === false,
          }
        )}`}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full max-w-[320px] py-[15px] bg-white z-[155] transition-transform duration-[.5s] ${clsx(
          {
            "translate-x-[110%]": sidebarActive === false,
          }
        )}`}
      >
        <Link
          href={"/"}
          className="group relative flex max-w-fit m-auto"
          onClick={() => setSidebarStatus(false)}
        >
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
        <button
          onClick={() => setSidebarStatus(false)}
          className="group fixed top-[25px] right-[36px] z-[156]"
        >
          <Image
            src={closeIcon}
            alt={
              "Icone representativo do botão para ocultar barra de navegação lateral"
            }
            className="w-[25px] group-hover:scale-[115%] group-hover:animate-button_hover group-active:scale-[85%] rounded-full transition-all duration-[.125s]"
          />
        </button>
      </div>
      <aside
        className={`sidebar fixed top-0 right-0 overflow-y-auto overflow-x-hidden flex flex-col justify-between w-full max-w-[320px] min-h-fit max-h-full px-[26px] mt-[70px] py-[15px] bg-white transition-transform duration-[.5s] z-[150] ${clsx(
          {
            "translate-x-[110%]": sidebarActive === false,
          }
        )}`}
      >
        <SideBarLinks
          setSidebarStatus={() => setSidebarStatus(false)}
          links={[
            {
              icon: homeIcon,
              altIcon: homeWhiteIcon,
              text: "Início",
              href: "/",
            },
            {
              icon: aboutIcon,
              altIcon: aboutWhiteIcon,
              text: "Sobre Nós",
              href: "/#sobre",
            },
            {
              icon: reviewsIcon,
              altIcon: reviewsWhiteIcon,
              text: "Avaliações",
              href: "/#avaliacoes",
            },
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
        <DivisionLine />
        <h1 className="relative w-full text-white font-medium overflow-visible mt-[36px] text-center z-[11]">
          © Burger, {new Date().getFullYear()}.
          <br />
          All rights reserved.
          <div className="absolute bottom-[-15px] left-[-26px] w-[320px] max-w-[320px] h-[80px] z-[-1] bg-default"></div>
        </h1>
      </aside>
    </>
  );
}

export default SideBar;
