'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import LottieBlock from '@/components/ui/LottieBlock'
import { Smile, Brush, Globe } from 'lucide-react'
import PreventiveAnim from '@/animations/brush.json'
import CosmeticAnim from '@/animations/globe.json'


const highlightServices = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and cavity treatments to maintain optimal oral health.',
    icon: <Globe size={22} />,
    animation: PreventiveAnim,
  },
  {
    title: 'Orthodontics',
    description: 'Braces and aligners for straighter smiles and improved bite function.',
    icon: <Brush size={22} />,
    animation: PreventiveAnim,
  },
  {
    title: 'Smile Design',
    description: 'Transformative cosmetic treatments including veneers and whitening tailored to your face.',
    icon: <Smile size={22} />,
    animation: CosmeticAnim,
  },
]

export default function HomeServicesSection() {
  return (
    <section className="bg-background text-foreground py-24 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Explore Our Dental Services
        </motion.h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          A few of the many ways we care for your smile — expertly, gently, and with precision.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {highlightServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-card text-card-foreground rounded-2xl p-6 shadow-md hover:shadow-xl border border-border transition-all"
          >
            <LottieBlock animationData={service.animation} className="h-20 mb-4" />
            <div className="text-primary mb-2">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/services">
          <button className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition">
            Discover More Services
          </button>
        </Link>
      </div>
    </section>
  )
}
