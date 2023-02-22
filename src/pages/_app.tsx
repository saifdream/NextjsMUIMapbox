import '@/styles/globals.css'
import themeOptions from '@/styles/theme/themeOptions';
import createEmotionCache from '@/utility/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const theme = responsiveFontSizes(createTheme(themeOptions));

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next MUI | Map Box</title>
        <meta name="description" content="Map Box implementation using typescript, next js, material ui, and react js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;