'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarClock } from 'lucide-react'

// Today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0]

export default function AppointmentCTA() {
  return (
    <section className="py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-r from-primary to-primary/80 text-white transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mb-2 shadow-md">
            <CalendarClock size={28} />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Book Your Appointment Today
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          No long waits. Flexible scheduling. A healthier, brighter smile starts now.
        </p>

        {/* CTA Button */}
        <Link href={`/book-appointment?date=${today}`}>
          <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:scale-105 transition-transform duration-300 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
            Book for {today}
          </button>
        </Link>
      </motion.div>
    </section>
  )
}
