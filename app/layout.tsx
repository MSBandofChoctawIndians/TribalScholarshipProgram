import "./globals.css";
import Head from "next/head";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Deadline from "./components/Deadline";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className="bg-tile bg-top bg-repeat bg-blend-color-burn">
        <Providers>
          <Deadline />
          <NavBar />
          {children}
          <Footer />
        </Providers>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-BT1GKDHNJ3`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BT1GKDHNJ3');
            `,
          }}
        />
      </body>
    </html>
  );
}
