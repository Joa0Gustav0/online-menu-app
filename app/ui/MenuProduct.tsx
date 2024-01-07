import clsx from "clsx";
import Image from "next/image";

function MenuProduct( {filter, param, product}: {filter: string, param: string | {}, product: {
  productPicture: string,
  productName: string,
  productDescription: string,
  productPrice: string
}} ) {
  return (
    <li className={`${clsx({"hidden": filter !== "Todos" && param !== filter})}`}>
      <aside>
        <h1>{product.productName}</h1>
        <p>{product.productDescription}</p>
        <p>R${product.productPrice}</p>
      </aside>
      <Image src={product.productPicture} alt={"Imagem ilustrativa de " + param} width={50} height={50} />
    </li>
  );
}

export default MenuProduct;