// src/components/LottieBlock.tsx
'use client'

import dynamic from 'next/dynamic'
import { HTMLAttributes } from 'react'

// Disable SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface LottieBlockProps extends HTMLAttributes<HTMLDivElement> {
  animationData: object
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieBlock({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  ...props
}: LottieBlockProps) {
  return (
    <div className={className} {...props}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  )
}
