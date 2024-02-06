import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
