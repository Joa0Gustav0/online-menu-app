import Link from "next/link";

function FooterLinks({
  links,
}: {
  links: Array<{ text: string; href: string }>;
}) {
  return (
    <span>
      <h1 className="text-[20px] font-bold mb-[15px]">Links</h1>
      <ul className="flex items-center gap-[40px]">
        {links.map((link, i) => (
          <li key={"footer-link-" + i} className="hover:text-primaryColor">
            <Link href={link.href} className="font-medium underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </span>
  );
}

export default FooterLinks;
