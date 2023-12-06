import { useState } from "react";

function useInput(type) {
  const [value, setValue] = useState("");
  const OnChange = (e) => setValue(e.target.value);
  const validations_types = {
    course_add: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El campo no puede estar vacío",
      },
    ],
    name: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El nombre no puede estar vacío",
      },
      {
        condition: (valor) => !/[0-9]/.test(valor),
        messageError: "*El nombre solo puede contener letras",
      },
    ],
    lastname: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El apellido no puede estar vacío",
      },
      {
        condition: (valor) => !/[0-9]/.test(valor),
        messageError: "*El apellido solo puede contener letras",
      },
    ],
    dni: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El dni no puede estar vacío",
      },
      {
        condition: (valor) => /^[0-9]+$/.test(valor),
        messageError: "*El dni solo puede contener numeros",
      },
    ],
    mail: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El mail no puede estar vacío",
      },
      {
        condition: (valor) =>
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(valor),
        messageError: "*El mail debe ser un mail válido",
      },
    ],
    passwordLogin: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*La contraseña no puede estar vacía",
      },
    ],
    course: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El nombre no puede estar vacío",
      },
    ],
    password: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*La contraseña no puede estar vacía",
      },
      {
        condition: (valor) => valor.length >= 8,
        messageError: "*La contraseña debe contener al menos 8 caracteres",
      },
      {
        condition: (valor) => /[0-9]/.test(valor),
        messageError: "*La contraseña debe contener al menos un nº",
      },
      {
        condition: (valor) => /[A-Z]/.test(valor),
        messageError: "*La contraseña debe contener al menos una mayúscula",
      },
      {
        condition: (valor) => /[a-z]/.test(valor),
        messageError: "*La contraseña debe contener al menos una minúscula",
      },
    ],
    linkProject: [
      {
        condition: (valor) => valor.trim() !== "",
        messageError: "*El link no puede estar vacío",
      },
    ],
  };

  const [message, setMessage] = useState("");

  const blur = () => {
    let msj = "";
    const validation = validations_types[type];
    if (!validation) return "nada";
    for (const key in validation) {
      const { messageError, condition } = validation[key];
      if (!condition(value)) {
        msj = messageError;
        break;
      }
    }

    setMessage(msj);
  };

  const focus = () => {
    setMessage("");
  };

  return { message, blur, focus, OnChange, value, setValue };
}

export default useInput;
