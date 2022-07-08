import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';

import ProviderSection from '../context/Sections';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderSection>
      <Component {...pageProps} />
      <GlobalStyle />
    </ProviderSection>
  )
}