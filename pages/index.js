import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import BenefitData from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import AboutUsSection from "../components/AboutUs";
import CustomHead from "../components/CustomHead"
import LanguageButton from "../components/translate"
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("translation");
  const { benefitOne, benefitTwo } = BenefitData();

  return (
    <>
      <CustomHead />
      <Navbar />
      <Hero />

      <div id="serenitech-band"></div>
      <br></br><br></br><br></br>
      <SectionTitle 
        pretitle={t("info.pretitle")}
        title={t("info.title")}>
        {t("info.content")}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="acerca-de-nosotros"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle={t("aboutUsSection.pretitle")}
        title={t("aboutUsSection.title")}>
        {t("aboutUsSection.content")}
      </SectionTitle>
      <AboutUsSection />

      <div id="video-sobre-el-tea"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle={t("videoSection.pretitle")}
        title={t("videoSection.title")}>
        {t("videoSection.content")}
      </SectionTitle>
      <Video />

      <div id="testimonios"></div>
      <br></br><br></br><br></br>
      <SectionTitle
        pretitle={t("testimonialsSection.pretitle")}
        title={t("testimonialsSection.title")}>
        {t("testimonialsSection.content")}
      </SectionTitle>
      <Testimonials />

      <div id="faq"></div>
      <br></br><br></br><br></br>
      <SectionTitle 
        pretitle={t("faqSection.pretitle")} 
        title={t("faqSection.title")}>
        {t("faqSection.content")}
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
      <LanguageButton />
    </>
  );
}

export default Home;
