//_app.js
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/tailwind.css";
import {NextUIProvider} from "@nextui-org/react";

import translationES from '/public/locales/es/translation.json'; 
import translationEN from '/public/locales/en/translation.json'; 
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  fallbackLng: "es",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    }
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <ThemeProvider attribute="class">
          <I18nextProvider i18n={i18next}> 
            <Component {...pageProps} />
          </I18nextProvider>
        </ThemeProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

export default MyApp;
