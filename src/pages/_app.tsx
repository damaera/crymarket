import "@/styles/globals.css";
import type { AppProps } from "next/app";

let a = 1;
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
