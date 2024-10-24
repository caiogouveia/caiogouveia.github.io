import Footer from "@/app/components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
        <link rel="shortcut icon" href="/favicon/13c6a35422eda84068043491eebd0c67.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={inter.className}
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        {/* <Dock /> */}
        {/* <Line position={70}/> */}
        {/* <Line position={90}/> */}
        <div style={{ maxWidth: 1024, zIndex: 2}} className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

const Line = ({ position }: { position: number }) => {
  return (
    <div
      style={{
        borderLeftWidth: 1,
        borderColor: "red",
        position: "absolute",
        height: "100%",
        top: 0,
        left: `${position}%`,
        zIndex: 1
      }}
    />
  );
};

const Dock = () => {
  return (
    <div
      style={{
        height: "100%",
        minWidth: "120px",
        backgroundColor: "#484848",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>
  );
}
