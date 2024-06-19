import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="DrWaygus hep en iyisi!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@DrWaygus" />
          <meta name="twitter:creator" content="@drwaygus" />
          <meta property="og:url" content="https://drwaygus.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DrWaygus" />
          <link
            rel="icon"
            href="/imges/drwaygus.gif"
            type="images/gif"
          />
          <meta
            property="og:description"
            content="DrWaygus hep en iyisi!"
          />
          <meta property="og:image" content="/imges/drwaygus.gif" />
          <meta property="og:image:alt" content="DrWaygus" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="DrWaygus"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/images/drwaygus.gif" type="images/drwaygus.gif" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
