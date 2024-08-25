import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import grainImage from "@/assets/images/grain.jpg";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Emmanuel's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "antialiased font-sans",
          inter.variable,
          calistoga.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative min-h-screen'>
            <div
              className='absolute inset-0 -z-10 opacity-5'
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
