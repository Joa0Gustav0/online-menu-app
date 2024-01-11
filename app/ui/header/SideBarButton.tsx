import Image from "next/image";
import menuIcon from "@/public/media/icons/menu-icon.png"
import BagIndex from "../SideBar/BagIndex";

function SideBarButton( { setSidebarStatus }: {setSidebarStatus: (val: boolean) => {}}) {
  return (
    <button className="group hidden xsm:block absolute ssm:relative top-1/2 right-[20px] smlst:right-[36px] ssm:translate-x-[36px] -translate-y-1/2 ssm:translate-y-0 w-[26px] transition-all duration-[.25s]" onClick={() => setSidebarStatus(true)}>
      <Image src={menuIcon} alt={"Imagem representativa do botão de controle da barra de navegação lateral"} className="group-hover:scale-[125%] group-active:scale-[100%] transition-all duration-[.25s]" />
      <BagIndex animate_colors={false} />
    </button>
  );
}

export default SideBarButton;