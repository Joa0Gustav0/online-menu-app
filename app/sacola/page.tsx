"use client";

import BagProduct from "../ui/BagProduct";
import Title from "../ui/Title";
import { useState, useEffect } from "react";

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
    if (typeof localStorage.getItem("@burg3r_Is_bag") !== undefined) {
      setOnBag(JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string))
    }
  });

  return (
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
          className="flex flex-col items-center w-full max-w-[700px] px-[15px] gap-[26px] h-[50vh] min-h-[340px] overflow-y-auto pt-[10px] pb-[26px]"
        >
          {onBag.map((item, i) => (
            <BagProduct key={"item-" + i} item={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Page;
