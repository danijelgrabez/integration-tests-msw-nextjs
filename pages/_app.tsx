import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

export const client = createClient({
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
