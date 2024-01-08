import clsx from "clsx";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function MenuProduct({
  search,
  filter,
  param,
  product,
}: {
  search: string;
  filter: string;
  param: string | {};
  product: {
    productPicture: string;
    productName: string;
    productDescription: string;
    productPrice: string;
  };
}) {
  const path = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  const { replace } = useRouter();

  return (
    <li
      onClick={() => {
        searchParams.set("item", product.productName.toLowerCase());
        replace(`${path}?${searchParams}`);
        document.body.style.overflowY = "hidden";
      }}
      className={`${clsx({
        hidden:
          (filter !== "Todos" && param !== filter) ||
          product.productName.toLowerCase().indexOf(search.toLowerCase()) < 0,
      })} flex justify-between items-center w-[600px] max-w-[600px] mx-[26px] p-[15px] bg-white rounded-[10px] shadow-lg hover:cursor-pointer hover:scale-[105%] active:scale-[95%] transition-all duration-[.25s]`}
    >
      <aside className="flex flex-col gap-[10px] max-w-[50%]">
        <h1 className="text-[1.2em] font-semibold">{product.productName}</h1>
        <p className="line-clamp-3">{product.productDescription}</p>
        <p className="text-[1.2em] font-semibold">R${product.productPrice}</p>
      </aside>
      <Image
        src={product.productPicture}
        alt={"Imagem ilustrativa de " + param}
        width={150}
        height={150}
        className="rounded-[10px]"
      />
    </li>
  );
}

export default MenuProduct;
