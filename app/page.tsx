"use client";

import Hero from "./ui/Hero/Hero";
import hamburguerHero from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import _hamburguerHero from "@/public/media/sections-pictures/hero/french-fries-hero-picture.png";
import pizzaHero from "@/public/media/sections-pictures/hero/pizza-hero-picture.png";
import _pizzaHero from "@/public/media/sections-pictures/hero/tomatoes-hero-picture.png";
import acaiHero from "@/public/media/sections-pictures/hero/acaii-hero-picture.png";
import _acaiHero from "@/public/media/sections-pictures/hero/acai-leaves-hero-picture.png";

import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Home() {
  const themes = ["default", "pizza", "acai"];
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
    bgColor: clsx({
      "bg-default transition-all duration-[.5s]": pageTheme === "default",
      "bg-pizza transition-all duration-[.5s]": pageTheme === "pizza",
      "bg-acai transition-all duration-[.5s]": pageTheme === "acai",
    }),
    textColor: clsx({
      "text-default transition-all duration-[.5s]": pageTheme === "default",
      "text-pizza transition-all duration-[.5s]": pageTheme === "pizza",
      "text-acai transition-all duration-[.5s]": pageTheme === "acai",
    }),
  };

  return (
    <Hero
      theme={theme}
      foodText="hambúrguer"
      heroPicture={hamburguerHero}
      borderHeroPicture={{ picture: _hamburguerHero, text: "batatas-fritas" }}
    />
  );
}
