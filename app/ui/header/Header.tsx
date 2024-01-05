import Link from "next/link";
import NavLink from "./NavLink";
import SideBar from "./SideBar";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        Burger.
      </Link>
      <NavLink text="Início" href="/"/>
      <NavLink text="Sobre Nós" href="/#sobre"/>
      <NavLink text="Avaliações" href="/#avaliacoes"/>
      <NavLink text="Cardápio" href="/Cardapio"/>
      <SideBar /> 
    </header>
  );
}

export default Header;