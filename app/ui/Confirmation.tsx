"use client";

import { useState } from "react";

import Button from "./button";
import Image from "next/image";
import data from "@/public/products.json";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { secondaryFont } from "./fonts";

function Confirmation({
  orderStatus,
  resetQuantity,
  quantity,
}: {
  orderStatus: {
    ordered: boolean;
    rmOrdered: (val: false) => {};
  };
  resetQuantity: (val: 1) => {};
  quantity: number;
}) {
  const path = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const { replace } = useRouter();

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
    <div
      className={`fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[150] flex gap-[15px] min-w-[317.5px] w-fit bg-white p-[15px] rounded-[10px] overflow-y-auto overflow-x-hidden transition-all duration-[1s] ${clsx(
        {
          "left-[-100%] opacity-0": orderStatus.ordered === false,
        }
      )}`}
    >
      {onBag?.length > 0
        ? onBag.map((item) =>
            item.product.productName.toLowerCase() ===
            searchParams.get("item") ? (
              <>
                <div className="mb-[50px]">
                  <Image
                    src={item.product.productPicture}
                    alt={"Imagem representativa do produto: "}
                    width={150}
                    height={150}
                    className="rounded-tl-[10px] rounded-br-[100%] -translate-x-[15px] -translate-y-[15px] min-w-[150px]"
                  />
                </div>
                <div className="flex flex-col justify-between min-h-fit">
                  <aside className="mb-[15px] max-w-[300px]">
                    <h1 className="text-[1.15em] font-semibold">
                      Item Adicionado!
                    </h1>
                    <p className="text-[#434343] font-medium mb-[10px]">
                      Você adicionou:
                    </p>
                    <div className="flex flex-col gap-[5px]">
                      <h1 className="font-semibold">
                        {item.product.productName} ({quantity} Uni.)
                      </h1>
                      <p>{item.product.productDescription}</p>
                      <p className="font-semibold">R${(Number(item.product.productPrice.replace(",", ".")) * quantity).toFixed(2).toString().replace(".", ",")}</p>
                    </div>
                  </aside>
                  <div className="flex flex-row-reverse min-w-[310px] justify-end items-center gap-[20px]">
                    <div
                      onClick={() => {
                        orderStatus.rmOrdered(false);
                        resetQuantity(1);
                        searchParams.delete("item");
                        replace(`${path}?${searchParams}`);
                      }}
                    >
                      <Button
                        text={"Olhar Cardápio"}
                        fontSize="16px"
                        auto={false}
                        irregular={true}
                      />
                    </div>
                    <Link
                      href={"/sacola"}
                      onClick={() => {
                        resetQuantity(1);
                        searchParams.delete("item");
                        replace(`${path}?${searchParams}`);
                      }}
                    >
                      <Button
                        text={"Sacola"}
                        fontSize="16px"
                        auto={false}
                        irregular={true}
                      />
                    </Link>
                  </div>
                </div>
              </>
            ) : null
          )
        : null}
      <h1
        className={
          secondaryFont.className + " absolute bottom-[15px] left-15px"
        }
      >
        Burger.
      </h1>
    </div>
  );
}

export default Confirmation;
