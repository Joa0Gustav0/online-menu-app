import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { secondaryFont } from "../fonts";
import BagIndex from "./BagIndex";

function SideBarLinks({
  links,
  setSidebarStatus,
}: {
  links: Array<{
    icon: StaticImageData;
    altIcon: StaticImageData;
    text: string;
    href: string;
  }>;
  setSidebarStatus: (val: boolean) => {};
}) {
  return (
    <ul className="flex flex-col items-start pt-[10px] overflow-x-visible bg-white z-[10]">
      {links.map((link, i) => (
        <li
          key={"sidebar-link-" + i}
          className={`${
            i <= 2 ? "slg:hidden" : ""
          } relative group w-full overflow-visible z-[10]`}
        >
          <Link
            onClick={() => setSidebarStatus(false)}
            href={link.href}
            className="group relative flex gap-[10px] py-[15px] w-full hover:text-white"
          >
            <div className="absolute top-1/2 left-[-110%] group-hover:left-[-27.5px] -translate-y-1/2 w-full h-full group-active:h-3/4 rounded-e-full bg-default transition-all duration-[.25s]"></div>
            <Image
              src={link.icon}
              alt={
                "Icone representativo para um link que direciona à página: " +
                link.text
              }
              className="group-hover:hidden w-[22px] h-[22px] z-[2]"
            />
            <Image
              src={link.altIcon}
              alt={
                "Icone representativo para um link que direciona à página: " +
                link.text
              }
              className="hidden group-hover:block w-[22px] h-[22px] z-[2]"
            />
            <h1 className="text-[1em] font-semibold z-[2]">{link.text}</h1>
            {link.text.toLowerCase() === "sacola" ? (
              <BagIndex animate_colors={true} />
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideBarLinks;
