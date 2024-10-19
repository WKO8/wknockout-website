import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WKnockout",
  description: "Automate Your Discord Server Management with the Best Custom Bot",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
