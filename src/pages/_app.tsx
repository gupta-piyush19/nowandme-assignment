import "@/styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

const basierLocal = localFont({ src: "../../public/fonts/basiercircle.otf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={basierLocal.className}>
      <Component {...pageProps} />
    </main>
  );
}
