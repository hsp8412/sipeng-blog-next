import "../globals.css";
import Navbar from "@/app/components/navbar";
import { lexend } from "@/app/fonts";
import Footer from "@/app/components/footer";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import GoogleAnalytics from "@/app/components/googleAnalytics";
config.autoAddCss = false; /* eslint-disable import/first */

export const metadata = {
  title: "Sipeng's Blog",
  description: "Welcome to Sipeng He's blog.",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <div className={"min-h-screen flex flex-col"}>
          <Navbar />
          <div className={"flex flex-col flex-grow"}>{children}</div>
          <Footer />
          {modal}
        </div>
      </body>
    </html>
  );
}
