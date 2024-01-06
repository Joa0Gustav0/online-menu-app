import "@/app/ui/globals.css";
import { primaryFont } from "./ui/fonts";
import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";

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
