import Image from 'next/image';
import wearfashion from '@/../public/wearfashion.png';
import drivers from '@/../public/drivers.png';
import alk from '@/../public/alk.png';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";


export default function Works() {
    return (
        <div className="w-full mt-24 bg-transparent h-[200vh] flex flex-col">
            <div className="relative w-2/4 h-[50vh] bg-white border border-white ml-10 mt-14 overflow-hidden group">
                <Image
                    src={wearfashion}
                    alt="wearfashion image"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20"
                />
                <p className="absolute content-center bottom-0 left-0 w-full h-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    WearFashion es una plataforma de E-Commerce de ropa urbana que
                    desarrollamos con un equipo de 5 personas. En el
                    sitio web, los usuarios pueden ver las diferentes prendas
                    disponibles en stock y filtrarlas según las características que
                    estén buscando. Si desean realizar una compra, tienen la opción de
                    registrarse para acceder a una pasarela de pagos y completar la
                    compra deseada. Además, la plataforma cuenta con un panel de
                    administración que permite editar productos y acceder a las
                    estadísticas del sitio.
                </p>
            </div>

            <div className='flex content-center items-center w-2/4 h-20 ml-10 bg-transparent'>
                <a href="https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry" target="_blank" rel="noopener noreferrer" className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <FaGithub className='w-full h-full' />
                </a>
                <a href="https://wearfashion.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <GrDeploy className='w-full h-full' />
                </a>
                <a href="https://www.youtube.com/watch?v=78UhoOp5lmc&ab_channel=AlejoBorracci" target="_blank" rel="noopener noreferrer" className="w-[30%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <FaYoutube className='w-full h-full' />
                </a>
            </div>

            <div className="relative w-2/4 h-[50vh] border border-white bg-white ml-auto mr-10 mt-14 overflow-hidden group">
                <Image
                    src={alk}
                    alt="ALK image"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20"
                />
                <p className="absolute content-center bottom-0 left-0 w-full h-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    ALK es un emprendimiento que desarrollamos con dos amigos, enfocado
                    en ofrecer servicios para páginas web. Nuestras soluciones van desde
                    el desarrollo de una página desde cero hasta la implementación de
                    nuevas funciones para mejorar su sitio web existente. ALK eleva su
                    página web al siguiente nivel al ofrecer soluciones rápidas,
                    interfaces de usuario atractivas e intuitivas, basándonos en la
                    excelencia técnica y el profesionalismo.
                </p>
            </div>

            <div className='flex content-center items-center w-2/4 h-20 ml-auto mr-10 bg-transparent'>
            <a href="https://github.com/alejoborracci21/ALK-Software" target="_blank" rel="noopener noreferrer" className="w-[50%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <FaGithub className='w-full h-full' />
                </a>
                <a href="https://alk-software.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-[50%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <GrDeploy className='w-full h-full' />
                </a>
                
            </div>

            <div className="relative w-2/4 h-[50vh] border border-white bg-white ml-10 mt-14 overflow-hidden group">
                <Image
                    src={drivers}
                    alt="Drivers image"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-20"
                />
                <p className="absolute content-center bottom-0 left-0 w-full h-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    Drivers fue un proyecto individual que realicé en SoyHenry. Al
                    ingresar, lo primero que vemos es la página de inicio o landing
                    page, luego nos dirigimos a la página principal donde se muestran
                    los distintos corredores almacenados en la base de datos. Los
                    usuarios pueden filtrar estos corredores según equipos, edad y
                    nombre. Además, es posible agregar nuevos corredores a través de un
                    formulario. Por último, hay una sección Acerca de mí, donde se
                    presenta una breve descripción del proyecto y de mí como
                    desarrollador.
                </p>
            </div>

            <div className='flex content-center items-center w-2/4 h-20 ml-10 bg-transparent'>
            <a href="https://github.com/user/repo1" target="_blank" rel="noopener noreferrer" className="w-[100%] h-[50%] flex justify-center items-center hover:text-blue-600">
                    <FaGithub className='w-full h-full' />
                </a>
            </div>
        </div>
    );
}
