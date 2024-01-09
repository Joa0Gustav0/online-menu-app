import Image from "next/image";
import menuIcon from "@/public/media/icons/menu-icon.png"
import BagIndex from "../SideBar/BagIndex";

function SideBarButton( { setSidebarStatus }: {setSidebarStatus: (val: boolean) => {}}) {
  return (
    <button className="group relative" onClick={() => setSidebarStatus(true)}>
      <Image src={menuIcon} alt={"Imagem representativa do botão de controle da barra de navegação lateral"} className="w-[26px] group-hover:scale-[125%] group-active:scale-[100%] transition-all duration-[.25s]" />
      <BagIndex animate_colors={false} />
    </button>
  );
}

export default SideBarButton;