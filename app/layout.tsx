import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Rajasthan Emporium",
  description: "Product showcase for authentic Rajasthani handicrafts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
