import Image from "next/image";
import magnifyingGlassIcon from "@/public/media/icons/magnifying-glass-icon.png";

function SearchBar() {
  return (
    <label className="flex items-center gap-[10px] w-full py-[5.75px] px-[10px] bg-white rounded-[25px]">
      <Image src={magnifyingGlassIcon} alt={"Ícone representativo de uma lupa para interatividade com barra de pesquisa"} className="w-[20px]" />
      <input type="text" id="search-bar-input" placeholder="Qual item tem o tamanho da sua fome hoje?" className="w-full bg-transparent focus:border-none focus:outline-none" />
    </label>
  );
}

export default SearchBar;