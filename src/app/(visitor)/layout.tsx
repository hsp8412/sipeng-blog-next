import "../globals.css";
import Navbar from "@/app/components/navbar";
import { lexend } from "@/app/fonts";
import Footer from "@/app/components/footer";

export const metadata = {
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
      <body className={lexend.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
