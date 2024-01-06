import Link from "next/link";
import { secondaryFont } from "../fonts";

function NavLink({ links }: { links: Array<{ text: string; href: string }> }) {
  return (
    <ul className="flex items-center">
      {links.map((link, i) => (
        <li key={"navlink-" + i}>
          <Link
            href={link.href}
            className={`group relative ${secondaryFont.className} text-[22px] hover:text-default px-[20px] py-[10px] transition-all duration-[.25s]`}
          >
            {link.text}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[0px] group-hover:w-full h-[2px] bg-[#ffffff00] group-hover:bg-default transition-all duration-[.25s]"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLink;
