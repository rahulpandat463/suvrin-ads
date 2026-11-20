import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BookingProvider } from "@/components/booking/BookingProvider";
import ConsultantBookingModal from "@/components/booking/ConsultantBookingModal";

export const metadata: Metadata = {
  title: "Suvrin Technologies | Business ERP Software India & Gurgaon",
  description:
    "Turnkey Odoo Business ERP implementation for Indian & Gurgaon businesses. Shop floor routing, multi-warehouse NCR tracking, and Indian GST & e-Invoicing compliance.",
  icons: {
    icon: "data:,",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:," />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="relative min-h-screen text-brand-ink bg-white selection:bg-brand-blue selection:text-white font-sans">
        <BookingProvider>
          <ConsultantBookingModal />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
