import ImageGallery from "react-image-gallery";

export const Skills = () => {
    return (
      <div className="flex flex-col w-full h-[80vh]">
  
        <div className="flex flex-row w-full h-1/2">
          <div className="w-full h-full text-center">
            <h1 className="mb-6 text-xl">Tecnologias que utilizo</h1>
            <p className="mr-6 ml-5 font-extralight">
            Trabajo con una variedad de tecnologías y lenguajes para desarrollar aplicaciones web robustas. Utilizo <span className="text-blue-500">JavaScript y TypeScript</span> para escribir código limpio y eficiente, mientras que <span className="text-blue-500">HTML y CSS</span>, junto con <span className="text-blue-500">Tailwind CSS</span>, son fundamentales para la estructura y el estilo de las páginas. En el front-end, empleo <span className="text-blue-500">React y Next.js</span> para crear interfaces dinámicas, junto con <span>Redux</span> para la gestión del estado. En el back-end, desarrollo con <span className="text-blue-500">Node.js y Express</span>, y utilizo <span className="text-blue-500">Sequelize</span> para interactuar con bases de datos <span className="text-blue-500">PostgreSQL</span>, asegurando la integridad y eficiencia de los datos en mis aplicaciones.
            </p>
          </div>
  
          <div className="w-full h-full text-center">
            <h1 className="mb-6 text-xl">Competencias personales</h1>
            <p className="mr-6 ml-5 font-extralight">
            Tengo la capacidad de realizar multiples tareas y poseo un aprendizaje ágil. Mi curiosidad constante me impulsa a explorar nuevas ideas, mientras que mi habilidad para escuchar activamente me permite entender las necesidades de los demás. Disfruto del trabajo en equipo y tengo habilidades de liderazgo, siempre comprometido con alcanzar los objetivos. Mi comunicación efectiva y ambición me ayudan a crecer constantemente, tanto personal como profesionalmente.
            </p>
          </div>
        </div>
  
        <div className="flex flex-col w-full h-1/2 text-center mt-10">
          <h1 className="mb-6 text-xl">¿En que me destaco?</h1>
          <p className="mr-5 ml-5 font-extralight">
          Me destaco por mi habilidad para integrar fluidamente bases de datos y APIs externas en mis proyectos, enriqueciendo así la funcionalidad y la utilidad de las aplicaciones que desarrollo. Poseo una amplia experiencia en la creación de componentes e interfaces de usuario intuitivas y atractivas, aprovechando al máximo las tecnologías como HTML, CSS, JavaScript, React y Next.js. Mi capacidad para comunicarme de manera efectiva con el equipo facilita la colaboración y el logro de objetivos compartidos. Siempre estoy abierto a aprender y enseñar, buscando mejorar constantemente y compartir mi conocimiento con mis compañeros. Además, ofrezco soluciones rápidas y efectivas a los desafíos técnicos que surgen durante el desarrollo, manteniendo siempre un alto estándar de excelencia técnica en mi trabajo.
          </p>
        </div>
        
      </div>
    );
  }
  