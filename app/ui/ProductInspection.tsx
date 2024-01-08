import { useSearchParams } from "next/navigation";
import data from "@/public/products.json";
import Image from "next/image";
import burgerIcon from "@/public/media/icons/burger-icon.png";
import pizzaIcon from "@/public/media/icons/pizza-icon.png";
import acaiIcon from "@/public/media/icons/acai-icon.png"

function ProductInspection() {
  const searchParams = new URLSearchParams(useSearchParams());

  var categories = [
    data.products.burgers,
    data.products.pizzas,
    data.products.acais,
  ];

  return (
    <div>
      {categories.map((categorie) =>
        categorie.map((product) =>
          typeof product !== "string" &&
          product.productName.toLowerCase() ===
            searchParams.get("item")?.toLowerCase() ? (
            <div key={"inspection-product"}>
              <Image src={product.productPicture} alt={"Imagem referente ao produto: " + product.productName} width={200} height={200} />
              <aside>
                <div>
                  {product.productName}
                  <Image src={categorie[0] === "Hambúrgueres" ? burgerIcon : categorie[0] === "Pizzas" ? pizzaIcon : acaiIcon} alt={"Ícone referente a categoria de produtos: " + categorie[0]} />
                </div>
                <p>{product.productDescription}</p>
                <p>{product.productPrice}</p>
              </aside>
            </div>
          ) : null
        )
      )}
    </div>
  );
}

export default ProductInspection;
