"use client";

import { storageData } from "./StorageData";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import data from "@/public/products.json";
import Image from "next/image";
import burgerIcon from "@/public/media/icons/burger-icon.png";
import pizzaIcon from "@/public/media/icons/pizza-icon.png";
import acaiIcon from "@/public/media/icons/acai-icon.png";
import Button from "./button";
import clsx from "clsx";
import closeIcon from "@/public/media/icons/close-icon.png";
import Link from "next/link";
import { useState } from "react";
import DivisionLine from "./DivisionLine";
import Inputs from "./Inputs";

function ProductInspection() {
  var categories = [
    data.products.burgers,
    data.products.pizzas,
    data.products.acais,
  ];

  const [quantity, setQuantity] = useState<number>(1);

  const path = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const { replace } = useRouter();

  return (
    <div
      className={
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit max-h-[100vh] overflow-y-auto transition-all duration-[.5s] z-[150] " +
        clsx({
          "-left-1/2": !searchParams.get("item"),
        })
      }
    >
      {categories.map((categorie) =>
        categorie.map((product) =>
          typeof product !== "string" &&
          product.productName.toLowerCase() ===
            searchParams.get("item")?.toLowerCase() ? (
            <div
              key={"inspection-product"}
              className="relative flex flex-col items-center gap-[10px] w-full max-w-[300px] p-[15px] bg-white rounded-[10px]"
            >
              <div
                onClick={() => {
                  searchParams.delete("item");
                  replace(`${path}?${searchParams}`);
                  setQuantity(1);
                }}
                className="absolute top-0 right-0 w-[35px] hover:w-[40px] active:w-[35px] p-[10px] hover:p-[12.75px] active:p-[10px] hover:cursor-pointer bg-white rounded-full transition-all duration-[.25s]"
              >
                <Image
                  src={closeIcon}
                  alt={"Ícone representativo do botão de"}
                />
              </div>
              <Image
                src={product.productPicture}
                alt={"Imagem referente ao produto: " + product.productName}
                width={275}
                height={275}
                className="rounded-[10px]"
              />
              <aside className="flex flex-col gap-[5px] w-full">
                <div className="flex items-center justify-between w-full text-[1.15em] font-semibold">
                  {product.productName}
                  <Image
                    className="min-w-[20px] max-w-[20px]"
                    src={
                      categorie[0] === "Hambúrgueres"
                        ? burgerIcon
                        : categorie[0] === "Pizzas"
                        ? pizzaIcon
                        : acaiIcon
                    }
                    alt={
                      "Ícone referente a categoria de produtos: " + categorie[0]
                    }
                  />
                </div>
                <p>{product.productDescription}</p>
                <p className="text-[1.15em] font-semibold">
                  {product.productPrice}
                </p>
                {/* <h1 className="text-[1.15em] font-semibold">Observações</h1> */}
                <Inputs props={{title: "Observações", placeholder: "Alguma observação?", infos: false}} />
                <div className="flex items-center justify-between pt-[15px]">
                  <div className="flex items-center justify-center gap-[20px] text-[18px] font-bold">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className={`flex justify-center items-center w-[15px] h-[15px] p-[15px] text-[#c7c7c7] bg-[#f1f1f1] rounded-full transition-all duration-[.25s] ${clsx(
                        {
                          "text-[#fbc00f] bg-white hover:text-white hover:bg-default active:scale-[85%] active:transition-none":
                            quantity > 1,
                        }
                      )}`}
                    >
                      -
                    </button>
                    <p className="w-[16px]">{quantity}</p>
                    <button
                      onClick={() => {
                        if (quantity < 10) {
                          setQuantity(quantity + 1);
                        }
                      }}
                      className={`flex justify-center items-center w-[15px] h-[15px] p-[15px] text-[#c7c7c7] bg-[#f1f1f1] rounded-full transition-all duration-[.25s] ${clsx(
                        {
                          "text-[#fbc00f] bg-white hover:text-white hover:bg-default active:scale-[85%] active:transition-none":
                            quantity < 10,
                        }
                      )}`}
                    >
                      +
                    </button>
                  </div>
                  <Link
                    href={"/sacola"}
                    onClick={() => {
                      storageData(product, quantity, (document.getElementById("input-for-observações") as HTMLInputElement).value);
                      searchParams.delete("item");
                      replace(`${path}?${searchParams}`);
                      setQuantity(1);
                      
                    }}
                  >
                    <Button
                      text={"Adicionar"}
                      fontSize=""
                      auto={false}
                      irregular={true}
                    />
                  </Link>
                </div>
              </aside>
            </div>
          ) : null
        )
      )}
    </div>
  );
}

export default ProductInspection;
