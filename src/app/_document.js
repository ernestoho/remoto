import { Html, Head, Main, NextScript } from 'next/document'
import fs from 'fs'
import path from 'path'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Remoto" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Remoto" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <script dangerouslySetInnerHTML={{ __html: `
          fetch('/content.json')
            .then(response => response.json())
            .then(content => {
              const manifestElement = document.querySelector('link[rel="manifest"]');
              if (manifestElement) {
                fetch(manifestElement.href)
                  .then(response => response.json())
                  .then(manifest => {
                    manifest.icons = content.icons;
                    const blob = new Blob([JSON.stringify(manifest)], {type: 'application/json'});
                    const manifestURL = URL.createObjectURL(blob);
                    manifestElement.setAttribute('href', manifestURL);
                  });
              }
            });
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}