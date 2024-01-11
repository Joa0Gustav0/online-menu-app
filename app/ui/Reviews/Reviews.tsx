import Title from "../Title";
import Image from "next/image";
import { StaticImageData } from "next/image";
import data from "@/public/reviews.json";
import ReviewsContainer from "./ReviewsContainer";
import Button from "../button";

function Reviews({
  theme,
}: {
  theme: {
    foodText: string,
    picture: {
      hero: StaticImageData;
      border: {
        picture: StaticImageData;
        text: string;
      };
    };
    textColor: string;
    bgColor: string;
    borderColor: string;
  };
}) {

  const reviews = data.reviews;

  return (
    <section id="avaliacoes" className="w-full max-w-[1366px] min-h-fit m-auto py-[110px] pb-[175px] md:pb-[110px] px-[20px] smlst:px-[36px] transition-all duration-[.25s] overflow-x-hidden">
      <div className="w-full max-w-[1115px] m-auto">
        <Title text="Algumas avaliações sobre a" span="Burger!" textColor={theme.textColor} />
        <ul className="flex flex-col items-center gap-[52px] md:gap-[26px] max-w-[800px] m-auto mt-[26px]">
          {reviews.map((review, i) => (
            <ReviewsContainer key={"review-" + i} review={review} color={theme.textColor} borderColor={theme.borderColor} pos={i} keywords={["chefe", "Burger", "Burger.", "maestria", "correria", "diária,", "refeição", "incrível", "prático!", "família", "divertimos", "divino!", "aparência", "perfeito"]} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;