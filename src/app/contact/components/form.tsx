'use client';

import { useState } from "react";
import { sendEmail } from "../hooks/email.js";

interface Mensaje {
  from_name: string;
  email: string;
  message: string;
}

const initialState: Mensaje = {
  from_name: "",
  email: "",
  message: ""
};

export const Form = () => {
  const [mensaje, setMensaje] = useState<Mensaje>(initialState);
  const [error, setError] = useState(false);

  const onSubmit = (evento: any) => {
    evento.preventDefault();
    if (!mensaje.message || mensaje.email.length < 5 || mensaje.from_name.length < 2) {
      setError(true);
      return;
    }
    
    sendEmail(evento.currentTarget);
    setMensaje(initialState);
    setError(false); 
  };

  const onChange = (evento: any) => {
    setMensaje({
      ...mensaje,
      [evento.target.name]: evento.target.value,
    });
    setError(false);  // Reset the error state on change
  };

  const closeModal = () => {
    setError(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col items-center content-center">
        <h2 className="mb-10 mt-10">¡Envíame un correo para comunicarme contigo! 😄</h2>
        <label className="p-1">
          <input
            name="from_name"
            onChange={onChange}
            type="text"
            value={mensaje.from_name}
            placeholder="Nombre completo"
            className="text-center content-center bg-transparent border-b w-[30vw] h-4 p-6 mb-7"
          />
        </label>

        <label>
          <input
            name="email"
            onChange={onChange}
            type="email"
            value={mensaje.email}
            placeholder="Tu Email"
            className="text-center content-center bg-transparent border-b w-[30vw] h-4 p-6 mb-7"
          />
        </label>

        <label>
          <textarea
            name="message"
            onChange={onChange}
            value={mensaje.message}
            placeholder="Deje aquí su mensaje"
            className="text-center content-center bg-transparent border-b w-[30vw] h-10 p-10 mb-7"
            style={{ overflow: "hidden" }}
          ></textarea>
        </label>

        <button type="submit">
          Enviar
        </button>
      </form>

      {error && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <p className="text-black">Por favor, verifique que todos los campos se hayan completado correctamente.</p>
            <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
