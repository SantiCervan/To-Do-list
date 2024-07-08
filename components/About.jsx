import Link from 'next/link';
import Navbar from './NavBar';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto my-8 pt-6 px-6 pb-4 rounded-xl shadow-xl bg-neutral-800">
        <div className='mb-4'>
          <Link href={'/'}>
            <button className='flex gap-2 justify-end hover:text-neutral-400 transition-colors text-blue-400'>
              Volver al inicio
            </button>
          </Link>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Acerca de To-Do List ©</h1>
        <p className="text-sm sm:text-base mb-4">
          Este proyecto es una aplicación de lista de tareas (ToDo List) construida con Next.js. Permite a los usuarios crear, marcar como completadas y eliminar tareas de manera sencilla.
        </p>
        <p className="text-sm sm:text-base mb-4">
          La aplicación utiliza una API de prueba (JSONPlaceholder) para simular la interacción con un servidor y almacenar las tareas. Sin embargo, en una aplicación real, se utilizaría una base de datos o un servicio de backend para almacenar y recuperar los datos de manera persistente.
        </p>
        <p className="text-sm sm:text-base mb-4">
          El objetivo principal de este proyecto es demostrar el uso de React y Next.js para construir una aplicación web moderna y responsive. Se han implementado características como el enrutamiento, la gestión de estado, los efectos y los componentes funcionales.
        </p>
        <p className="text-sm sm:text-base mb-10">
          Además, se ha puesto especial atención en la experiencia de usuario, con un diseño atractivo y una interfaz intuitiva. Se han utilizado estilos CSS personalizados y la biblioteca Tailwind CSS para lograr un aspecto moderno y responsive.
        </p>
      </div>
      <div className="max-w-4xl mx-auto my-8 py-4 px-5 rounded-full shadow-xl bg-neutral-800">
        <div className='flex justify-between items-center'>
          <div className='flex w-full items-center gap-4'>

            <a href='https://www.linkedin.com/in/santicervan/' target='_blank' className='hover:-rotate-45 transition-all'>
              <Image src="/profile-photo.jpg" width={40} height={40} alt="Santiago Cervan foto" className='rounded-full' />
            </a>
            <span className="text-xs sm:text-sm sm:w-1/3 text-neutral-400">
              Hecho por <a href='https://www.linkedin.com/in/santicervan/' target='_blank' className='underline hover:text-blue-400 transition-all'>Santiago Cervan</a>
            </span>
          </div>
          <div className='flex items-center gap-4 sm:gap-0 sm:justify-evenly w-1/3'>
            <a href='https://www.linkedin.com/in/santicervan/' target='_blank' className='hover:bg-neutral-500 transition-all rounded-full w-[40px] h-[40px] flex items-center justify-center'>
              <Image src="/icons/icons8-linkedin.svg" width={30} height={30} alt="Linkedin" />
            </a>
            <a href='mailto:santicervan@live.com' target='_blank' className='hover:bg-neutral-500 transition-all rounded-full w-[40px] h-[40px] flex items-center justify-center'>
              <Image src="/icons/icons8-mensaje-50.png" width={30} height={30} alt="Email" />
            </a>
            <a href='https://wa.me/543517380506' target='_blank' className='hover:bg-neutral-500 transition-all rounded-full w-[40px] h-[40px] flex items-center justify-center'>
              <Image src="/icons/icons8-whatsapp.svg" width={25} height={25} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;