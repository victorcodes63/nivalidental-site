// src/components/LottieWrapper.tsx
'use client'

import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

import animationData from '@/animations/tooth-smile.json'

export default function LottieWrapper() {
  return <Lottie animationData={animationData} loop autoplay />
}
