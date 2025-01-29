// email.js
import emailjs from '@emailjs/browser';

export const sendEmail = (form) => {

  emailjs
    .sendForm('service_1ss1hnr', 'template_o2dzt3l', form, {
      publicKey: 'AWM6OK7y0lYXfSuFi',
    })
    .then(
      () => {
        alert("Tu email se envio correctamente, gracias por comunicarte conmigo!");
      },
      (error) => {
        alert('Hubo un error al envial el Email, porfavor intentalo de nuevo');
      },
    );
};
