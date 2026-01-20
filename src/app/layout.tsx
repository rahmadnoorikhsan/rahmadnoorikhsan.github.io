import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahmad Noor Ikhsan | Android Developer & Lead Technical Support",
  description: "Personal portfolio of Rahmad Noor Ikhsan - Android Developer & Lead Technical Support. Bridging the gap between robust mobile applications and reliable infrastructure.",
  keywords: ["Android Developer", "Kotlin", "Flutter", "Technical Support", "Indonesia", "Mobile Development"],
  authors: [{ name: "Rahmad Noor Ikhsan" }],
  openGraph: {
    title: "Rahmad Noor Ikhsan | Portfolio",
    description: "Android Developer & Lead Technical Support",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
