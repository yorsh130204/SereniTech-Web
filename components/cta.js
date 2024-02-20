import React from "react";
import Container from "./container";
import { useTranslation } from 'react-i18next';

const Cta = () => {
  const { t } = useTranslation("translation");

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#0b4b7d] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {t("cta.title1")}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {t("cta.title2")}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/signup"  
            target=""
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#0b4b7d] bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-white">
            {t("cta.title3")}
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;
