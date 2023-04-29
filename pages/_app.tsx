import LoginModal from "component/components/modals/LoginModal";
import Layout from "../components/Layout";
import "component/styles/globals.css";
import type { AppProps } from "next/app";
import RegisterModal from "component/components/modals/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <LoginModal /> */}
      {/* <RegisterModal /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
