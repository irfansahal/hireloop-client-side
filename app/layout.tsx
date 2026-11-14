import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
     cz-shortcut-listen="true"
    >
      <body 
      cz-shortcut-listen="true"
      className="flex min-h-svh flex-col">
        {/* <ThemeProvider> */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Toaster/>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
