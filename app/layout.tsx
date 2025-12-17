import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/app/components/LanguageProvider";
import { DarkModeProvider } from "@/app/components/DarkModeProvider";
import CursorLight from "@/app/components/home/CursorLight";

export const metadata: Metadata = {
  title: "Chai Hui Yi - Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DarkModeProvider>
          <LanguageProvider>
            <CursorLight />
            {children}
          </LanguageProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
