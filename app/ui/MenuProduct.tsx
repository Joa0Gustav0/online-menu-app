import clsx from "clsx";
import Image from "next/image";

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
  return (
    <li
      className={`${clsx({ hidden: (filter !== "Todos" && param !== filter) || product.productName.toLowerCase().indexOf(search.toLowerCase()) < 0 })} flex justify-between items-center w-full max-w-[600px] mx-[26px] p-[15px] bg-white rounded-[10px] shadow-lg`}
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
