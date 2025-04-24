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

interface Testimonial {
  name: string;
  quote: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

const TestimonialCarousel = ({ items }: { items: Testimonial[] }) => {
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
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
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
    'bg-slate-100 text-slate-800',
    'bg-gray-100 text-gray-800',
    'bg-zinc-200 text-zinc-900',
    'bg-stone-200 text-stone-900',
    'bg-neutral-200 text-neutral-800',
    'bg-slate-200 text-slate-900',
    'bg-gray-200 text-gray-900',
    'bg-blue-100 text-blue-900',
    'bg-slate-300 text-slate-900',
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
                isActive
                  ? 'bg-primary text-white border-primary shadow'
                  : `${colorClasses[i % colorClasses.length]} border-transparent hover:ring-1 hover:ring-primary/40`
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
  const limitedTestimonials = testimonials.slice(0, 6)

  const services: Service[] = useMemo(() => [
    {
      title: 'General Dentistry',
      description: 'Our General Dentistry service includes comprehensive oral evaluations, prophylaxis, diagnostic digital X-rays, and periodontal screening. We focus on early detection of dental caries and gingivitis, and deliver tailored oral hygiene plans, fluoride treatments and sealants. Our team is ISO Certified and MOH Approved, ensuring the highest standards of care.',
      image: '/assets/general_dentistry.jpg',
      tag: 'MOH Approved',
    },
    {
      title: 'Orthodontics',
      description: 'We offer fixed orthodontic appliances, Invisalign® aligners, and retainers to correct malocclusions such as crowding, overbites, and crossbites. Treatments include cephalometric tracing, digital orthodontic impressions, and periodic occlusal adjustments.',
      image: '/assets/orthodontics.jpg',
      tag: 'Popular',
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Our Pediatric Dentistry provides preventive and restorative care tailored to children. Services include fluoride varnish, pit and fissure sealants, interceptive orthodontics, and behavior management techniques in a child-friendly setting.',
      image: '/assets/pediatric_dental.jpg',
      tag: 'Child-Friendly',
    },
    {
      title: 'Smile Design',
      description: 'Smile Design integrates digital smile simulation, gingival contouring with diode lasers, and the use of E-max and zirconia veneers. Our aesthetic dentistry approach is minimally invasive and customized to facial proportions.',
      image: '/assets/smile_design.jpg',
      tag: 'Top Rated',
    },
    {
      title: 'Teeth Whitening',
      description: 'We utilize in-office bleaching systems such as Zoom® and LED-activated whitening, alongside dentist-prescribed take-home carbamide peroxide gels. Each session includes gingival isolation and enamel-safe protocols.',
      image: '/assets/whitening.jpg',
      tag: 'Advanced Technology',
    },
    {
      title: 'Dental Bonding',
      description: 'Our composite bonding procedures restore aesthetics using nanohybrid resin, acid etching, and precision layering techniques. It is ideal for diastema closure, incisal edge repair, and enamel contouring.',
      image: '/assets/bonding.jpg',
      tag: 'Express Service',
    },
    {
      title: 'Emergency Care',
      description: 'Emergency services address acute dental trauma, pulpitis, and avulsions. We provide pulp capping, splinting, and urgent endodontic therapy. Onsite digital radiography supports rapid diagnosis and intervention.',
      image: '/assets/emergency.jpg',
      tag: 'Gentle Approach',
    },
    {
      title: 'Surgical Procedures',
      description: 'We perform minor oral surgery including third molar extractions, apicoectomies, and periodontal flap surgeries using piezoelectric surgical units and sterile protocols under local or IV sedation.',
      image: '/assets/surgery.jpg',
      tag: 'Surgical Expertise',
    },
    {
      title: 'Dental Implants',
      description: 'Dental implantology services feature CBCT-guided placement, bone grafting, sinus lifts, and the use of titanium or zirconia implants. Final prosthetics are CAD/CAM-fabricated for precise occlusion and natural esthetics.',
      image: '/assets/implants.jpg',
      tag: 'High Satisfaction',
    }
  ], [])

  const filteredServices = useMemo(() => services, [services])

  return (
    <section className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-24 pb-20 bg-gradient-to-br from-[#F0F4F8] to-[#DCE4EC] dark:from-[#0F172A] dark:to-[#1E293B] text-foreground overflow-hidden">
      {/* Hero */}
      <section className="relative text-center px-6 py-28 sm:py-32 bg-[url('/assets/hero.jpg')] bg-cover bg-center bg-no-repeat text-foreground overflow-hidden rounded-2xl shadow-xl mb-20 max-w-none w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/75 dark:from-black/60 dark:to-slate-900/80 z-0 backdrop-blur-sm" />
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-emerald-200/30 dark:bg-emerald-400/10 rounded-full blur-3xl opacity-70 z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/20 dark:bg-blue-300/10 rounded-full blur-3xl opacity-50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-sky-500 to-emerald-400 dark:from-white dark:to-emerald-400 animate-[gradientShift_8s_ease-in-out_infinite] mb-5">
              Elevating Dental Experiences
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              At Nivali Dental Clinic, your smile is our craft. 
              Experience care that’s precise, personalized, and always centered around you.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow hover:bg-primary/90 transition">
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <StickyNav />
        <div className="space-y-28">
          {filteredServices.map((service, index) => (
            <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, '-')}>
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

        {/* Contact CTA */}
        <section className="mt-32 px-6 py-24 bg-gradient-to-br from-primary to-emerald-700 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 text-white dark:text-white rounded-3xl shadow-2xl text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              Let’s Build Your Best Smile
            </motion.h2>
            <motion.p className="text-lg sm:text-xl mb-8 leading-relaxed text-white/90 dark:text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              Book a consultation with Nivali Dental Clinic and experience precision care, gentle service, and stunning results — all under one roof.
            </motion.p>
            <form className="max-w-2xl mx-auto space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" name="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 dark:border-slate-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-400 outline-none" required />
                <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 dark:border-slate-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-400 outline-none" required />
              </div>
              <textarea name="message" rows={4} placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 text-black dark:text-white border border-gray-300 dark:border-slate-700 placeholder:text-gray-500 dark:placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-400 outline-none" required />
              <button type="submit" className="mt-2 inline-block px-8 py-3 bg-white text-primary dark:bg-emerald-600 dark:text-white rounded-full font-semibold hover:opacity-90 transition shadow-md">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </section>
  )
}
