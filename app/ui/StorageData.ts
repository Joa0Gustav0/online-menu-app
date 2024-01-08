export function storageData(
  target: {
    productPicture: string;
    productName: string;
    productDescription: string;
    productPrice: string;
  },
  quantity: number
) {
  if (!localStorage.getItem("@burg3r_Is_bag")) {
    localStorage.setItem("@burg3r_Is_bag", JSON.stringify([{product: target, units: quantity}]));
    console.log("created @burg3r_Is_bag");
    console.log("item adicionado à sacola!")
    return;
  }

  const csBag: {}[] = JSON.parse((localStorage.getItem("@burg3r_Is_bag") as string));
  csBag.push({product: target, units: quantity})
  localStorage.setItem("@burg3r_Is_bag", JSON.stringify(csBag));
  console.log("item adicionado à sacola!")
}
