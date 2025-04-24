'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Jane M.', location: 'Westlands, Nairobi', rating: 5, quote: 'The team at Nivali Dental made me feel at ease immediately. Professional, gentle, and efficient — I actually enjoyed my visit!' },
  { name: 'Kevin O.', location: 'Ngong Road', rating: 4, quote: 'Got my braces adjusted here. The staff are friendly and the space is super clean. Definitely recommend for orthodontics in Nairobi.' },
  { name: 'Shiro K.', location: 'Lavington', rating: 5, quote: 'I had an emergency on a Sunday and they came through! Excellent service and aftercare. So grateful.' },
  { name: 'Brian T.', location: 'South B', rating: 4, quote: 'Cleanings here are fast and painless. Love their tech and attention to detail.' },
  { name: 'Zippy W.', location: 'Kilimani', rating: 5, quote: 'I went for a whitening treatment and came out with a totally new smile. Amazing work and vibe!' },
  { name: 'David K.', location: 'Rongai', rating: 5, quote: 'Was nervous about my root canal but they explained everything and made it totally pain-free.' },
  { name: 'Nancy A.', location: 'Karen', rating: 4, quote: 'Beautiful clinic, warm staff, and excellent follow-up after my procedure. Highly recommend them.' },
  { name: 'Wycliffe N.', location: 'Thika Road', rating: 5, quote: 'Took my daughter for a pediatric check — gentle and super friendly! She’s no longer scared of the dentist.' },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && scrollRef.current) {
        const container = scrollRef.current
        const scrollAmount = 320
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })

        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' })
          }, 1000)
        }
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [paused])

  return (
    <section className="py-24 px-6 sm:px-10 md:px-16 bg-background text-foreground relative">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-primary mb-4"
        >
          What Our Patients Say
        </motion.h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Real smiles. Real stories. See why Nairobi trusts Nivali Dental.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="text-xs text-muted-foreground text-center mb-4 sm:hidden">
        <span className="animate-pulse">← Swipe to view more →</span>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
        role="list"
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="min-w-[300px] max-w-xs sm:max-w-sm bg-muted rounded-2xl p-6 snap-start border border-border shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className="flex items-center gap-1 mb-2 text-yellow-400">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-base text-foreground/90 italic mb-4">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center uppercase">
                {item.name.charAt(0)}
              </div>
              <div className="text-sm">
                <p className="font-semibold">{item.name}</p>
                <p className="text-muted-foreground">{item.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots / fake pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(Math.ceil(testimonials.length / 2))].map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground transition"
          />
        ))}
      </div>
    </section>
  )
}
