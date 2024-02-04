import {
  HeartIcon,
  UsersIcon,
  ChartBarIcon,
  TagIcon,  // Cambiado desde DeviceMobileIcon
  MapPinIcon,  // Cambiado desde LocationMarkerIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Protege a tus seres queridos con SereniTech-Band",
  desc: "SereniTech-Band es una solución integral para el monitoreo de personas con TEA. Mejora la seguridad y autonomía mediante una interfaz intuitiva y tecnología innovadora, ofreciendo apoyo esencial para el bienestar de las personas con TEA y sus cuidadores.",
  image: benefitOneImg, 
  bullets: [
    {
      title: "Cuida su salud con SereniTech-App",
      desc: "Utiliza SereniTech-App para monitorear y cuidar la salud de tus seres queridos con TEA. La aplicación proporciona herramientas y funciones específicas para garantizar su bienestar.",
      icon: <HeartIcon />, 
    },
    {
      title: "Mantenlos cerca de ti con SereniTech-App",
      desc: "SereniTech-App te permite mantener a tus seres queridos cerca de ti, incluso a distancia. Con funciones de ubicación y alertas, siempre estarás conectado y preparado para brindar apoyo.",
      icon: <UsersIcon />, 
    },
    {
      title: "Registra datos históricos con SereniTech-App y SereniTech-Band",
      desc: "SereniTech-App y SereniTech-Band permiten registrar datos históricos para un análisis detallado de la salud y el comportamiento de tus seres queridos.",
      icon: <ChartBarIcon />, 
    },
  ],
};

const benefitTwo = {
  title: "Todo en un solo lugar con SereniTech-Band y SereniTech-App",
  desc: "Utiliza SereniTech-Band y SereniTech-App para tener todas las herramientas que necesitas en un solo lugar. Estos productos ofrecen una solución integral para el monitoreo de personas con TEA, proporcionando funcionalidades avanzadas y beneficios esenciales.",
  image: benefitTwoImg, 
  bullets: [
    {
      title: "Sensor de pulso con SereniTech-Band",
      desc: "SereniTech-Band cuenta con un sensor de pulso para proporcionar información vital sobre la salud de tus seres queridos. Monitorea el pulso de manera continua para garantizar su bienestar.",
      icon: <TagIcon />,  // Cambiado desde DeviceMobileIcon
    },
    {
      title: "Sensor de ubicación con SereniTech-App",
      desc: "SereniTech-App utiliza un sensor de ubicación para permitirte conocer la ubicación de tus seres queridos en todo momento. Esta función brinda tranquilidad y seguridad.",
      icon: <MapPinIcon />,  // Cambiado desde LocationMarkerIcon
    },
    {
      title: "Registra datos históricos con SereniTech-App y SereniTech-Band",
      desc: "Accede a analíticas detalladas sobre la salud y el comportamiento de tus seres queridos a través de SereniTech-App y SereniTech-Band. Estas herramientas te brindan información valiosa para el cuidado diario.",
      icon: <ChartBarIcon />, 
    },
  ],
};

export { benefitOne, benefitTwo };
