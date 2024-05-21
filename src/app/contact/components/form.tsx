'use client'


import { useState } from "react";
import { sendEmail } from "../hooks/email.js";


interface Mensaje {
  user_name: string;
  user_email: string;
  message: string;
}

const initialState: Mensaje = {
  user_name: "",
  user_email: "",
  message: ""
};

export const Form = () => {
  const [mensaje, setMensaje] = useState<Mensaje>(initialState);

  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formElement = evento.currentTarget;
    sendEmail(formElement);
    setMensaje(initialState);
  };

  const onChange = (
    evento: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje({
      ...mensaje,
      [evento.target.name]: evento.target.value
    });
  };

  return (
    <div>

      <form onSubmit={onSubmit} className="flex flex-col items-center content-center">
        <h2 className="mb-10 mt-10">Enviame un correo para comunicarme contigo! 😄</h2>
        <label className="p-1">
          <input
            name="user_name"
            onChange={onChange}
            type="text"
            value={mensaje.user_name}
            placeholder="Nombre completo"
            className="text-center content-center bg-transparent border-b w-[30vw] h-4 p-6 mb-7"
          />
        </label>

        <label>
          <input
            name="user_email"
            onChange={onChange}
            type="email"
            value={mensaje.user_email}
            placeholder="Tu Email"
            className="text-center content-center bg-transparent border-b w-[30vw] h-4 p-6 mb-7"


          />
        </label>

        <label>
          <textarea
            name="message"
            onChange={onChange}
            value={mensaje.message}
            placeholder="Deje aqui su mensaje"
            className="text-center content-center bg-transparent border-b w-[30vw] h-10 p-10 mb-7"
            style={{ overflow: "hidden" }}
          ></textarea>
        </label>

        <button type="submit">
          Enviar
        </button>
      </form>
     
    </div>
  );
};