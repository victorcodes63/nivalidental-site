'use client'

import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Smile, HeartPulse, Brush, Stethoscope, Globe } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'
import LottieBlock from '@/components/ui/LottieBlock'
import PreventiveAnim from '@/animations/brush.json'
import CosmeticAnim from '@/animations/globe.json'
import DentistryAnim from '@/animations/dentistry.json'

interface Service {
  icon: () => ReactNode;
  title: string;
  description: string;
  animation: object;
}

const allServices: Record<string, Service[]> = {
  Preventive: [
    {
      icon: () => <Globe size={28} />, title: 'General Dentistry',
      description: 'Routine checkups, cleanings, and cavity treatments to maintain oral health.',
      animation: PreventiveAnim
    },
    {
      icon: () => <Brush size={28} />, title: 'Orthodontics',
      description: 'Braces and aligners for straighter, healthier smiles in all age groups.',
      animation: CosmeticAnim
    },
    {
      icon: () => <Stethoscope size={28} />, title: 'Pediatric Dentistry',
      description: 'Gentle and specialized care for children to ensure healthy teeth from an early age.',
      animation: DentistryAnim
    },
  ],
  Cosmetic: [
    {
      icon: () => <Smile size={28} />, title: 'Cosmetic Dentistry',
      description: 'Smile makeovers using whitening, veneers, and aesthetic enhancements.',
      animation: CosmeticAnim
    },
    {
      icon: () => <Sparkles size={28} />, title: 'Teeth Whitening',
      description: 'In-office and take-home options for noticeably whiter teeth.',
      animation: DentistryAnim
    },
    {
      icon: () => <Brush size={28} />, title: 'Smile Design',
      description: 'Customized treatment planning for the perfect smile aesthetic.',
      animation: PreventiveAnim
    },
  ],
  Emergency: [
    {
      icon: () => <HeartPulse size={28} />, title: 'Emergency Care',
      description: 'Fast relief from dental trauma, pain, swelling, or broken teeth.',
      animation: PreventiveAnim
    },
    {
      icon: () => <Stethoscope size={28} />, title: 'Surgical Procedures',
      description: 'Expert oral surgeries, wisdom tooth extractions, and implants.',
      animation: CosmeticAnim
    },
    {
      icon: () => <Globe size={28} />, title: 'Toothache Relief',
      description: 'Same-day pain relief for infected or inflamed teeth.',
      animation: DentistryAnim
    },
  ]
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('Preventive')
  const services = allServices[activeTab]

  return (
    <section className="min-h-screen bg-background text-foreground px-6 sm:px-10 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Dental Services</h1>
        <p className="text-muted-foreground text-lg">
          From routine exams to transformative cosmetic treatments, Nivali Dental Clinic offers a full spectrum of care tailored to your needs.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center gap-6 mb-12"
      >
        {Object.keys(allServices).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-accent'
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-card text-card-foreground rounded-2xl p-6 shadow hover:shadow-xl border border-border transition-all hover:ring-2 hover:ring-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="mb-4 flex justify-center"
              style={{ maxHeight: '64px' }}>
              <LottieBlock animationData={service.animation} className="h-16 w-16" />
            </div>
            <div className="text-primary mb-2">{service.icon()}</div>
            <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Not sure where to start?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Book a consultation and let our experienced team guide you to the right treatment plan for your dental goals.
        </p>
        <Link href="/contact">
          <Button size="lg">Book a Consultation</Button>
        </Link>
      </motion.div>
    </section>
  )
}
