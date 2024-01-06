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
import { useState, useEffect } from "react";

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
        border: { picture: _pizzaHero, mirrorBorder: true, text: "pizzas" },
      },
      {
        hero: acaiHero,
        border: { picture: _acaiHero, mirrorBorder: true, text: "açaí" },
      },
    ]
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
  };

  return <Hero theme={theme} />;
}
