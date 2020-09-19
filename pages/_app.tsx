// pages/_app.js
import "../styles/tailwind.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}