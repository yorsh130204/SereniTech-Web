import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left bg-white dark:bg-trueGray-800 dark:text-gray-200 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 transition duration-300">
                    <span className="font-semibold">{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#127cb1]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Es completamente gratuita la aplicación SereniApp?",
    answer: "Sí, SereniApp es completamente gratuita para cuidadores de niños con Trastorno del Espectro Autista (TEA).",
  },
  {
    question: "¿Cómo funciona SereniTech-Band en el monitoreo de personas con TEA?",
    answer: "SereniTech-Band utiliza tecnología innovadora para mejorar la seguridad y autonomía de las personas con Trastorno del Espectro Autista (TEA). Proporciona funciones avanzadas para el monitoreo constante y el bienestar general.",
  },
  {
    question: "¿Cuáles son las características clave de SereniTech-Band?",
    answer: "SereniTech-Band cuenta con un sensor de pulso para monitorear la salud, así como un sensor de ubicación para proporcionar información sobre la localización. Además, registra datos históricos para un análisis detallado.",
  },
  {
    question: "¿SereniTech-Band ofrece funcionalidades específicas para cuidadores?",
    answer: "Sí, SereniTech-Band proporciona a los cuidadores acceso a datos históricos de pulso y ubicación, permitiéndoles revisar información pasada para un mejor entendimiento del bienestar de las personas con TEA.",
  },
];

export default Faq;
