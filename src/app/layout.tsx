import { Inter } from "next/font/google";
import "./globals.css"; // Ensure you have a global styles file

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Home | Elo Salvador",
  description: "Tech guy who’s been building awesome web apps for over a decade",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-900 text-gray-200 font-sans">
        <main className="min-h-screen flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
