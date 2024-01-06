import Image from "next/image";
import { StaticImageData } from "next/image";

function Topics({
  properties,
  color,
}: {
  properties: { title: string; img: StaticImageData; p: string };
  color: string;
}) {
  return (
    <div className=" max-w-[320px] flex flex-col items-center gap-[15px] m-auto">
      <h1 className={color + " text-center text-[24px] font-bold"}>
        {properties.title}
      </h1>
      <Image
        src={properties.img}
        alt={"Imagem representativa de " + properties.title}
        className="w-full max-w-[120px]"
      />
      <p className="text-[#434343] text-center">{properties.p}</p>
    </div>
  );
}

export default Topics;
