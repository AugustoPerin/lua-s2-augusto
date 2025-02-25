import type React from "react"
import { Dancing_Script, Parisienne, Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
})

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
})

export const metadata = {
  title: "Para Minha Lua",
  description: "Uma mensagem romântica para minha querida lua",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${dancingScript.variable} ${parisienne.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'