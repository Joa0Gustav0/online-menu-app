"use client";

import Image from "next/image";
import infoIcon from "@/public/media/icons/info-icon.png";
import { useState } from "react";
import clsx from "clsx";

function Inputs({
  props,
}: {
  props: {
    title: string;
    placeholder: string;
    infos: Array<string> | boolean;
  };
}) {
  const [infosActive, setInfosActive] = useState(false);

  window.onmousedown = (e) => {
    var test = typeof window === undefined;
    if (test === false && e.target) {
      var substrings = (e.target as HTMLElement).className?.split(" ");
      if (
        !substrings.includes("info-aside") &&
        !substrings.includes("info-aside-children") &&
        infosActive
      )
        setInfosActive(false);
    }
  };

  return (
    <label
      htmlFor={"input-for-" + props.title.toLowerCase()}
      className="flex flex-col gap-[5px] px w-full"
    >
      <div className="relative flex items-center gap-[10px] text-[1.25em] font-semibold w-fit">
        {props.title}
        {props.infos !== false ? (
          <>
            <button onClick={() => setInfosActive(!infosActive)}>
              <Image
                src={infoIcon}
                alt={"Ícone representativo de informações"}
                className="w-[15px] hover:scale-[115%] hover:animate-button_hover active:scale-[85%] transition-all duration-[.25s]"
              />
            </button>
            <aside
              className={` info-aside absolute top-1/2 right-0 translate-x-full flex flex-col gap-[10px] max-h-[215px] overflow-y-scroll p-[10px] shadow-lg text-[.75em] font-normal bg-white animate-fade_In rounded-[5px] z-[10] transition-all duration-[.75] ${clsx(
                {
                  hidden: infosActive === false,
                }
              )}`}
            >
              {typeof props.infos !== "boolean" && (props.infos as []).map((info, i) => (
                <p
                  key={"information-" + i}
                  className=" info-aside-children text-left"
                >
                  - {info}
                </p>
              ))}
            </aside>
          </>
        ) : null}
      </div>
      <input
        type="text"
        id={"input-for-" + props.title.toLowerCase()}
        placeholder={props.placeholder}
        className="px-[10px] py-[10px] bg-[#f1f1f1] rounded-[2.5px]"
      />
    </label>
  );
}

export default Inputs;
