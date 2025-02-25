"use client"

import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([])
  const heartId = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        const currentId = heartId.current
        const newHeart = {
          id: currentId,
          x: e.pageX - 10,
          y: e.pageY - 10,
        }
        setHearts((prev) => [...prev, newHeart])
        heartId.current++

        setTimeout(() => {
          setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
        }, 1500)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="stars" />
      <div className="moon" />
      <div className="relative z-[2] max-w-[80%] animate-[fadeIn_2s_ease-out] rounded-2xl bg-black/50 p-8">
        <h1 className="mb-3 font-parisienne text-[4.5em] text-white text-shadow-lg sm:text-[3em]">
          Para Minha Querida Lua
        </h1>
        <p className="font-dancing-script text-[2em] text-white text-shadow sm:text-[1.5em]">
          Assim como a lua ilumina a noite, você ilumina meu dia-a-dia.
        </p>
      </div>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>')`,
          }}
        />
      ))}
    </main>
  )
}

