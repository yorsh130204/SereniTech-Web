//_app.js
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/tailwind.css";
import {NextUIProvider} from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

export default MyApp;
