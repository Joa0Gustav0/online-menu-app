"use client";

import Link from "next/link";
import DivisionLine from "./DivisionLine";
import Title from "./Title";
import { useState } from "react";
import Image from "next/image";
import Button from "./button";
import clsx from "clsx";
import cashIcon from "@/public/media/icons/money-icon.png";
import closeIcon from "@/public/media/icons/close-icon.png";
import Inputs from "./Inputs";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { getOrder } from "./data";

function PaymentTab({
  subtotal,
  setOnPayment,
}: {
  subtotal: number;
  setOnPayment: (val: false) => {};
}) {
  const { push } = useRouter();

  const [regInfos, setRegInfos] = useState<{
    nome: string;
    email: string;
    whatsapp: string;
    endereço: string;
  } | null>(
    JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
  );

  setInterval(() => {
    setRegInfos(
      JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
    );
  });

  const [method, setMethod] = useState<"email" | "whatsapp" | undefined>(
    localStorage.getItem("@burg3r_Is_method") !== null
      ? (localStorage.getItem("@burg3r_Is_method") as "email" | "whatsapp")
      : undefined
  );

  function sendEmail(type: "confirmation" | "token", token?: string) {
    let templateID;
    let templateParams;
    switch (type) {
      case "confirmation":
        templateID = "template_59h9i9d";
        templateParams = {
          customer_email: regInfos?.email,
          customer_name: regInfos?.nome,
          customer_address: regInfos?.endereço,
          subtotal_price:
            "R$" + subtotal.toFixed(2).toString().replace(".", ","),
          service_price:
            "R$" +
            ((1 / 100) * subtotal).toFixed(2).toString().replace(".", ","),
          total_price:
            "R$" +
            (subtotal + (1 / 100) * subtotal)
              .toFixed(2)
              .toString()
              .replace(".", ","),
          burger_url: "its.burger.vercel.app",
          date: `${
            new Date().getDate() < 10
              ? `0` + new Date().getDate()
              : new Date().getDate()
          }/${
            new Date().getMonth() < 9
              ? `0` + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
          time: `${
            new Date().getHours() < 10
              ? `0` + new Date().getHours()
              : new Date().getHours()
          }:${
            new Date().getMinutes() < 10
              ? `0` + new Date().getMinutes()
              : new Date().getMinutes()
          }`,
          year: `${new Date().getFullYear()}`,
          order: getOrder(),
        };
        break;
      case "token":
        templateID = "template_0v3qnbr";
        templateParams = {
          customer_email: regInfos?.email,
          burger_url: "its.burger.vercel.app",
          date: `${
            new Date().getDate() < 10
              ? `0` + new Date().getDate()
              : new Date().getDate()
          }/${
            new Date().getMonth() < 9
              ? `0` + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
          time: `${
            new Date().getHours() < 10
              ? `0` + new Date().getHours()
              : new Date().getHours()
          }:${
            new Date().getMinutes() < 10
              ? `0` + new Date().getMinutes()
              : new Date().getMinutes()
          }`,
          tokenCode: token,
          year: `${new Date().getFullYear()}`,
        };
        break;
    }
    emailjs.init("-FWzWsm_uOI05l0sp");
    emailjs.send("service_ats1fbz", templateID, templateParams);
  }

  function validateMethod(method: "email" | "whatsapp") {
    var res;
    switch (method) {
      case "email":
        res = confirm(
          "🍔💬 O seu email realmente é válido? Para confirmar isso, enviaremos para seu email um código de verificação! Copie-o no campo 'Verificação' que aparecerá próximo ao botão 'confirmar pedido'."
        );
        break;
      case "whatsapp":
        res = confirm(
          "🍔💬 Este dispositivo possui acesso ao 'WhatsApp'? Para confirmar isso, você será direcionado ao WhatsApp onde aparecerá um código de verificação. Copie-o no campo 'Verificação' que aparecerá próximo ao botão 'confirmar pedido'."
        );
        break;
    }
    if (!res) {
      return;
    }
    setMethod(method);
    localStorage.setItem("@burg3r_Is_method", method);
    const token = crypto.randomUUID();
    localStorage.setItem("@burg3r_Is_last_code", token);
    switch (method) {
      case "email":
        sendEmail("token", token);
        alert(
          "🍔💬 Voilà! Se esse realmente é um email válido, o código foi enviado!"
        );
        break;
      case "whatsapp":
        open(
          `https://api.whatsapp.com/send?phone=55${regInfos?.whatsapp}&text=%F0%9F%8D%94%20Ol%C3%A1%21%20A%20Burger%20informa%3A%0A%0AO%20seu%20c%C3%B3digo%20de%20verifica%C3%A7%C3%A3o%20%C3%A9%3A%0A${token}%0A%0A%F0%9F%92%A1%20Esse%20c%C3%B3digo%20ficar%C3%A1%20ativo%20permanentemente%20para%20uso%2C%20at%C3%A9%20que%20voc%C3%AA%20solicite%20outro.&source=&data=`,
          "_blank"
        );
        break;
    }
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] transition-all duration-[.5s] z-[150] rounded-[10px]">
      <div className="absolute top-[-1px] left-0 w-full p-[15px] z-[10] bg-white rounded-[10px] overflow-hidden">
        <div
          onClick={() => setOnPayment(false)}
          className="absolute top-0 right-0 w-[35px] hover:w-[40px] active:w-[35px] p-[10px] hover:p-[12.75px] active:p-[10px] hover:cursor-pointer bg-white hover:bg-default active:bg-white rounded-full rounded-tr-[10px] transition-all duration-[.25s]"
        >
          <Image src={closeIcon} alt={"Ícone representativo do botão de"} />
        </div>
        <Title text="Estamos" span="Quase Lá!" small={true} />
      </div>
      <div
        key={"inspection-product"}
        className="tab relative flex flex-col items-center gap-[10px] overflow-x-hidden p-[15px] h-fit max-h-[95vh] pb-[65px] pt-[50px] overflow-y-auto font-semibold bg-white rounded-[10px]"
      >
        <DivisionLine />
        <div className="flex justify-between items-center w-full mb-[15px]">
          <h1 className="text-[1.25em]">Informações Pessoais</h1>
          <Link
            href={"/configuracoes-do-perfil"}
            className="text-default hover:underline"
          >
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
                onClick={() => {
                  validateMethod(elem.toLowerCase() as "email" | "whatsapp");
                }}
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
          {method !== undefined ? (
            <div className="mb-[10px]">
              <Inputs
                props={{
                  title: "Verificação",
                  placeholder: "Código de verificação aqui!",
                  infos: false,
                }}
              />
              <p
                onClick={() =>
                  alert(
                    `🍔💬 Se não recebeu um código você pode solicitar um novo clicando em algum dos botões de seleção de meio de comunicação. Entretanto, o preenchimento incorreto do seu perfil pode estar ocasionando esse não recebimento, neste caso, edite seu perfil.`
                  )
                }
                className="w-fit text-[.8em] font-medium text-default mt-[5px] underline hover:cursor-pointer active:opacity-50"
              >
                Não recebeu um código?!
              </p>
            </div>
          ) : null}
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
        <div
          onClick={() => {
            if (
              (
                document.getElementById(
                  "input-for-" + "Verificação".toLowerCase()
                ) as HTMLInputElement
              ).value === ""
            ) {
              alert(
                "🍔💬 Você precisa informar o código de verificação. Se quiser, você pode solicitar um novo clicando no botão 'Email' ou 'WhatsApp' novamente."
              );
            } else if (
              localStorage.getItem("@burg3r_Is_last_code") !==
              (
                document.getElementById(
                  "input-for-" + "Verificação".toLowerCase()
                ) as HTMLInputElement
              ).value
            ) {
              alert(
                "🍔💬 O código de verificação inserido está incorreto. Você pode solicitar um novo clicando no botão 'Email' ou 'WhatsApp' novamente."
              );
            } else if (
              localStorage.getItem("@burg3r_Is_last_code") ===
              (
                document.getElementById(
                  "input-for-" + "Verificação".toLowerCase()
                ) as HTMLInputElement
              ).value
            ) {
              switch (method) {
                case "email":
                  sendEmail("confirmation");
                  localStorage.setItem(
                    "@burg3r_Is_bought",
                    crypto.randomUUID()
                  );
                  localStorage.removeItem("@burg3r_Is_bag");
                  push("/pedido-realizado");
                  break;
              }
            }
          }}
        >
          <Button
            text={
              "Confirmar Pedido | R$" +
              (subtotal + (1 / 100) * subtotal)
                .toFixed(2)
                .toString()
                .replace(".", ",")
            }
            auto={true}
            irregular={true}
            fontSize="16px"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentTab;
