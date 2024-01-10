"use client";

import Link from "next/link";
import DivisionLine from "./DivisionLine";
import Title from "./Title";
import { useState } from "react";
import Image from "next/image";
import Button from "./button";
import clsx from "clsx";
import cashIcon from "@/public/media/icons/money-icon.png";

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
    var val = 0;
    if (onBag.length > 0) {
      onBag.forEach((item) => {
        val =
          val +
          item.units * Number(item.product.productPrice.replace(",", "."));
      });
    }
    if (subtotal !== val) {
      setSubtotal(val);
    }

    if (
      regInfos !==
      JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
    )
      setRegInfos(
        JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
      );
  });

  const [method, setMethod] = useState<"email" | "whatsapp" | undefined>(
    "email"
  );

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] transition-all duration-[.5s] z-[150] rounded-[10px]">
      <div
        key={"inspection-product"}
        className="tab relative flex flex-col items-center gap-[10px] overflow-x-hidden p-[15px] h-fit max-h-[95vh] pb-[65px] pt-[50px] overflow-y-auto font-semibold bg-white rounded-[10px]"
      >
        <div className="absolute top-[-1px] left-0 w-full p-[15px] bg-white rounded-[10px]">
          <Title text="Estamos" span="Quase Lá!" small={true} />
        </div>
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
        <h1 className="text-[1.25em] self-start">Resumo de Valores</h1>
        <aside className="flex flex-col gap-[10px] w-full">
          {["Subtotal", "Taxa de entrega", "Taxa de serviço", "Total"].map(
            (elem, i) => (
              <div
                key={elem.toLowerCase()}
                className="flex justify-between items-center gap-[30px]"
              >
                <h1 className="capitalize min-w-fit">{elem}</h1>
                <p
                  className={`font-semibold max-w-[175px] line-clamp-1 ${clsx({
                    "text-[#8fc216]": elem === "Taxa de entrega",
                    "text-[#939393]": elem === "Taxa de serviço",
                  })}`}
                >
                  {elem !== "Taxa de entrega" ? "R$" : ""}
                  {elem === "Subtotal"
                    ? subtotal.toFixed(2).toString().replace(".", ",")
                    : elem === "Taxa de entrega"
                    ? "Grátis"
                    : elem === "Taxa de serviço"
                    ? ((1 / 100) * subtotal)
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")
                    : (subtotal + (1 / 100) * subtotal)
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}
                </p>
              </div>
            )
          )}
        </aside>
        <DivisionLine />
        <div className="w-full">
          <h1 className="text-[1.25em] mb-[15px]">Pagamento</h1>
          <div className="flex items-center gap-[10px]">
            <Image
              src={cashIcon}
              alt="Ícone representativo: Dinheiro"
              className="w-full max-w-[40px] p-[7.5px] bg-gray-300 rounded-full overflow-visible"
            />
            <p>Dinheiro</p>
          </div>
        </div>
        <DivisionLine />
        <div>
          <h1 className="text-[1.25em] mb-[5px]">Confirmação</h1>
          <p className="text-[.8em] text-[#636363] font-medium">
            Escolha um desses meios de comunicação para receber a confirmação de
            seu pedido.
          </p>
          <div className="relative flex items-center justify-center gap-[15px] my-[10px]">
            <div className="absolute top-0 left-1/2 h-full border-l border-[rgba(0,0,0,.1)]"></div>
            {["Email", "Whatsapp"].map((elem, i) => (
              <button
                key={"method-" + i}
                onClick={
                  elem === "Email"
                    ? () => setMethod("email")
                    : () => {
                        const proceed = confirm(
                          "🍔💬 Para confirmar que você realmente está utilizando um dispositivo com acesso à aplicação 'WhatsApp', você será direcionado ao WhatsApp onde aparecerá um código de verificação que você precisará copiar na próxima caixa de diálogo (O mais rápido: Antes que a página recarregue.). Deseja continuar com a ação?"
                        );
                        if (!proceed) {
                          return;
                        }
                        const token = crypto.randomUUID();
                        open(
                          `https://api.whatsapp.com/send?phone=55${regInfos?.whatsapp}&text=%F0%9F%8D%94%20Ol%C3%A1%21%20A%20Burger%20informa%3A%0A%0AO%20seu%20c%C3%B3digo%20de%20verifica%C3%A7%C3%A3o%20%C3%A9%3A%0A${token}&source=&data=`,
                          "_blank"
                        );
                        const res = prompt(
                          "🍔💬 Copie aqui o código de verificação aparecido em seu WhatsApp! Se não recebeu, provavelmente não possui acesso ao WhatsApp neste dispositivo, ou não informou o número de contato correto (Neste caso, tente editar suas informações de perfil)."
                        );
                        if (res !== null) {
                          if (res === token) {
                            setMethod("whatsapp");
                            alert(
                              "🍔💬 Código de verificação aceito! Pronto! Agora você pode continuar com o seu pedido!"
                            );
                          } else {
                            alert(
                              "🍔💬 O código inserido não coincide com o código de verificação aparecido em seu WhatsApp."
                            );
                          }
                        }
                      }
                }
                className={`w-full p-[5px] rounded-[5px] hover:scale-[105%] active:scale-[95%] transition-all duration-[.25s] ${clsx(
                  {
                    "bg-default text-white hover:bg-default":
                      method === elem.toLowerCase(),
                    "hover:bg-[#fbc00f99] hover:text-white":
                      method !== elem.toLowerCase(),
                  }
                )}`}
              >
                {elem}
              </button>
            ))}
          </div>
          <p className="text-[.8em] text-[#636363] font-medium text-center">
            Você receberá uma confirmação/detalhes do pedido no seu {method}:
            <br />{" "}
            <span className="text-black font-semibold">
              {method === "email" ? regInfos?.email : regInfos?.whatsapp}
            </span>
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
