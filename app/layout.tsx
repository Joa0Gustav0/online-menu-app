import "@/app/ui/globals.css";
import { primaryFont } from "./ui/fonts";
import Header from "./ui/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} antialiased px-[40px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
