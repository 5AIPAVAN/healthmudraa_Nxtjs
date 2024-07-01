// pages/_app.js

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'E:/HealthMudraa_Nextjs/hm_frontend/Components/Pricing.css'
// import { useEffect } from 'react';


// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
  
//   return  <Component {...pageProps} />
//     ;
// }

// export default MyApp;

// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'E:/HealthMudraa_Nextjs/hm_frontend/Components/Pricing.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DynamicRouter>
      <Component {...pageProps} />
    </DynamicRouter>
  );
}

export default MyApp;

