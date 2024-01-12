"use client";

import Image from "next/image";
import blob from "@/public/media/extra/yellow-blob-picture.png";
import Title from "../ui/Title";
import SearchBar from "../ui/SearchBar";
import data from "@/public/products.json";
import clsx from "clsx";
import { useState } from "react";
import MenuProduct from "../ui/MenuProduct";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductInspection from "../ui/ProductInspection";
import { secondaryFont } from "../ui/fonts";
import { Metadata } from "next";

function Page() {
  const [filter, setFilter] = useState<string>("Todos");
  const [search, setSearch] = useState("");

  const productsData = data.products;
  const productsCategories = [
    productsData.burgers,
    productsData.pizzas,
    productsData.acais,
  ];

  const path = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const { replace } = useRouter();

  return (
    <main className="relative flex justify-center items-center w-full min-h-screen m-auto px-[20px] smlst:px-[36px] pt-[110px] pb-[36px] bg-[#f5f5f5] overflow-hidden transition-all duration-[.25s]">
      <div
        className={`fixed top-0 left-0 w-full min-h-[-webkit-fill-available] h-screen bg-[rgba(0,0,0,.25)] z-[140] transition-all duration-[.5s] ${clsx(
          {
            "translate-x-[-110%]": !searchParams.get("item"),
          }
        )}`}
      ></div>
      <ProductInspection />
      <div className="relative flex flex-col items-center gap-[26px] w-full max-w-[1115px] z-[10]">
        <Title text="Bem vindo(a) ao nosso" span="cardápio!" />
        <SearchBar
          filter={filter}
          setFilter={async (val) => setFilter(val)}
          search={async (searchVal) => setSearch(searchVal)}
        />
        <div className="flex flex-col items-center gap-[26px]">
          <aside className="hidden smd:flex items-center justify-between w-full px-[41px] text-[1.2em] font-semibold">
            <h1>Informações</h1>
            <h1 className="w-[150px] text-center">Item</h1>
          </aside>
          <ul
            id="menu-list"
            className="flex flex-col items-center gap-[26px] h-[50vh] min-h-[340px] overflow-y-auto px-[26px] pt-[10px] pb-[26px]"
          >
            {productsCategories.map((categorie) =>
              categorie.map((product, i) =>
                typeof product !== "string" ? (
                  <MenuProduct
                    search={search}
                    filter={filter}
                    key={"menu-product-" + i}
                    param={categorie[0]}
                    product={product}
                  />
                ) : null
              )
            )}
          </ul>
        </div>
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
