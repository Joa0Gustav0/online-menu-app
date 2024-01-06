import Image from "next/image";
import { secondaryFont } from "../fonts";

function ReviewsContainer({
  review,
  color,
  pos,
  keywords,
}: {
  review: {
    picture: string;
    name: string;
    content: string;
    icon?: string;
    word?: string;
  },
  color: string,
  pos: number,
  keywords: string[]
}) {

  const subStrings = review.content.split(" " || "." || "“" || "”");

  return (
    <li className="flex justify-between w-full">
      <aside className={`${pos % 2 !== 0 ? "order-last" : "order-first"} flex items-center gap-[15px] w-1/2 p-[15px] bg-white rounded-[10px] shadow-xl`}>
        <Image
          src={review.picture}
          alt={"Imagem referente a fotos de perfil de pessoas"}
          width={115}
          height={115}
          className="rounded-full"
        />
        <div className="flex flex-col gap-[5px]">
          <h1 className={`${color} text-[20px] font-semibold`}>{review.name}</h1>
          <p className="text-justify">
            {subStrings.map((subString, i) => !keywords.includes(subString)
            ? (<span key={"word-" + i}>{subString} </span>)
            : subString === "Burger"
            ? (<span key={"word-" + i} className={secondaryFont.className}>{subString} </span>)
            : subString === "Burger." 
            ? (<span key={"word-" + i} className={secondaryFont.className}>{subString} </span>)
            : (<span key={"word-" + i} className="font-semibold">{subString} </span>))}
          </p>
        </div>
      </aside>
      <aside className="relative flex justify-center items-center w-1/2">
        {!review.icon ? (
          <p className={secondaryFont.className + " text-[28px]"}>{review.word}</p>
        ) : (
          <Image src={review.icon} alt={"Icones representativos do aspecto de qualidade"} width={50} height={50} />
        )}
      </aside>
    </li>
  );
}

export default ReviewsContainer;
