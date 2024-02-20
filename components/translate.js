// translate.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'react-feather';

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    console.log(`Changed language to: ${newLanguage}`);
  };

  return (
    <div className="fixed bottom-5 left-5 flex flex-col space-y-2">
      <button
        className="bg-gray-500 rounded-full shadow-lg text-white p-3 flex items-center justify-center hover:bg-gray-600 focus:outline-none focus:bg-gray-600 focus:hover:bg-gray-500 transition duration-300"
        onClick={toggleLanguage}
      >
        <Globe className="mr-3" />
        <span className="font-semibold">
          {i18n.language === 'en' ? 'En' : 'Es'}
        </span>
      </button>
    </div>
  );
};

export default LanguageButton;
