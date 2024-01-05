import Link from "next/link";

function NavLink( {text, href} : {text: string, href: string} ) {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
}

export default NavLink;