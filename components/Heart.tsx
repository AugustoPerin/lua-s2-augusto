import styles from "@/styles/Heart.module.css"

interface HeartProps {
  x: number
  y: number
}

export default function Heart({ x, y }: HeartProps) {
  return <div className={styles.heart} style={{ left: `${x}px`, top: `${y}px` }}></div>
}

