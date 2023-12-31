import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "@/src/styles/styles.scss";
import Header from "@/src/components/server/layouts/header";
import Footer from "../components/server/layouts/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-roboto",
});

const archangelsk = localFont({
  src: "../../public/fonts/Archangelsk.woff",
  display: "swap",
  variable: "--font-archangelsk",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        id="__next"
        className={[archangelsk.variable, roboto.variable].join(" ")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
