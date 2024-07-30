import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niuniu",
  description: "Niu niu game",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-primary">
          {children}
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
