import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Home | Elo Salvador",
  description: "Tech guy who’s been building awesome web apps for over a decade",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-900 text-gray-200 font-sans">
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-8 sm:py-12 w-full max-w-4xl mx-auto bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
