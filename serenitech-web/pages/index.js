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

const Home = () => {
  return (
    <>
      <Head>
        <title>SereniApp</title>
        <meta
          name="description"
          content="SereniApp es tu asistente personalizado en el cuidado de tus seres queridos con TEA."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Navbar />
      <Hero />
      
      <div id="serenitech-band"></div>
      <SectionTitle 
        pretitle="Beneficios de SereniApp"
        title="¿Por qué comenzar a utilizarlo?">
        SereniTech-Band, la solución integral para el monitoreo de personas con TEA,
        mejora seguridad y autonomía. Con su interfaz intuitiva y tecnología innovadora,
        ofrece un apoyo esencial para el bienestar de las personas con TEA y sus cuidadores.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="acerca-de-nosotros"></div>
      <SectionTitle
        pretitle="Mira un video demostrativo"
        title="Aprende cómo funciona">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />

      <div id="testimonios"></div>
      <SectionTitle
        pretitle="Testimonios"
        title="Opiniones de usuarios de SereniApp">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      <div id="faq"></div>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;