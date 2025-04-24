'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const sectionLinks = [
  'General Dentistry', 'Orthodontics', 'Pediatric Dentistry', 'Smile Design',
  'Teeth Whitening', 'Dental Bonding', 'Emergency Care', 'Surgical Procedures', 'Dental Implants',
]

const testimonials = [
  { name: 'Angela M.', quote: 'Nivali exceeded every expectation. Professional, gentle, and truly world-class care.' },
  { name: 'Dr. Kevin O.', quote: 'As a doctor, I confidently say Nivali delivers care at the highest medical standard.' },
  { name: 'Sandra L.', quote: 'I used to fear dentists. Nivali changed everything. My smile looks amazing.' },
  { name: 'James K.', quote: 'I flew in from Mombasa just for their implants. That’s how worth it Nivali is.' },
  { name: 'Brian T.', quote: 'Exceptional service. The staff made me feel safe and informed every step of the way.' },
  { name: 'Joan W.', quote: 'My whitening results blew me away. I’ve never been so confident smiling.' },
]

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive evaluations, cleanings, X-rays, fluoride, and sealants — MOH approved.',
    image: '/assets/general_dentistry.jpg',
    tag: 'MOH Approved',
  },
  {
    title: 'Orthodontics',
    description: 'Braces, Invisalign®, cephalometrics, and digital occlusal treatment planning.',
    image: '/assets/orthodontics.jpg',
    tag: 'Popular',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Child-friendly preventive care: sealants, fluoride varnish, and interceptive orthodontics.',
    image: '/assets/pediatric_dental.jpg',
    tag: 'Child-Friendly',
  },
  {
    title: 'Smile Design',
    description: 'Digital simulations, laser gum contouring, and custom veneers tailored to your face.',
    image: '/assets/smile_design.jpg',
    tag: 'Top Rated',
  },
  {
    title: 'Teeth Whitening',
    description: 'Zoom® whitening, LED activation, and safe enamel-friendly bleaching methods.',
    image: '/assets/whitening.jpg',
    tag: 'Advanced Technology',
  },
  {
    title: 'Dental Bonding',
    description: 'Nanohybrid composite bonding to reshape teeth, close gaps, and restore aesthetics.',
    image: '/assets/bonding.jpg',
    tag: 'Express Service',
  },
  {
    title: 'Emergency Care',
    description: 'Urgent care for trauma, avulsions, pulpitis. Pulp caps, splints, and fast diagnostics.',
    image: '/assets/emergency.jpg',
    tag: 'Gentle Approach',
  },
  {
    title: 'Surgical Procedures',
    description: 'Wisdom tooth removal, apicoectomy, flap surgery — all under local or IV sedation.',
    image: '/assets/surgery.jpg',
    tag: 'Surgical Expertise',
  },
  {
    title: 'Dental Implants',
    description: 'CBCT-guided implant placement, bone grafts, and natural-looking CAD/CAM crowns.',
    image: '/assets/implants.jpg',
    tag: 'High Satisfaction',
  },
]

interface TestimonialItem {
  name: string
  quote: string
}

const TestimonialCarousel = ({ items }: { items: TestimonialItem[] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const container = scrollRef.current
    if (!container || container.scrollWidth <= container.clientWidth) return
    const interval = setInterval(() => {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full flex justify-center pt-20 pb-6">
      <div className="w-full max-w-6xl px-6">
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-primary mb-8">What Our Clients Say</h3>
        <div ref={scrollRef} className="flex justify-center gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
          {items.map((t, i) => (
            <div key={i} className="min-w-[300px] max-w-sm p-6 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex-shrink-0 transition-transform hover:scale-105">
              <p className="italic text-muted-foreground mb-4 leading-relaxed">“{t.quote}”</p>
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{t.name.charAt(0)}</div>
                <p className="font-semibold text-gray-800 dark:text-gray-100">{t.name}</p>
                <div className="flex gap-1">{Array.from({ length: 5 }).map((_, idx) => (<span key={idx} className="text-yellow-400">★</span>))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sectionLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'))
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  const colorClasses = [
    'bg-slate-100 text-slate-800', 'bg-gray-100 text-gray-800', 'bg-zinc-200 text-zinc-900',
    'bg-stone-200 text-stone-900', 'bg-neutral-200 text-neutral-800', 'bg-slate-200 text-slate-900',
    'bg-gray-200 text-gray-900', 'bg-blue-100 text-blue-900', 'bg-slate-300 text-slate-900',
  ]
  return (
    <nav className="flex justify-center mb-14">
      <div className="sticky top-6 z-50 flex flex-wrap justify-center px-6 py-4 gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-border shadow-md rounded-xl max-w-6xl w-full mx-auto">
        {sectionLinks.map((title, i) => {
          const id = title.toLowerCase().replace(/\s+/g, '-')
          const isActive = activeSection === id
          return (
            <a
              key={title}
              href={`#${id}`}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all border ${
                isActive ? 'bg-primary text-white border-primary shadow' : `${colorClasses[i % colorClasses.length]} border-transparent hover:ring-1 hover:ring-primary/40`
              }`}
            >
              {title}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default function ServicesPage() {
  const [query, setQuery] = useState('')
  const limitedTestimonials = testimonials.slice(0, 6)
  const filteredServices = useMemo(() => services.filter((s) => s.title.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <section className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 pb-20 bg-gradient-to-br from-[#F0F4F8] to-[#DCE4EC] dark:from-[#0F172A] dark:to-[#1E293B] text-foreground overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow focus:ring-2 focus:ring-primary"
          />
        </div>
        <StickyNav />
        <div className="space-y-28">
          {filteredServices.map((service, index) => (
            <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, '-')}> {/* Service block */}
              <motion.div
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="md:w-1/2 w-full max-h-[350px] aspect-[3/2] overflow-hidden rounded-2xl shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <Image src={service.image} alt={service.title} width={600} height={400} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary">{service.title}</h2>
                    {service.tag && <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-full font-medium">{service.tag}</span>}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>
              </motion.div>
              {(index + 1) % 3 === 0 && (index / 3) * 2 < limitedTestimonials.length && (
                <TestimonialCarousel
                  items={
                    limitedTestimonials.slice((index / 3) * 2, (index / 3) * 2 + 2).length === 1
                      ? [...limitedTestimonials.slice((index / 3) * 2, (index / 3) * 2 + 1), limitedTestimonials[0]]
                      : limitedTestimonials.slice((index / 3) * 2, (index / 3) * 2 + 2)
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
