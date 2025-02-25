import type React from "react"
import "@/styles/globals.css"
import { Dancing_Script, Parisienne, Roboto } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-dancing-script",
})

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Para Minha Lua",
  description: "Uma mensagem especial para minha querida lua",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${dancingScript.variable} ${parisienne.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'