import Footer from "@/app/components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const JetBrainMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caio Gouveia",
  description: "Caio Gouveia Curriculo",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/13c6a35422eda84068043491eebd0c67.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/13c6a35422eda84068043491eebd0c67.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/13c6a35422eda84068043491eebd0c67.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="shortcut icon"
          href="/favicon/13c6a35422eda84068043491eebd0c67.png"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={JetBrainMono.className}>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qtzajjhpbr");
                    `}
        </Script>
      </body>
    </html>
  );
}
