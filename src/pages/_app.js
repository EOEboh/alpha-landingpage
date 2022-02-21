/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 

import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import { useEffect } from 'react';
import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';


// animate on scroll
import 'aos/dist/aos.css';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return <Component {...pageProps} />;
}
