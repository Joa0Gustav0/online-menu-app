import "@/app/ui/globals.css";
import { primaryFont } from "./ui/fonts";
import Header from "@/app/ui/Header/Header";
import Footer from "@/app/ui/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger | Delivery de Fast-Food",
  description: "Burger é uma plataforma de delivery de fast-food. Contamos com uma variedade de comidas e com profissionais qualificados para te entregar sempre o melhor.",
  authors: {
    name: "João Gustavo Silva Lima",
    url: "https://joaogustavo.vercel.app/",
  },
  keywords: ["Delivery", "Fast-Food", "Comida", "Hambúrguer", "Pizza", "Açaí", "Qualidade"],
  openGraph: {
    title: "Burger | Delivery de Fast-Food",
    description: "Burger é uma plataforma de delivery de fast-food. Contamos com uma variedade de comidas e com profissionais qualificados para te entregar sempre o melhor.",
    images: "https://github.com/Joa0Gustav0/online-menu-app/assets/135780151/9e69140f-9624-4bc3-aa24-8644fde0f5b3",
  },
  icons: {
    icon: "https://github.com/Joa0Gustav0/online-menu-app/assets/135780151/9e69140f-9624-4bc3-aa24-8644fde0f5b3",
    apple: "https://github.com/Joa0Gustav0/online-menu-app/assets/135780151/9e69140f-9624-4bc3-aa24-8644fde0f5b3",
  },
  metadataBase: new URL("https://itsburger.vercel.app")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${primaryFont.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
