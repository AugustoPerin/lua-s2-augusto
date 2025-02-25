"use client"

import { useEffect, useState } from "react"
import Head from "next/head"
import Stars from "@/components/Stars"
import Moon from "@/components/Moon"
import Content from "@/components/Content"
import Heart from "@/components/Heart"

export default function Home() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        const newHeart = {
          id: Date.now(),
          x: e.pageX - 10,
          y: e.pageY - 10,
        }
        setHearts((prevHearts) => [...prevHearts, newHeart])
        setTimeout(() => {
          setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id))
        }, 1500)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Para Minha Lua</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Stars />
      <Moon />
      <Content />
      {hearts.map((heart) => (
        <Heart key={heart.id} x={heart.x} y={heart.y} />
      ))}
    </>
  )
}

