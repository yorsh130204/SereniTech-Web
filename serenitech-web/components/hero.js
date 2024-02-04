import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <Container className="flex flex-wrap mt-14">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            SereniApp
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            SereniApp es tu asistente personalizado en el cuidado de tus seres queridos con TEA.
            A través de avanzadas alertas y un monitoreo en tiempo real, podrás estar al tanto de su
            bienestar donde sea que estén, dándote la capacidad de responder ante cualquier
            situación para su mayor seguridad.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="/serenitech-web/components/register.js"
              target=""
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#0b4b7d] rounded-md transition duration-300 hover:bg-[#209ccf]">
              Regístrate
            </a>
            <a
              href="/serenitech-web/components/login.js"
              target=""
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-gray-500 rounded-md transition duration-300 hover:bg-gray-600">
              Inicia sesión
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <Image
            src={heroImg}
            width="616"
            height="617"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
