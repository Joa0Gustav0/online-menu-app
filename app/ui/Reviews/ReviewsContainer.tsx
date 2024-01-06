import Image from "next/image";

function ReviewsContainer({
  review,
}: {
  review: {
    picture: string;
    name: string;
    content: string;
    icons: {
      main: string;
      extra?: {
        icon: string;
        position: string;
        rotation: string;
      };
    };
  };
}) {
  return (
    <li>
      <aside>
        <Image
          src={review.picture}
          alt={"Imagem referente a fotos de perfil de pessoas"}
          width={50}
          height={50}
        />
        <div>
          <h1>{review.name}</h1>
          <p>{review.content}</p>
        </div>
      </aside>
      <aside>
        {review.icons.extra ? (
          <>
            <p>{review.icons.main}</p>
            <Image src={review.icons.extra.icon} alt={"Icones de seta"} width={50} height={50} />
          </>
        ) : (
          <Image src={review.icons.main} alt={"Icones representativos do aspecto de qualidade"} width={50} height={50} />
        )}
      </aside>
    </li>
  );
}

export default ReviewsContainer;
