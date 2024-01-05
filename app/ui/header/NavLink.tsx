import Link from "next/link";
import { secondaryFont } from "../fonts";

function NavLink( {text, href} : {text: string, href: string} ) {
  return (
    <Link href={href} className={`group relative ${secondaryFont.className} text-[22px] hover:text-primaryColor px-[20px] py-[10px] transition-all duration-[.25s]`}>
      {text}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[0px] group-hover:w-full h-[2px] bg-[#ffffff00] group-hover:bg-primaryColor transition-all duration-[.25s]"></span>
    </Link>
  );
}

export default NavLink;