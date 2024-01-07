import Title from "../ui/Title";
import Button from "../ui/button";
import Inputs from "../ui/Inputs";

function Page() {
  return (
    <main className="w-full max-w-[1366px] min-h-screen m-auto pt-[110px] pb-[36px] bg-[#f5f5f5]">
      <div className="flex flex-col items-center gap-[26px] w-full max-w-[1115px] m-auto">
        <Title text="Essas são as suas" span="informações!" />
        <div className="flex flex-col gap-[20px] w-full max-w-[600px] p-[20px] m-auto bg-white rounded-[10px] shadow-xl">
          {[
            { title: "Nome", placeholder: "Insira o seu nome aqui!", infos: [""] },
            { title: "Email", placeholder: "example@gmail.com", infos: [""] },
            { title: "WhatsApp", placeholder: "Insira o seu número de WhatsApp aqui!", infos: [""] },
            { title: "Endereço", placeholder: "Insira o seu endereço aqui!", infos: [""] },
          ].map((input, i) => (
            <Inputs key={"input-" + i} props={input} />
          ))}
        </div>
        <Button text={"Salvar Informações!"} fontSize="32px" auto={false} irregular={true} />
      </div>
    </main>
  );
}

export default Page;
