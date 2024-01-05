import Link from "next/link";
import NavLink from "./NavLink";
import SideBar from "./SideBar";
import Image from "next/image";
import logo from "@/public/media/icons/nobg-logo-icon.png"
import { secondaryFont } from "../fonts";

function Header() {
  return (
    <header className={`${secondaryFont.className} w-full max-w-[1115px] py-[26px] m-auto bg-white`}>
      <div className="flex flex-row justify-between w-full">
        <Link href={"/"} className="group relative">
          <h1 className={`w-fit text-[28px] group-hover:scale-[0%] transition-all duration-[.25s]`}>Burger.</h1>
          <Image src={logo} alt="Imagem referente à logo desse website" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] scale-[0%] group-hover:scale-[100%] group-active:scale-[75%] transition-all duration-[.25s]" />
        </Link>
        <ul className="flex items-center">
          <li>
            <NavLink text="Início" href="/" />
          </li>
          <li>
            <NavLink text="Sobre Nós" href="/#sobre" />
          </li>
          <li>
            <NavLink text="Avaliações" href="/#avaliacoes" />
          </li>
          <li>
            <NavLink text="Cardápio" href="/Cardapio" />
          </li>
        </ul>
        <SideBar />
      </div>
    </header>
  );
}

export default Header;
