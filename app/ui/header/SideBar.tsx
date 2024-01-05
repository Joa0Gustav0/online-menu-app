import Image from "next/image";
import menuIcon from "@/public/media/icons/menu-icon.png"

function SideBar() {
  return (
    <button className="group relative">
      <Image src={menuIcon} alt={"Imagem representativa do botão de controle da barra de navegação lateral"} className="w-[26px] group-hover:scale-[125%] group-active:scale-[100%] transition-all duration-[.25s]" />
      <span className="absolute translate-x-1/2 translate-y-1/2 right-0 bottom-[5px] flex justify-center items-center w-[27.5px] h-[27.5px] bg-primaryColor text-[1.25em] text-white rounded-full group-hover:scale-[75%] group-active:scale-[100%] transition-all duration-[.25s]">3</span>
    </button>
  );
}

export default SideBar;