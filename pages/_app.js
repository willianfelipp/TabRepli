import '../styles/styles.css'; // Importa o CSS global
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
