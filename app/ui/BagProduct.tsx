import Image from "next/image";
import clsx from "clsx";
import trashIcon from "@/public/media/icons/trash-icon.png";
import trashWhiteIcon from "@/public/media/icons/trash-white-icon.png";

function BagProduct({
  item,
}: {
  item: {
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string;
  };
}) {
  type item = {
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string;
  };

  function setQuantity(target: string, action: "sum" | "subtract") {
    const bag: item[] = JSON.parse(
      localStorage.getItem("@burg3r_Is_bag") as string
    );
    bag.forEach((item, i) => {
      if (item.product.productName.toLowerCase() === target.toLowerCase()) {
        switch (action) {
          case "subtract":
            if (item.units > 1) {
              item.units--;
            } else {
              bag.splice(i, 1)
            }
            break;
          case "sum":
            if (item.units < 10) {
              item.units++;
            }
            break;
        }
      }
    });
    localStorage.setItem("@burg3r_Is_bag", JSON.stringify(bag));
  }

  return (
    <li className="flex justify-between items-center gap-[15px] w-full p-[15px] rounded-[10px] bg-white shadow-lg">
      <div className="flex items-center gap-[15px]">
        <Image
          src={item.product.productPicture}
          alt={"Imagem referente ao produto: " + item.product.productName}
          width={125}
          height={125}
          className="rounded-l-[10px] rounded-r-[110px]"
        />
        <aside className="flex flex-col gap-[5px] w-fit max-w-[200px]">
          <h1 className="text-default font-semibold">
            {item.product.productName}
          </h1>
          <abbr
            title={item.obs}
            className="w-fit text-[14px] text-[#636363] line-clamp-3 decoration-transparent"
          >
            {item.obs !== "" ? item.obs : "Nenhuma observação."}
          </abbr>
        </aside>
      </div>
      <div className="relative flex items-center gap-[30px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[14.5px] -translate-y-1/2 w-[1px] h-[35px] bg-[#0004]"></div>
        <div className="flex items-center justify-center gap-[10px] ">
          <button
            onClick={() => {
              setQuantity(item.product.productName, "subtract");
            }}
            className={`group flex justify-center items-center ${clsx({"w-[15px] h-[15px] p-[15px]": item.units > 1, "p-[10px]": item.units <= 1})} text-[#fbc00f] bg-white hover:text-white hover:bg-default ${clsx({"hover:bg-pizza": item.units <= 1})} active:scale-[85%] active:transition-none rounded-full transition-all duration-[.25s]`}
          >
            {item.units > 1 ? "-" : null}
            <Image src={trashIcon} alt="Ícone representativo: deletar" className={`group-hover:hidden w-[17.5px] ${clsx({"hidden group-hover:hidden": item.units > 1})}`} />
            <Image src={trashWhiteIcon} alt="Ícone representativo: deletar" className="hidden group-hover:block w-[17.5px]" />
          </button>
          <p className="w-fit text-center font-semibold">{item.units} Uni.</p>
          <button
            onClick={() => setQuantity(item.product.productName, "sum")}
            className={`flex justify-center items-center w-[15px] h-[15px] p-[15px] text-[#c7c7c7] bg-[#f1f1f1] rounded-full transition-all duration-[.25s] ${clsx(
              {
                "text-[#fbc00f] bg-white hover:text-white hover:bg-default active:scale-[85%] active:transition-none hover:cursor-pointer":
                  item.units < 10,
                  "hover:cursor-not-allowed": item.units >= 10 
              }
            )}`}
          >
            +
          </button>
        </div>
        <h1 className="px-[15px] font-bold ">R$24,85</h1>
      </div>
    </li>
  );
}

export default BagProduct;
