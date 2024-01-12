"use client";

import Image from "next/image";
import magnifyingGlassIcon from "@/public/media/icons/magnifying-glass-icon.png";
import allIcon from "@/public/media/icons/filter-icon.png";
import burgerIcon from "@/public/media/icons/burger-icon.png";
import pizzaIcon from "@/public/media/icons/pizza-icon.png";
import acaiIcon from "@/public/media/icons/acai-icon.png";

import clsx from "clsx";

function SearchBar({
  search,
  filter,
  setFilter,
}: {
  search: (val: string) => {};
  filter: string;
  setFilter: (val: string) => {};
}) {
  return (
    <label className="relative flex items-center gap-[10px] w-full max-w-[600px] py-[5.75px] px-[10px] mb-[52px] smd:mb-[0px] bg-white rounded-[25px] transition-all duration-[.25s]">
      <Image
        src={magnifyingGlassIcon}
        alt={
          "Ícone representativo de uma lupa para interatividade com barra de pesquisa"
        }
        className="w-[20px]"
      />
      <input
        type="text"
        id="search-bar-input"
        autoComplete="off"
        placeholder="Qual o tamanho da sua fome hoje?"
        className="w-full bg-transparent focus:border-none focus:outline-none"
        onChange={(e) => search(e.target.value)}
      />
      <div className="absolute smd:static left-1/2 smd:right-0 bottom-[-26px] -translate-x-1/2 translate-y-full smd:translate-x-0 smd:translate-y-0 flex items-center gap-[10px] min-w-[190px] max-w-fit bg-white px-[10px] smd:px-0 py-[5.75px] smd:py-0 rounded-full transition-all duration-[.25s]">
        {[
          { src: allIcon, param: "Todos" },
          { src: burgerIcon, param: "Hambúrgueres" },
          { src: pizzaIcon, param: "Pizzas" },
          { src: acaiIcon, param: "Açaís" },
        ].map((icon, i) => (
          <Image
            key={"category-icon-" + i}
            src={icon.src}
            alt={"Ícone representativo da categoria: " + icon.param}
            className={
              "w-[17.5px] " +
              clsx({
                hidden: filter !== icon.param,
              })
            }
          />
        ))}
        <select
          className="w-fit hover:bg-[#f7f7f7] focus:outline-none focus:border-none"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          {[
            { text: "Todos", val: "all" },
            { text: "Hambúrgueres", val: "burgers" },
            { text: "Pizzas", val: "pizzas" },
            { text: "Açaís", val: "acais" },
          ].map((option, i) => (
            <option key={"opition-" + i}>{option.text}</option>
          ))}
        </select>
      </div>
    </label>
  );
}

export default SearchBar;
