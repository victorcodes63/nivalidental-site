'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance providers in Kenya. You can also pay via M-PESA or card at the clinic.',
  },
  {
    question: 'Do I need an appointment or can I walk in?',
    answer: 'Walk-ins are welcome, but we highly recommend booking in advance to minimize wait times.',
  },
  {
    question: 'Do you offer pediatric dental care?',
    answer: 'Yes, our team is trained to work with children of all ages. We make dental visits fun and comfortable for your little ones.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are conveniently located in Kilimani, Nairobi — off Ngong Road, with easy parking and access.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Absolutely. For dental emergencies, call us directly. We aim to provide same-day care whenever possible.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-6 sm:px-10 md:px-16 bg-muted/50 text-foreground">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-primary mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Have questions? We’ve got answers to help you feel confident about your care.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-xl bg-background"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-base font-medium"
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-sm sm:text-base text-muted-foreground"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
