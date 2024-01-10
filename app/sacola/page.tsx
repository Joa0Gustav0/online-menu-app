"use client";

import BagProduct from "../ui/BagProduct";
import Title from "../ui/Title";
import { useState } from "react";
import Image from "next/image";
import burgerPicture from "@/public/media/sections-pictures/hero/hamburguer-hero-picture.png";
import PaymentTab from "../ui/PaymentTab";
import clsx from "clsx";

function Page() {
  type onBag = {
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string;
  }[];

  const [onBag, setOnBag] = useState<onBag | []>(
    typeof localStorage.getItem("@burg3r_Is_bag") !== undefined
      ? JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string)
      : []
  );

  setInterval(() => {
    if (
      typeof localStorage.getItem("@burg3r_Is_bag") !== undefined &&
      onBag !== JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string)
    ) {
      setOnBag(JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string));
    }
  });

  return (
    <>
      {/* <PaymentTab onBag={onBag} />
      <div
        className={`fixed top-0 left-0 w-full min-h-[-webkit-fill-available] h-screen bg-[rgba(0,0,0,.25)] z-[140] transition-all duration-[.5s] ${clsx(
          {
            "translate-x-[-110%]": 2 + 2 === 3,
          }
        )}`}
      ></div> */}
      <main className="relative flex justify-center items-center w-full min-h-screen m-auto pt-[110px] pb-[36px] bg-[#f5f5f5]">
        <div className="relative flex flex-col items-center gap-[26px] w-full max-w-[1115px] z-[10]">
          <Title text={"Essas é a sua"} span="sacola!" />
          <aside className="flex items-center justify-between w-full max-w-[650px] px-[30px] text-[1.2em] font-semibold">
            <h1>Item</h1>
            <h1>Quantidade</h1>
            <h1>Preço</h1>
          </aside>
          <ul
            id="menu-list"
            className={`flex flex-col ${
              onBag.length < 1 ? "justify-center" : ""
            } items-center w-full max-w-[700px] px-[15px] gap-[26px] h-[75vh] min-h-[340px] overflow-y-auto pt-[10px] pb-[26px]`}
          >
            {onBag.length > 0 ? (
              onBag.map((item, i) => (
                <BagProduct key={"item-" + i} item={item} />
              ))
            ) : (
              <p className="text-[1.25em] text-center">
                <Image
                  src={burgerPicture}
                  alt={"Imagem de um hambúrguer"}
                  className="w-full max-w-[100px] m-auto opacity-[.2] blur-[2px]"
                />
                Sua sacola está{" "}
                <span className="text-default font-semibold">vazia!</span> 🍔💬
              </p>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Page;
