import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TourBookingProvider } from "@/components/TourBookingProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAVEN. — Curated Luxury Real Estate",
  description:
    "Discover exceptional properties in the world's most coveted addresses. HAVEN connects discerning buyers with extraordinary homes.",
  keywords: "luxury real estate, premium properties, exclusive listings, luxury homes",
  openGraph: {
    title: "HAVEN. — Curated Luxury Real Estate",
    description: "Discover exceptional properties in the world's most coveted addresses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <TourBookingProvider>
          {children}
        </TourBookingProvider>
      </body>
    </html>
  );
}
