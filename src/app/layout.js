import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yogesh Sampathkumar Portfolio",
    template: "%s | Yogesh Sampathkumar",
  },
  descripton: "Personal portfolio of Yogesh Sampathkumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrains.variable} antialiased`}
      >
        <div className="flex flex-col mt-15 justify-start items-center min-h-screen  w-full">
          <div className="w-full max-w-screen-md mx-auto px-4">
            <Navbar />

            {children}
            <Analytics />

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
