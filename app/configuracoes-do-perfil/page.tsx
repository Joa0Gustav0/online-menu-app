"use client";

import Title from "../ui/Title";
import Button from "../ui/button";
import Inputs from "../ui/Inputs";
import { validateProfileSettings } from "../ui/data";
import clsx from "clsx";
import { useState, useEffect } from "react";
import Image from "next/image";
import editIcon from "@/public/media/icons/edit-icon.png";

function Page() {

  const [regSts, setRegSts] = useState(JSON.parse((localStorage.getItem("@burg3r_Is_ProfileSettings") as string)))

  setInterval(() => {
    setRegSts(JSON.parse((localStorage.getItem("@burg3r_Is_ProfileSettings") as string)))
  })

  return (
    <main className="flex justify-center items-center w-full min-h-screen m-auto pt-[110px] pb-[36px] bg-[#f5f5f5]">
      <div className="flex flex-col items-center gap-[26px] w-full max-w-[1115px]">
        <Title text="Essas são as suas" span="informações!" />
        <div className="flex flex-col gap-[20px] w-full max-w-[525px] p-[20px] m-auto bg-white rounded-[10px] shadow-xl">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold">Status: {regSts !== null ? (<span className="font-medium text-[#8fc216]">Registrado.</span>) : (<span className="font-medium text-pizza">Não Registrado.</span>)}</p>
            <abbr onClick={() => {
              var res = confirm("🍔💬 Fazer isso removerá as sua informações de perfil atuais para que você insira novas. Deseja continuar com a ação?")
              if (res) localStorage.removeItem("@burg3r_Is_ProfileSettings");
              alert("🍔💬 Você não possui mais registro. Se for adicionar novas informações de perfil, nunca esqueça-as de salvar!")
            }} title="Editar Informações do Perfil" className={`max-w-[35px] border rounded-[7.5px] border-default hover:cursor-pointer hover:animate-button_hover hover:scale-[115%] active:scale-[85%] transition-all duration-[.25s] ${clsx({
              "hidden": regSts === null,
            })}`}>
              <Image src={editIcon} alt="Ícone representativo da ação: Editar" />
            </abbr>
          </div>
          {[
            {
              title: "Nome",
              placeholder: "Insira o seu nome aqui!",
              infos: [
                "O nome aqui inserido estará presente nas confirmações/detalhes de pedidos efetuados. 👋",
                "Por preferência, escreva o seu nome completo.",
                "Apenas serão aceitas letras (Números não são permitidos.). 🚫",
              ],
            },
            {
              title: "Email",
              placeholder: "example@gmail.com",
              infos: [
                "Este campo é necessário se quiser receber, via email, confirmações/detalhes de pedidos efetuados (Você poderá alternar entre email ou WhatsApp no momento de efetuação do pedido.).📩",
                "Apenas serão validos emails do domínio gmail. a",
              ],
            },
            {
              title: "WhatsApp",
              placeholder: "Insira o seu número de WhatsApp aqui!",
              infos: [
                "Este campo é necessário se quiser receber, via WhatsApp, confirmações/detalhes de pedidos efetuados (Você poderá alternar entre email ou WhatsApp no momento de efetuação do pedido.). 📱",
                "Só serão aceitos números nacionais. 📍",
                "O preechimento desse campo deve agradar o seguinte parâmetro: DDDxxxxxxxx",
                "Não adicione espaços. Apenas DDD seguido de seu número.",
              ],
            },
            {
              title: "Endereço",
              placeholder: "Insira o seu endereço aqui!",
              infos: [
                "O endereço aqui inserido estará presente nas confirmações/detalhes de pedidos efetuados.",
              ],
            },
          ].map((input, i) => (
            <Inputs key={"input-" + i} props={input} value={regSts !== null ? regSts[input.title.toLowerCase()] : undefined} />
          ))}
        </div>
        <div className={clsx({
          "hidden": regSts !== null,
        })} onClick={() => validateProfileSettings()}>
          <Button
            text={"Salvar Informações!"}
            fontSize="28px"
            auto={false}
            irregular={true}
          />
        </div>
      </div>
    </main>
  );
}

export default Page;
