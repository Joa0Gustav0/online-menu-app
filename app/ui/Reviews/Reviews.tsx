import Title from "../Title";
import Image from "next/image";
import { StaticImageData } from "next/image";
import data from "@/app/ui/Reviews/reviews.json";
import ReviewsContainer from "./ReviewsContainer";

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
        <ul>
          {reviews.map((review, i) => (
            <ReviewsContainer key={"review-" + i} review={review} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;