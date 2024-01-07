import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

function SideBarLinks({
  links,
  setSidebarStatus
}: {
  links: Array<{
    icon: StaticImageData;
    altIcon: StaticImageData;
    text: string;
    href: string;
  }>;
  setSidebarStatus: (val: boolean) => {}
}) {
  return (
    <ul className="flex flex-col items-start pt-[10px]">
      {links.map((link, i) => (
        <li key={"sidebar-link-" + i} className="w-full">
          <Link
            onClick={() => setSidebarStatus(false)}
            href={link.href}
            className="group relative flex gap-[10px] py-[15px] w-full hover:text-white"
          >
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
            <div className="absolute top-1/2 left-[-110%] group-hover:left-[-27.5px] -translate-y-1/2 w-full h-full group-active:h-3/4 rounded-e-full bg-default transition-all duration-[.25s]"></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideBarLinks;
