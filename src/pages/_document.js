/* eslint-disable @next/next/no-head-element */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <title>Innovation Center | GITAM Hyderabad</title>
        <meta name="description" content="Innovation Center at GITAM Hyderabad" />
        <meta name="author" content="Innovation Center" />
        <meta name="keywords" content="Innovation Center, GITAM Hyderabad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ic.ico" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
