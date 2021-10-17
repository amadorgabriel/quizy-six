import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Secular+One&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#090909" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#090909"
          />
          <meta name="msapplication-navbutton-color" content="#090909" />

          <link
            rel="shortcut icon"
            href="./icon_white.png"
            type="image/x-icon"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
