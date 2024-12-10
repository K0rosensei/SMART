import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata: Metadata = {
  title: "S.M.A.R.T",
  description: "Website Presensi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}