import { useState } from 'react';
import AppProvider from '../context/AppProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hydrate } from '@tanstack/react-query';
import '../styles/globals.css';
import { defaultOptions } from 'utils/ssr';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions,
      })
  );

  return (
    <>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;
