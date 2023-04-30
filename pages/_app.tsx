import Layout from "../components/Layout";
import "component/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
// import RegisterModal from "component/components/modals/RegisterModal";
// import LoginModal from "component/components/modals/LoginModal";


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}