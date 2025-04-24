'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-0 bg-gradient-to-br from-[#eaf4ff] via-white to-[#f0faff] dark:from-neutral-800 dark:via-neutral-900 dark:to-black transition-all overflow-hidden">

      {/* Text content */}
      <div className="z-10 max-w-xl text-center md:text-left">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-[length:200%_200%] bg-gradient-to-r from-blue-900 via-sky-500 to-emerald-400 dark:from-white dark:via-gray-300 dark:to-emerald-400 animate-[gradientShift_6s_ease-in-out_infinite]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Exceptional Care. Confident Smiles. A Healthier You.
        </motion.h1>

        <motion.p
          className="text-base md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover a full spectrum of personalized dental solutions in a space where technology, trust, and warm service meet to bring your best smile forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500"
            >
              Book Consultation
            </Button>
          </Link>
        </motion.div>

        <p className="mt-6 text-sm text-muted-foreground dark:text-gray-300">
  Rated <strong>★ 4.9/5</strong> by 500+ happy patients
</p>

      </div>

      {/* Decorative blur background shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 blur-3xl opacity-20 w-[300px] h-[300px] bg-gradient-to-br from-blue-400 via-sky-300 to-cyan-200 dark:from-emerald-600 dark:via-cyan-400 dark:to-blue-500 rounded-full z-0" />

      {/* Floating animated Image */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="relative w-full md:w-[45%] max-w-xl mb-10 md:mb-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl ring-4 ring-emerald-200 dark:ring-emerald-500 dark:shadow-[0_0_40px_rgba(34,197,94,0.4)] md:ml-8"
        >
          <Image
            src="/assets/smile.jpg"
            alt="Smiling patient"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Clean Animated Gradient Divider */}
      <hr className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end border-0 opacity-40 dark:opacity-60 animate-gradientShift" />
    </section>
  )
}
