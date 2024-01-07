"use client";

import Image from "next/image";
import blob from "@/public/media/extra/yellow-blob-picture.png";
import Title from "../ui/Title";
import SearchBar from "../ui/SearchBar";
import data from "@/public/products.json";
import clsx from "clsx";
import { useState } from "react";
import MenuProduct from "../ui/MenuProduct";

function Page() {
  const [filter, setFilter] = useState<string>("Todos");

  const productsData = data.products;
  const productsCategories = [
    productsData.pizzas,
    productsData.burgers,
    productsData.acais,
  ];

  return (
    <main className="relative flex justify-center items-center w-full min-h-screen m-auto pt-[110px] pb-[36px] bg-[#f5f5f5] overflow-hidden">
      <div className="relative flex flex-col items-center gap-[26px] w-full max-w-[1115px] z-[10]">
        <Title text="Bem vindo(a) ao nosso" span="cardápio!" />
        <SearchBar filter={filter} setFilter={async (val) => setFilter(val)} />
        <ul id="menu-list" className="flex flex-col items-center gap-[26px] h-[50vh] overflow-y-scroll">
          <aside className="flex items-center justify-between w-full max-w-[600px] px-[15px] pr-[67.5px] text-[1.2em] font-semibold">
            <h1>Informações</h1>
            <h1>Item</h1>
          </aside>
          {productsCategories.map((categorie) =>
            categorie.map((product, i) =>
              typeof product !== "string" ? (
                <MenuProduct
                  key={"menu-product-" + i}
                  filter={filter}
                  param={categorie[0]}
                  product={product}
                />
              ) : null
            )
          )}
        </ul>
      </div>
      <Image
        src={blob}
        alt={"Imagem de uma figura abstrata"}
        className="absolute -translate-x-1/2 translate-y-1/2 left-0 bottom-[205px]"
      />
      <Image
        src={blob}
        alt={"Imagem de uma figura abstrata"}
        className="absolute translate-x-1/2 -translate-y-1/2 right-0 top-[275px]"
      />
    </main>
  );
}

export default Page;
