import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://www.dnd5eapi.co/graphql',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
