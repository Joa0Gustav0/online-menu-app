import Image from "next/image";
import blob from "@/public/media/extra/yellow-blob-picture.png";
import Title from "../ui/Title";
import SearchBar from "../ui/SearchBar";

function Page() {
  return (
    <main className="relative flex justify-center items-center w-full min-h-screen m-auto pt-[110px] pb-[36px] bg-[#f5f5f5] overflow-hidden">
      <div className="relative flex flex-col items-center gap-[26px] w-full max-w-[600px] z-[10]">
        <Title text="Bem vindo(a) ao nosso" span="cardápio!" />
        <SearchBar />
        <ul>
        </ul>
      </div>
      <Image src={blob} alt={"Imagem de uma figura abstrata"} className="absolute -translate-x-1/2 translate-y-1/2 left-0 bottom-[205px]" />
      <Image src={blob} alt={"Imagem de uma figura abstrata"} className="absolute translate-x-1/2 -translate-y-1/2 right-0 top-[275px]" />
    </main>
  );
}

export default Page;