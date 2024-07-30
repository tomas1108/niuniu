import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "~/containers/header";
import Footer from "~/containers/footer";

export const metadata: Metadata = {
  title: "NiuNiu",
  description: "Niu niu game",
  icons: {
    icon: "/icons/logo.svg",
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
        <link rel="icon" href="/icons/logo.svg" />
      </head>
      <body>
        <main className="bg-primary">
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
