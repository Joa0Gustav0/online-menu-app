"use client";

import Hero from "./ui/Hero/Hero";
import burgerHero from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import _burgerHero from "@/public/media/sections-pictures/hero/french-fries-hero-picture.png";
import pizzaHero from "@/public/media/sections-pictures/hero/pizza-hero-picture.png";
import overlapPizzaHero from "@/public/media/sections-pictures/hero/overlap-pizza-hero-picture.png";
import _pizzaHero from "@/public/media/sections-pictures/hero/tomatoes-hero-picture.png";
import acaiHero from "@/public/media/sections-pictures/hero/acaii-hero-picture.png";
import _acaiHero from "@/public/media/sections-pictures/hero/acai-leaves-hero-picture.png";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import About from "./ui/About/About";
import Reviews from "./ui/Reviews/Reviews";
import Button from "./ui/button";
import { secondaryFont } from "./ui/fonts";
import arrowIcon from "@/public/media/icons/arrow-icon.png";

export default function Home() {
  const themes = ["default", "pizza", "acai"];
  const themesProps = {
    foodText: ["hambúrguer", "pizza", "açaí"],
    pictures: [
      {
        hero: burgerHero,
        border: { picture: _burgerHero, text: "batatas fritas" },
      },
      {
        hero: pizzaHero,
        border: { picture: _pizzaHero, text: "pizzas" },
      },
      {
        hero: acaiHero,
        border: { picture: _acaiHero, text: "açaí" },
      },
    ],
  };
  const [pageTheme, setPageTheme] = useState("default");
  useEffect(() => {
    setTimeout(() => {
      setPageTheme(
        themes.indexOf(pageTheme) < 2
          ? themes[themes.indexOf(pageTheme) + 1]
          : themes[0]
      );
    }, 4000);
  });

  var theme = {
    foodText: themesProps.foodText[themes.indexOf(pageTheme)],
    picture: themesProps.pictures[themes.indexOf(pageTheme)],
    bgColor: clsx({
      "bg-default transition-color duration-[.5s]": pageTheme === "default",
      "bg-pizza transition-color duration-[.5s]": pageTheme === "pizza",
      "bg-acai transition-color duration-[.5s]": pageTheme === "acai",
    }),
    textColor: clsx({
      "text-default transition-color duration-[.5s]": pageTheme === "default",
      "text-pizza transition-color duration-[.5s]": pageTheme === "pizza",
      "text-acai transition-color duration-[.5s]": pageTheme === "acai",
    }),
    borderColor: clsx({
      "border-default transition-color duration-[.5s]": pageTheme === "default",
      "border-pizza transition-color duration-[.5s]": pageTheme === "pizza",
      "border-acai transition-color duration-[.5s]": pageTheme === "acai",
    })
  };

  return (
    <main className="relative w-full max-w-[1366px] m-auto pb-[26px] overflow-x-hidden">
      <Hero theme={theme} />
      <About theme={theme} />
      <Reviews theme={theme} />
      <div className="flex items-center w-full">
        <div className={theme.bgColor + " hidden md:flex justify-end w-1/2  py-[15px]"}>
          <div
            className={
              secondaryFont.className +
              " flex justify-end pr-[98px] relative uppercase text-white text-[18px] lg:text-[24px] lgst:text-[34px] text-center transition-all duration-[.25s]"
            }
          >
            <div className="flex items-center gap-[36px]">
              <h1>
                Hora de Matar <br /> A Sua Fome!
              </h1>
              <Image
                src={arrowIcon}
                alt={"Imagem representativa de uma seta"}
                className="w-[45px] lg:w-[60px] lgst:w-[80px] transition-all duration-[.25s]"
              />
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white w-[92px] h-[92px] rotate-45"></div>
          </div>
        </div>
        <Link href={"/cardapio"} className="absolute right-1/2 md:right-1/4 translate-x-1/2 bottom-[60px] md:bottom-[29px] lg:bottom-[38px] lgst:bottom-[51px] transition-all duration-[.25s]">
          <Button
            text={
              <>
                Conhecer
                <br />
                Cardápio
              </>
            }
            fontSize="24px"
            bgColor={theme.bgColor}
            auto={false}
            irregular={true}
          />
        </Link>
      </div>
    </main>
  );
}
