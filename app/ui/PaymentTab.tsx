import Link from "next/link";
import DivisionLine from "./DivisionLine";
import Title from "./Title";
import { useState } from "react";

function PaymentTab() {
  const [regInfos, setRegInfos] = useState<{
    nome: string;
    email: string;
    whatsapp: string;
    endereço: string;
  } | null>(
    JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
  );

  setInterval(() => {
    if (regInfos !== JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string))
    setRegInfos(
      JSON.parse(localStorage.getItem("@burg3r_Is_ProfileSettings") as string)
    );
  });

  return (
    <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-fit max-h-[100vh] overflow-y-auto transition-all duration-[.5s] z-[150] ">
      <div
        key={"inspection-product"}
        className="relative flex flex-col items-center gap-[10px] w-full max-w-[500px] overflow-x-hidden p-[15px] font-semibold bg-white rounded-[10px]"
      >
        <Title text="Estamos" span="Quase Lá!" small={true} />
        <DivisionLine />
        <div className="flex justify-between items-center w-[450px] mb-[15px]">
          <h1 className="text-[1.25em]">Informações Pessoais</h1>
          <Link href={"/configuracoes-do-perfil"} className="text-default">Alterar</Link>
        </div>
        <aside className="flex flex-col gap-[10px] w-[450px]">
          {["nome", "email", "whatsapp", "endereço"].map((elem, i) => (
            <div
              key={elem.toLowerCase()}
              className="flex justify-between items-center"
            >
              <h1 className="capitalize">{elem}</h1>
              <p className="text-[#939393] font-medium max-w-[175px] line-clamp-1">
                {regInfos !== null
                  ? regInfos[elem as "nome" | "email" | "whatsapp" | "endereço"]
                  : null}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </h1>
  );
}

export default PaymentTab;
