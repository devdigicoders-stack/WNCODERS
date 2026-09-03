import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToastProvider from "../components/ToastProvider";
import ScrollToTop from "../components/ScrollToTop";
import PageTransitionLoader from "../components/PageTransitionLoader";
import SocialSidebar from "../components/SocialSidebar";
import AnnouncementBar from "../components/AnnouncementBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WNCoders | Building Digital Solutions",
  description: "Smart Software Solutions For Modern Businesses",
  keywords: "web development, app development, software solutions, IT company, Qatar, digital solutions",
  openGraph: {
    title: "WNCoders | Building Digital Solutions",
    description: "Smart Software Solutions For Modern Businesses",
    url: "https://www.wncoders.com",
    siteName: "WNCoders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WNCoders | Building Digital Solutions",
    description: "Smart Software Solutions For Modern Businesses",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to Google servers for faster font & translate loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="//translate.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Translate Script - afterInteractive so it loads after page is ready */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
          id="google-translate-main"
        />
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        <ToastProvider />
        <AnnouncementBar />
        <Navbar />
        <SocialSidebar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
