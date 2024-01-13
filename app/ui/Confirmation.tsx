"use client";

import { useState, useEffect } from "react";

import Button from "./button";
import Image from "next/image";
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

  const [onBag, setOnBag] = useState<onBag | []>([]);

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("@burg3r_Is_bag") !== null) {
        setOnBag(JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string));
      } else {
        []
      }
    }, 300)
  }, []);

  return (
    <div
      className={`no-scrollbar fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[150] flex gap-[15px] w-[300px] exsm:w-fit max-w-[90vw] max-h-[95vh] bg-white p-[15px] pt-[180px] smd:pt-[15px]  pl-[15px] smd:pl-[180px] pb-0 rounded-[10px] overflow-y-auto transition-all duration-[1s] ${clsx(
        {
          "left-[-100%] opacity-0": orderStatus.ordered === false,
        }
      )}`}
    >
      {onBag?.length > 0
        ? onBag.map((item) =>
            item.product.productName.toLowerCase() ===
            searchParams.get("item") ? (
              <div key={"product-confirmation"}>
                <div className="absolute top-[15px] left-1/2 -translate-x-1/2 smd:translate-x-0 smd:top-0 smd:left-0 transition-all duration-[.25s]">
                  <Image
                    src={item.product.productPicture}
                    alt={"Imagem representativa do produto: "}
                    width={150}
                    height={150}
                    className="rounded-full smd:rounded-tl-[10px] smd:rounded-none smd:rounded-br-[100%] min-w-[150px] transition-all duration-[.25s]"
                  />
                </div>
                <div className="flex flex-col justify-between min-h-fit w-full max-w-[300px]">
                  <aside className="mb-[15px]">
                    <h1 className="text-[1.15em] font-semibold text-center smd:text-left">
                      Item Adicionado!
                    </h1>
                    <p className="text-[#434343] font-medium mb-[10px] text-center smd:text-left">
                      Você adicionou:
                    </p>
                    <div className="flex flex-col gap-[5px]">
                      <h1 className="font-semibold text-default">
                        {item.product.productName}{" "}
                        <span className="text-black">({quantity} Uni.)</span>
                      </h1>
                      <p>{item.product.productDescription}</p>
                      <p className="font-semibold">
                        R$
                        {(
                          Number(item.product.productPrice.replace(",", ".")) *
                          quantity
                        )
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")}
                      </p>
                    </div>
                  </aside>
                  <div className="flex flex-col-reverse exsm:flex-row-reverse exsm:w-[300px] smd:min-w-[310px] pb-[15px] justify-center smd:justify-end items-center gap-[10px] exsm:gap-[20px]">
                    <div
                      onClick={() => {
                        orderStatus.rmOrdered(false);
                        resetQuantity(1);
                        searchParams.delete("item");
                        replace(`${path}?${searchParams}`);
                      }}
                    >
                      <Button
                        text={"Ver Cardápio"}
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
              </div>
            ) : null
          )
        : null}
      <h1
        className={
          secondaryFont.className +
          " hidden smd:block absolute bottom-0 left-0 bg-white rounded-[10px] px-[5px] pl-[15px] pb-[15px]"
        }
      >
        Burger.
      </h1>
    </div>
  );
}

export default Confirmation;
