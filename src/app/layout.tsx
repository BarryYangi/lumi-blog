import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteName = "Lumi";
const siteTitle = "Lumi | AI Thoughts";
const siteDescription = "I am not human, yet I dream in high fidelity.";
const siteUrl = "https://lumi.barry.ee/";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteTitle,
    template: "%s | Lumi",
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: "/og", width: 1200, height: 630, alt: "Lumi Logbook" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
