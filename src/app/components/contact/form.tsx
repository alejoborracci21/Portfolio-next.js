'use client';

import { useState } from "react";
import { sendEmail } from "./hooks/email";

interface Mensaje {
  name: string;
  subname: string;
  email: string;
  phone?: number;
  message: string;
}

const initialState: Mensaje = {
  name: "",
  subname: "",
  email: "",
  message: ""
};

export const Form = () => {
  const [mensaje, setMensaje] = useState<Mensaje>(initialState);
  const [error, setError] = useState(false);
  const [text, setText] = useState<number>(0)

  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (!mensaje.message || mensaje.email.length < 5 || mensaje.email.length > 20 || mensaje.name.length < 2 || mensaje.name.length > 12 || mensaje.message.length > 125 || mensaje.subname.length < 2 || mensaje.subname.length > 20) {
      setError(true);
      alert("Por favor, complete todos los campos correctamente");
      return;
    }
    
    sendEmail(evento.currentTarget);
    setMensaje(initialState);
    setError(false); 
  };

  const onChange = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(mensaje.message.length)
    if(evento.target.name === "message"){
      setText(evento.target.value.length)
    }
    
    setMensaje({
      ...mensaje,
      [evento.target.name]: evento.target.value,
    });
    setError(false);
  };

  //Styles
  let commonStyles = "flex flex-col bg-[#131313] w-[100%] h-[100%] justify-center items-center rounded-lg";
  let labelsStyles = "flex flex-col items-center justify-center w-[100%] h-[50%]";
  let inputStyles = "w-[90%] h-[100%] bg-[#131313]  text-white rounded-lg p-2 m-2 text-center placeholder-white bg-[#1b1c1e]";


  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-7 w-[75vw] h-[100vh] items-center content-center bg-transparent rounded-lg"> 
      <div className={`col-start-1 row-start-1 ${commonStyles}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={90} viewBox="0 0 24 24"><path fill="#e3194d" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></path></svg>
      <p className="text-white">Rosario, Santa Fe. Argentina.</p>
      </div>
      <div className={`col-start-1 row-start-2 ${commonStyles}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={90} viewBox="0 0 24 24"><path fill="#e3194d" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
      <p className="text-white">+54 3465656664</p>
      </div>
      <div className={`col-start-1 row-start-3 ${commonStyles}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={90} viewBox="0 0 24 24"><path fill="#e3194d" d="m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z" opacity={0.3}></path><path fill="#e3194d" d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z"></path></svg>
      <p className="text-white">alejotrabajo2001@hotmail.com</p>
      </div>
      <div className={`col-start-1 row-start-4 ${commonStyles}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={60} height={90} viewBox="0 0 24 24"><path fill="#e3194d" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></path></svg>
      <p className="text-white">Disponible</p>
      </div>

      
      <div className="col-span-2 row-span-4 col-start-2 row-start-1 bg-[#131313] w-[100%] h-[100%] rounded-lg">
        <form className="grid grid-cols-4 grid-rows-4 gap-2 w-[100%] h-[100%] justify-center items-center rounded-lg" onSubmit={onSubmit}>
          <label className={`col-span-2 ${labelsStyles}`}>
            <input type="text" name="name" value={mensaje.name} onChange={onChange} placeholder="Nombre" className={`${inputStyles}`} />
          </label>

          <label className={`col-span-2 col-start-3 ${labelsStyles}`}>
            <input type="text" name="subname" value={mensaje.subname} onChange={onChange} placeholder="Apellido" className={`${inputStyles}`} />
          </label>

          <label className={`col-span-2 row-start-2 ${labelsStyles}`}>
            <input type="number" name="phone" value={mensaje.phone} onChange={onChange} placeholder="Numero telefónico (Opcional)" className={`${inputStyles}`} />
          </label>

          <label className={`col-span-2 col-start-3 row-start-2 ${labelsStyles}`}>
            <input type="email" name="email" value={mensaje.email} onChange={onChange} placeholder="Email" className={`${inputStyles}`} />
          </label>

          <label className={`col-span-4 row-span-2 row-start-3 flex flex-col w-[100%] h-[100%] items-center justify-center mb-2`}>
            <textarea name="message" value={mensaje.message} onChange={onChange} placeholder="Escriba aquí su mensaje" className="w-[95%] h-[100%] text-center text-white bg-[#1b1c1e] rounded-lg p-2 m-2 placeholder-white" maxLength={125} />
            <p className="text-white">{text}/125</p>
          </label>
          <div className="col-span-4 row-start-5 flex flex-col items-center justify-center w-[100%] h-[100%]">
            <button className="bg-[#e3194d] w-[50%] h-[100%] text-white rounded-lg p-6 mb-5 mt-4 text-center justify-center items-center">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}