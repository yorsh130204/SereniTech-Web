// LanguageButton.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'react-feather';

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="fixed bottom-5 left-5 flex flex-col space-y-2">
      <button
        className="bg-[#0b4b7d] rounded-full shadow-lg text-white p-3 flex items-center justify-center hover:bg-[#1690c7] focus:outline-none focus:bg-[#0b4b7d] transition duration-300"
        onClick={toggleLanguage}
      >
        <Globe className="mr-2" />
        <span className="font-semibold">
          {i18n.language === 'en' ? 'En' : 'Es'}
        </span>
      </button>
    </div>
  );
};

export default LanguageButton;
