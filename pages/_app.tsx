// pages/_app.js
import "../styles/tailwind.scss";
import { FunctionComponent } from "react";

export const MyApp: FunctionComponent<{ pageProps: any; Component: any }> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};
export default MyApp;
