import Image from "next/image";
import wearfashion from "@/../public/wearfashion.png";

export default function Works() {
    return (
      <div className="w-full bg-transparent h-screen flex flex-col">
        <div className="relative w-2/4 h-2/5 bg-white ml-10 mt-14 overflow-hidden group">
          <Image
            src={wearfashion}
            alt="wearfashion image"
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-60"
          />
          <p className="absolute bottom-0 left-0 w-full text-black text-xl px-4 py-2 font-bold opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            WearFashion es un E-Commerce de ropa urbana que desarrollamos con mi
            equipo para nuestro proyecto final en SoyHenry. En la web podemos
            ver las diferentes prendas disponibles que tenemos en stock,
            filtrarlas para ver solo las caracteristicas que estamos buscando y
            si queremos realizar una compra tenemos la opcion de registrarnos
            para poder acceder a una pasarela de pagos y realizar la compra
            deseada.
          </p>
        </div>
      </div>
    );
}
