import Image from "next/image";
import menuIcon from "@/public/media/icons/menu-icon.png"

function SideBar() {
  return (
    <button>
      <Image src={menuIcon} alt={"Imagem representativa do botão de controle da barra de navegação lateral"} />
      <span>3</span>
    </button>
  );
}

export default SideBar;