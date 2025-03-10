import { Inter } from "next/font/google";
import "./globals.css"; // Ensure you have a global styles file

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Elo Salvador",
  description: "Tech guy who’s been building awesome web apps for over a decade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}
