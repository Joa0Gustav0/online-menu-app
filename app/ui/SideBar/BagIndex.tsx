"use client";

import { secondaryFont } from "../fonts";
import { useState } from "react";

function BagIndex( {animate_colors}: {animate_colors: boolean} ) {
  const [inBag, setInBag] = useState(
    (JSON.parse(String(localStorage.getItem("@burg3r_Is_bag"))) as []) ? (JSON.parse(String(localStorage.getItem("@burg3r_Is_bag"))) as []).length : 0
  );

  setInterval(() => {
    if (
      (JSON.parse(String(localStorage.getItem("@burg3r_Is_bag"))) as [])
    ) {
      setInBag(
        (JSON.parse(String(localStorage.getItem("@burg3r_Is_bag"))) as [])
          .length
      );
    }
  })

  return (
    <span
      className={`${inBag >= 1 ? "" : "hidden"} ${!animate_colors ? "absolute translate-x-1/2 translate-y-1/2 right-0 bottom-[5px]" : ""} flex justify-center items-center w-[24px] h-[24px] bg-default  ${secondaryFont.className} text-white rounded-full group-hover:scale-[75%] group-active:scale-[100%] transition-all duration-[.25s] ${animate_colors ? "group-hover:bg-white group-hover:text-default" : ""}`}
    >
      {inBag}
    </span>
  );
}

export default BagIndex;
