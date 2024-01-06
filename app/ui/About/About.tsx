import Title from "@/app/ui/Title";
import clsx from "clsx";
import Topics from "./Topics";
import practicalIcon from "@/public/media/icons/practical-icon.png";
import deliveryIcon from "@/public/media/icons/speed-commit-icon.png";
import wellBeingIcon from "@/public/media/icons/well-being-icon.png";
import { StaticImageData } from "next/image";

function About({
  theme,
}: {
  theme: {
    foodText: string;
    picture: {
      hero: StaticImageData;
      border: {
        picture: StaticImageData;
        mirrorBorder?: boolean;
        text: string;
      };
    };
    textColor: string;
    bgColor: string;
  };
}) {
  return (
    <section
      id={"sobre"}
      className={`w-full max-w-[1366px] px-[36px] m-auto border-y transition-colors duration-[.5s] border-y-default ${clsx(
        {
          "border-y-pizza": theme.foodText === "pizza",
          "border-y-acai": theme.foodText === "açaí",
        }
      )}`}
    >
      <div className="w-full max-w-[1115px] pt-[110px] min-h-screen m-auto">
        <Title
          text={"Não conhece a"}
          span={"Burger?!"}
          textColor={theme.textColor}
        />
        <div className="w-full grid grid-cols-3 items-center self-center mt-[100px]">
          {[
            { title: "Praticidade", img: practicalIcon, p: "1" },
            { title: "Agilidade & Compromisso", img: deliveryIcon, p: "2" },
            { title: "Bem-Estar", img: wellBeingIcon, p: "3" },
          ].map((topic, i) => (
            <Topics key={"topic-" + i} properties={topic} color={theme.textColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
