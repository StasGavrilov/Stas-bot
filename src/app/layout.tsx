import type { Metadata } from "next"

import Header from "@/components/Head/Header"

import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: ''
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="pl-[165px]">
          {children}
        </main>
      </body>
    </html>
  )
}
