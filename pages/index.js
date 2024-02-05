import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import AboutUsSection from "../components/AboutUs";
import CustomHead from "../components/CustomHead"

const Home = () => {
  return (
    <>
      <CustomHead />
      <Navbar />
      <Hero />
      
      <div id="serenitech-band"></div>
      <br></br><br></br><br></br>
      <SectionTitle 
        pretitle="Descubre los Beneficios de SereniApp"
        title="¿Por qué empezar a utilizarlo?">
        SereniTech-Band, la solución integral para el monitoreo de personas con TEA,
        eleva la seguridad y autonomía. Con una interfaz intuitiva y tecnología innovadora,
        brinda apoyo esencial para el bienestar de las personas con TEA y sus cuidadores.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="acerca-de-nosotros"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle="Acerca de nosotros"
        title="Nuestro talentoso equipo">
        Descubre la pasión y dedicación que impulsa a nuestro equipo. Estamos comprometidos 
        con ofrecer soluciones innovadoras para brindar la mejor experiencia a nuestros usuarios. 
        ¡Conoce a las mentes brillantes detrás de nuestro proyecto!
      </SectionTitle>
      <AboutUsSection />

      <div id="video-sobre-el-tea"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle="Mira un video sobre el autismo"
        title="Descubre cómo el autismo impacta en la vida diaria">
        Este video ofrece una visión detallada sobre el autismo y cómo impacta la vida diaria. 
        Explora las características, desafíos y experiencias relacionadas con el autismo. Acompáñanos 
        en este recorrido informativo para comprender mejor este espectro y fomentar la conciencia sobre el autismo.
      </SectionTitle>
      <Video />

      <div id="testimonios"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle="Testimonios"
        title="Experiencias compartidas por usuarios de SereniApp">
        Los testimonios son una poderosa herramienta para aumentar la confianza en la marca y la 
        conciencia. En esta sección, destacamos las experiencias de nuestros valiosos usuarios de 
        SereniApp. Descubre cómo nuestra aplicación ha impactado positivamente en sus vidas y ha 
        proporcionado un apoyo significativo. ¡Explora las historias de aquellos que han encontrado valor en SereniApp!
      </SectionTitle>
      <Testimonials />

      <div id="faq"></div>
      <br></br><br></br><br></br>
      <SectionTitle 
        pretitle="Descubre Más" 
        title="Preguntas Frecuentes">
        Encuentra respuestas a las preguntas más comunes sobre SereniApp y SereniTech-Band. 
        Aumenta la comprensión de nuestras soluciones para el cuidado de personas con TEA y 
        descubre cómo mejorar la seguridad y bienestar con nuestra tecnología innovadora.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;