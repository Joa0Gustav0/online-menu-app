import Link from "next/link";
import DivisionLine from "./DivisionLine";
import Title from "./Title";
import { useState } from "react";
import Image from "next/image";
import Button from "./button";

function PaymentTab({
  onBag,
}: {
  onBag: Array<{
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string;
  }>;
}) {
  const [regInfos, setRegInfos] = useState<{
    nome: string;
    email: string;
    whatsapp: string;
    endereço: string;
  } | null>(
    JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
  );

  const [subtotal, setSubtotal] = useState(0);
  setInterval(() => {
    if (onBag.length > 0) {
    }

    if (
      regInfos !==
      JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
    )
      setRegInfos(
        JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
      );
  });

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] transition-all duration-[.5s] z-[150] rounded-[10px]">
      <div
        key={"inspection-product"}
        className="tab relative flex flex-col items-center gap-[10px] overflow-x-hidden p-[15px] h-fit max-h-[95vh] pb-[65px] overflow-y-auto font-semibold bg-white rounded-[10px]"
      >
        <Title text="Estamos" span="Quase Lá!" small={true} />
        <DivisionLine />
        <div className="flex justify-between items-center w-full mb-[15px]">
          <h1 className="text-[1.25em]">Informações Pessoais</h1>
          <Link href={"/configuracoes-do-perfil"} className="text-default">
            Alterar
          </Link>
        </div>
        <aside className="flex flex-col gap-[10px] w-full">
          {["nome", "email", "whatsapp", "endereço"].map((elem, i) => (
            <div
              key={elem.toLowerCase()}
              className="flex justify-between items-center gap-[30px]"
            >
              <h1 className="capitalize min-w-fit">{elem}</h1>
              <p className="text-[#939393] font-medium max-w-[175px] line-clamp-1">
                {regInfos !== null
                  ? regInfos[elem as "nome" | "email" | "whatsapp" | "endereço"]
                  : null}
              </p>
            </div>
          ))}
        </aside>
        <DivisionLine />
        <h1 className="text-[1.25em] mb-[15px self-start">
          Informações Pessoais
        </h1>
        <aside className="flex flex-col gap-[10px] w-full">
          {["Subtotal", "Taxa de serviço", "Taxa de entrega", "Total"].map(
            (elem, i) => (
              <div
                key={elem.toLowerCase()}
                className="flex justify-between items-center gap-[30px]"
              >
                <h1 className="capitalize min-w-fit">{elem}</h1>
                <p className="text-[#939393] font-medium max-w-[175px] line-clamp-1">
                  {elem}
                </p>
              </div>
            )
          )}
        </aside>
        <div>
          <h1>Pagamento</h1>
          <div>
            <Image src={""} alt="" />
            <p>Dinheiro</p>
          </div>
        </div>
        <DivisionLine />
        <div>
          <h1>Confirmação</h1>
          <p>
            Escolha um desses meios de comunicação para receber a confirmação de
            seu pedido.
          </p>
          <div>
            <button>Email</button>
            <button>WhatsApp</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.. <br />{" "}
            <span>@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-[-1px] left-0 w-full p-[15px] bg-white rounded-[10px]">
        <Button
          text={"Confirmar Pedido | R$" + "83,46"}
          auto={true}
          irregular={true}
          fontSize="16px"
        />
      </div>
    </div>
  );
}

export default PaymentTab;
