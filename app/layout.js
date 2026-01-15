import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MidasWears - Premium Fashion & Streetwear",
  description: "Curated fashion and lifestyle by MidasWears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}