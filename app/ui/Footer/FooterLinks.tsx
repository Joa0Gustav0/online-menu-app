import Link from "next/link";

function FooterLinks({
  links,
}: {
  links: Array<{ text: string; href: string }>;
}) {
  return (
    <span>
      <h1 className="text-[20px] font-bold mb-[15px]">Links</h1>
      <ul className="flex items-center flex-wrap gap-[26px]">
        {links.map((link, i) => (
          <li key={"footer-link-" + i} className="text-[#636363] hover:text-default active:opacity-[.5]">
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
