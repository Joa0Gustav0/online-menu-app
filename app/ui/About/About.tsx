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
      <div className="w-full max-w-[1115px] py-[110px] min-h-[679px] m-auto">
        <Title
          text={"Não conhece a"}
          span={"Burger?!"}
          textColor={theme.textColor}
        />
        <div className="w-full grid grid-cols-3 items-center self-center mt-[100px]">
          {[
            {
              title: "Praticidade",
              img: practicalIcon,
              p: "A Burger é uma franquia de restaurante que te permite aproveitar o melhor do fast food. Que tal um hambúrguer? Basta alguns cliques e isso será possível sem sair do conforto da sua casa! ",
              keywords: ["Burger", "melhor", "fast", "food.", "alguns", "cliques", "conforto", "da", "sua", "casa."]
            },
            {
              title: "Agilidade & Compromisso",
              img: deliveryIcon,
              p: "Vishhh... Tá naquela correria diária? Não se preocupa. A Burger conta com uma equipe qualificada que se compromete em te entregar sempre o melhor com um tempo sempre bem menor!",
              keywords: ["correria", "diária?", "Burger", "equipe", "qualificada", "compromete", "entregar", "o", "melhor", "tempo", "sempre", "bem", "menor!"]
            },
            {
              title: "Bem-Estar",
              img: wellBeingIcon,
              p: "A Burger tem as suas missões! Não basta fornecer as melhores comidas. Mas é preciso também ser responsável com o meio ambiente e compromissado com o bem-estar social! Conta com a Burger!",
              keywords: ["Burger", "missões!", "melhores", "comidas.", "responsável", "meio", "ambiente", "compromissado", "bem-estar", "social", "Burger!"]
            },
          ].map((topic, i) => (
            <Topics
              key={"topic-" + i}
              properties={topic}
              color={theme.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
