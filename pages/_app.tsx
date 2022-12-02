import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import Head from "next/head";

const client = createClient({
  url: "http://localhost:3000/graphql",
  fetchOptions: () => {
    const token = "";
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
