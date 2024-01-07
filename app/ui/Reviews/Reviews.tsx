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
  };
}) {

  const reviews = data.reviews;

  return (
    <section id="avaliacoes" className="w-full max-w-[1366px] min-h-screen m-auto py-[110px]">
      <div className="w-full max-w-[1115px] m-auto">
        <Title text="Algumas avaliações sobre a" span="Burger!" textColor={theme.textColor} />
        <ul className="flex flex-col items-center gap-[26px] max-w-[800px] m-auto mt-[26px]">
          {reviews.map((review, i) => (
            <ReviewsContainer key={"review-" + i} review={review} color={theme.textColor} pos={i} keywords={["chefe", "Burger", "Burger.", "maestria", "correria", "diária,", "refeição", "incrível", "prático!", "família", "divertimos", "divino!", "aparência", "perfeito"]} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;