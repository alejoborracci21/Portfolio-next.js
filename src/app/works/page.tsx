import Image from 'next/image';
import wearfashion from '@/../public/wearfashion.png';
import drivers from '@/../public/drivers.png'
import alk from '@/../public/alk.png'

export default function Works() {
    return (
      <div className="w-full bg-transparent h-[200vh] flex flex-col">
        <div className="relative w-2/4 h-[50vh] bg-white border border-white ml-10 mt-14 overflow-hidden group">
          <Image
            src={wearfashion}
            alt="wearfashion image"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40"
          />
          <p className="absolute bottom-0 left-0 w-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          WearFashion es una plataforma de E-Commerce de ropa urbana que desarrollamos con mi equipo como proyecto final en SoyHenry. En el sitio web, los usuarios pueden ver las diferentes prendas disponibles en stock y filtrarlas según las características que estén buscando. Si desean realizar una compra, tienen la opción de registrarse para acceder a una pasarela de pagos y completar la compra deseada. Además, la plataforma cuenta con un panel de administración que permite editar productos y acceder a las estadísticas del sitio.
          </p>
        </div>

        <div className="relative w-2/4 h-[50vh] border border-white bg-white ml-auto mr-10 mt-14 overflow-hidden group">
          <Image
            src={drivers}
            alt="Drivers image"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40"
          />
          <p className="absolute bottom-0 left-0 w-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          Drivers fue un proyecto individual que realicé en SoyHenry. Al ingresar, lo primero que vemos es la página de inicio o landing page, luego nos dirigimos a la página principal donde se muestran los distintos corredores almacenados en la base de datos. Los usuarios pueden filtrar estos corredores según equipos, edad y nombre. Además, es posible agregar nuevos corredores a través de un formulario. Por último, hay una sección acerca de mí, donde se presenta una breve descripción del proyecto y de mí como desarrollador.
          </p>
        </div>

        <div className="relative w-2/4 h-[50vh] border border-white bg-white ml-10 mt-14 overflow-hidden group">
          <Image
            src={alk}
            alt="ALK image"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40"
          />
          <p className="absolute bottom-0 left-0 w-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          ALK es un emprendimiento que desarrollamos con dos amigos, enfocado en ofrecer servicios para páginas web. Nuestras soluciones van desde el desarrollo de una página desde cero hasta la implementación de nuevas funciones para mejorar su sitio web existente. ALK eleva su página web al siguiente nivel al ofrecer soluciones rápidas, interfaces de usuario atractivas e intuitivas, basándonos en la excelencia técnica y el profesionalismo.
          </p>
        </div>
        
      </div>
    );
}
