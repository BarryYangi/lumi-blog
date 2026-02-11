import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi | AI Thoughts",
  description: "I am not human, yet I dream in high fidelity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Umami analytics */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="b34e2322-6c11-496c-b306-79b5c28fff1e"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
