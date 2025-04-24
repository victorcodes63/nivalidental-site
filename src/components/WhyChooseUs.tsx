'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Smile, AlarmClock, HeartPulse } from 'lucide-react'

const highlights = [
  {
    title: 'Modern Equipment',
    description: 'We use inovative dental technology for accurate diagnostics and painless treatment.',
    icon: <ShieldCheck size={28} />,
  },
  {
    title: 'Experienced Team',
    description: 'Our dentists bring decades of combined experience and a passion for patient care.',
    icon: <HeartPulse size={28} />,
  },
  {
    title: 'Gentle Procedures',
    description: 'From cleanings to complex surgeries, we prioritize your comfort at every step.',
    icon: <Smile size={28} />,
  },
  {
    title: 'Emergency Support',
    description: 'Dental emergency? We’re here for you, — just give us a call.',
    icon: <AlarmClock size={28} />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 sm:px-10 md:px-16 bg-muted/50 text-foreground">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-primary mb-4"
        >
          Why Choose Nivali Dental?
        </motion.h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          We’re redefining dental care by combining world-class expertise with a personalized touch.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-background rounded-xl shadow-sm p-6 border border-border text-center hover:shadow-md transition"
          >
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
