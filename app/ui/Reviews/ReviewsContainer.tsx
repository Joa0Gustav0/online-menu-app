import Image from "next/image";
import { secondaryFont } from "../fonts";

function ReviewsContainer({
  review,
  color,
  pos,
  borderColor,
  keywords,
}: {
  review: {
    picture: string;
    name: string;
    content: string;
    icon?: string;
    word?: string;
  };
  color: string;
  borderColor: string;
  pos: number;
  keywords: string[];
}) {
  const subStrings = review.content.split(" " || "." || "“" || "”");

  return (
    <li className="flex justify-between md:w-full">
      <aside
        className={`${
          pos % 2 !== 0 ? "order-last" : "order-first"
        } relative flex items-center gap-[15px] max-w-[375px] md:max-w-none md:w-1/2 p-[15px] bg-white rounded-[10px] shadow-xl`}
      >
        <abbr title="Esse(a) é apenas um(a) modelo (Avaliações apenas ilustrativas.)." className="absolute top-[15px] ssm:top-1/2 ssm:-translate-y-1/2 left-1/2 ssm:left-[15px] -translate-x-1/2 ssm:translate-x-0 transition-all duration-[.5s]">
          <Image
            src={review.picture}
            alt={"Imagem referente a fotos de perfil de pessoas"}
            width={115}
            height={115}
            className={`min-w-[115px] rounded-full ssm:p-[5px] ssm:border-2 ${borderColor}`}
          />
        </abbr>
        <div className="flex flex-col gap-[5px] max-w-[200px] ssm:max-w-none pl-0 ssm:pl-[130px] pt-[130px] ssm:pt-0 transition-all duration-[.25s]">
          <h1 className={`${color} text-[20px] font-semibold`}>
            {review.name}
          </h1>
          <p className="text-justify">
            {subStrings.map((subString, i) =>
              !keywords.includes(subString) ? (
                <span key={"word-" + i}>{subString} </span>
              ) : subString === "Burger" ? (
                <span key={"word-" + i} className={secondaryFont.className}>
                  {subString}{" "}
                </span>
              ) : subString === "Burger." ? (
                <span key={"word-" + i} className={secondaryFont.className}>
                  {subString}{" "}
                </span>
              ) : (
                <span key={"word-" + i} className="font-semibold">
                  {subString}{" "}
                </span>
              )
            )}
          </p>
        </div>
      </aside>
      <aside className="hidden relative md:flex justify-center items-center w-1/2">
        {!review.icon ? (
          <p className={secondaryFont.className + " text-[28px]"}>
            {review.word}
          </p>
        ) : (
          <Image
            src={review.icon}
            alt={"Icones representativos do aspecto de qualidade"}
            width={50}
            height={50}
          />
        )}
      </aside>
    </li>
  );
}

export default ReviewsContainer;
