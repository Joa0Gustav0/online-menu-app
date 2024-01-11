import Image from "next/image";
import { StaticImageData } from "next/image";

function Topics({
  properties,
  color,
  bgColor,
  index,
}: {
  properties: {
    title: string;
    img: StaticImageData;
    p: string;
    keywords: Array<string>;
  };
  color: string;
  bgColor: string;
  index: number;
}) {
  const subStringArr = properties.p.split(" ");

  return (
    <div className="relative sxsm:min-w-[225px] max-w-[320px] flex flex-col items-center gap-[15px] m-auto overflow-hidden">
      {index > 0 ? (
        <div
          className={`opacity-100 translate-y-[0] spmd:translate-y-[15px] spmd:opacity-0 ${bgColor} absolute left-1/2 top-[-18px] -translate-x-1/2 w-[100px] h-[2px] transition-all duration-[.25s]`}
        ></div>
      ) : null}
      <h1 className={color + " text-center text-[24px] font-bold"}>
        {properties.title}
      </h1>
      <Image
        src={properties.img}
        alt={"Imagem representativa de " + properties.title}
        className="w-full max-w-[120px]"
      />
      <p className="text-[#434343] text-center">
        {subStringArr.map((elem, i) =>
          properties.keywords.includes(elem) ? (
            <span key={"bold-string-" + i} className="font-semibold">
              {elem + " "}
            </span>
          ) : (
            <span key={"bold-string-" + i}>{elem + " "}</span>
          )
        )}
      </p>
    </div>
  );
}

export default Topics;
