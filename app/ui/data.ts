export function storageBagData(
  target: {
    productPicture: string;
    productName: string;
    productDescription: string;
    productPrice: string;
  },
  quantity: number,
  obs: string
) {
  if (!localStorage.getItem("@burg3r_Is_bag")) {
    localStorage.setItem(
      "@burg3r_Is_bag",
      JSON.stringify([{ product: target, units: quantity, obs: [obs] }])
    );
    return;
  }

  const csBag: {
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string[];
  }[] = JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string);

  var alreadyAdded = false;

  csBag.forEach((onBag) => {
    if (onBag.product.productName === target.productName) {
      onBag.units = onBag.units + quantity;
      onBag.obs.push(obs);
      localStorage.setItem("@burg3r_Is_bag", JSON.stringify(csBag));
      alreadyAdded = true;
    }
  });

  if (alreadyAdded === false) {
    csBag.push({ product: target, units: quantity, obs: [obs] });
    localStorage.setItem("@burg3r_Is_bag", JSON.stringify(csBag));
  }
}

const storageProfileSettings = (data: {
  nome: string;
  email: string;
  whatsapp: string;
  endereço: string;
}) => {
  localStorage.setItem("@burg3r_Is_ProfileSettings", JSON.stringify(data));
  console.log(`Olá, ${data.nome}! Agora você possui um registro!`);
  alert(`🍔💬 Olá, ${data.nome}! Agora você possui um registro!`);
};

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ";
const nums = "1234567890";
export function validateProfileSettings() {
  const inputsForValidation: ["nome", "email", "whatsapp", "endereço"] = [
    "nome",
    "email",
    "whatsapp",
    "endereço",
  ];

  let profileData = { nome: "", email: "", whatsapp: "", endereço: "" };
  var errors = false;

  inputsForValidation.forEach((name) => {
    const input = document.getElementById(`input-for-${name}`);
    const val = (input as HTMLInputElement).value;

    if (!errors) {
      if ((val as string).length < 1) {
        alert(`Todos os campos precisam ser preenchidos.`);
        errors = true;
      }
    }
  });

  if (!errors)
    inputsForValidation.forEach((name) => {
      const input = document.getElementById(`input-for-${name}`);
      const val = (input as HTMLInputElement).value;

      if (!errors) {
        if ((val as string).length < 1) {
          alert(`Todos os campos precisam ser preenchidos.`);
        }
      }

      if (!errors) {
        switch (name) {
          case "nome":
            var isChar,
              isNum = false;
            Array.from(val.toLowerCase()).forEach((_char) => {
              if (chars.includes(_char)) {
                isChar = true;
              }
              if (nums.includes(_char)) {
                isNum = true;
              }
            });
            if (!isChar && isNum) {
              errors = true;
              alert(
                `O campo "Nome" precisa conter ao menos uma letra, e não pode conter números.`
              );
            } else if (!isChar && !isNum) {
              errors = true;
              alert(`O campo "Nome" precisa conter ao menos uma letra.`);
            } else if (isChar && isNum) {
              errors = true;
              alert(`O campo "Nome" não pode conter números.`);
            }
            break;
          case "email":
            if (!val.includes("@gmail.com")) {
              errors = true;
              alert(
                `O campo "Email" precisa ser preenchido com um email "@gmail.com" válido.`
              );
            }
            break;
          case "whatsapp":
            var isChar,
              isNum = false;
            Array.from(val.toLowerCase()).forEach((_char) => {
              if (chars.includes(_char)) {
                isChar = true;
              }
              if (nums.includes(_char)) {
                isNum = true;
              }
            });
            if (isChar && !isNum) {
              errors = true;
              alert(
                `O campo "WhatsApp" não pode conter letras, e precisa conter números. Preencha da seguinte forma DDDxxxxxxxxx`
              );
            } else if (isChar) {
              errors = true;
              alert(
                `O campo "WhatsApp" não pode conter letras. Preencha da seguinte forma: DDDxxxxxxxxx`
              );
            } else if (!isNum) {
              errors = true;
              alert(
                `O campo "WhatsApp" precisa conter números. Preencha da seguinte forma: DDDxxxxxxxxx`
              );
            }
            break;
        }
      }

      if (!errors) {
        profileData[name] = val;
      }
    });
  if (!errors) {
    storageProfileSettings(profileData);
  }
}

export function getOrder() {
  const onBag: {
    product: {
      productPicture: string;
      productName: string;
      productDescription: string;
      productPrice: string;
    };
    units: number;
    obs: string[];
  }[] = JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string);

  var order: string = "";
  const categories = [
    { c: "pizzas", rel: "Pizzas" },
    { c: "burgers", rel: "Hambúrgueres" },
    { c: "acais", rel: "Açaís" },
  ];

  onBag.forEach((elem) => {
    order = order + `${elem.product.productName} (${elem.units} Uni.)\nPreço por unidade: R$${elem.product.productPrice}\nTotal: R$${(
      Number(elem.product.productPrice.replace(",", ".")) * elem.units
    )
      .toFixed(2)
      .toString()
      .replace(".", ",")}\n\n`;
  });

  return order;
}
