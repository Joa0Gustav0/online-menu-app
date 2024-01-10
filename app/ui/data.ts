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
      JSON.stringify([{ product: target, units: quantity, obs: obs }])
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
    obs: string;
  }[] = JSON.parse(localStorage.getItem("@burg3r_Is_bag") as string);

  var alreadyAdded = false;

  csBag.forEach((onBag) => {
    if (onBag.product.productName === target.productName) {
      onBag.units = onBag.units + quantity;
      onBag.obs = onBag.obs + " " + obs;
      localStorage.setItem("@burg3r_Is_bag", JSON.stringify(csBag));
      alreadyAdded = true;
    }
  });

  if (alreadyAdded === false) {
    csBag.push({ product: target, units: quantity, obs: obs });
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

export function validateMethod(target: {
  nome: string;
  email: string;
  whatsapp: string;
  endereço: string;
} | null) {
  if (target === null) {
    return false;
  }
  const proceed = confirm(
    "🍔💬 Está utilizando um dispositivo com acesso à aplicação 'WhatsApp'? Para confirmar isso, você será direcionado ao WhatsApp onde aparecerá um código de verificação. Antes que a página recarregue, copie-o na próxima caixa de diálogo. Deseja continuar com a ação?"
  );
  if (!proceed) {
    return false;
  }
  const token = crypto.randomUUID();
  open(
    `https://api.whatsapp.com/send?phone=55${target.whatsapp}&text=%F0%9F%8D%94%20Ol%C3%A1%21%20A%20Burger%20informa%3A%0A%0AO%20seu%20c%C3%B3digo%20de%20verifica%C3%A7%C3%A3o%20%C3%A9%3A%0A${token}&source=&data=`,
    "_blank"
  );
  const res = prompt(
    "🍔💬 Copie aqui o código de verificação aparecido em seu WhatsApp! Se não recebeu, provavelmente não possui acesso ao WhatsApp neste dispositivo, ou não informou o número de contato correto (Neste caso, tente editar suas informações de perfil)."
  );
  if (res !== null) {
    if (res === token) {
      alert(
        "🍔💬 Código de verificação aceito! Pronto! Agora você pode continuar com o seu pedido!"
      );
      return true;
    } else {
      alert(
        "🍔💬 O código inserido não coincide com o código de verificação aparecido em seu WhatsApp."
      );
      return false;
    }
  }
  return false;
}
