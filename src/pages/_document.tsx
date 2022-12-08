import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { appColor } from '@src/utils/constants';
import { portalType } from '@src/core/interface/portal-type';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" href="/logo.ico" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          {/* <!-- Chrome, Firefox, Opera --> */}
          <meta content={appColor} name="theme-color" />
          {/* <!-- Windows Phone --> */}
          <meta content={appColor} name="msapplication-navbutton-color" />
          {/* <!-- iOS Safari --> */}
          <meta content={appColor} name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
        </Head>
        <body className="z-0 bg-primary_bg-400 dark:bg-primary_bg-700 text-primary-400 dark:text-primary-600 antialiased">
          <Main />
          {portalType.map((item) => {
            return <div key={item} id={item} />;
          })}
          <NextScript />
        </body>
      </Html>
    );
  }
}
