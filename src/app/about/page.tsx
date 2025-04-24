'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false)

  const dentists = [
    {
      name: 'Dr. Michelle Wachira',
      image: '/assets/dentist2.jpg',
      why: 'I chose dentistry because I believe a confident smile can transform lives. Every patient’s happiness is my reward.',
      bio: 'Specialist in aesthetic and pediatric dentistry with over 10 years of experience.',
      profileUrl: '/team/michelle-achieng'
    },
    {
      name: 'Dr. Kevin Mwangi',
      image: '/assets/dentist1.jpg',
      why: 'Dentistry allows me to blend precision with compassion. I love helping people regain their confidence through their smile.',
      bio: 'Expert in oral surgery and implantology. Passionate about community outreach.',
      profileUrl: '/team/kevin-mwangi'
    },
    {
      name: 'Dr. Grace Njambi',
      image: '/assets/dentist3.jpg',
      why: 'For me, dentistry is about connection. I strive to make every patient feel heard, safe, and cared for.',
      bio: 'Focused on preventive care and anxiety-free dental experiences.',
      profileUrl: '/team/grace-otieno'
    }
  ]

  return (
    <div className="bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-blue-800 text-white py-24 px-6 sm:px-10 md:px-20 text-center bg-[length:200%_200%] animate-[gradientShift_20s_ease_infinite]">
  
  {/* Optional BG pattern */}
  <div className="absolute inset-0 z-0 bg-[url('/assets/hero-bg.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />

  <div className="relative z-10">
    <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-medium tracking-wide mb-3">
      <svg className="w-4 h-4 animate-pulse fill-current" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
      Kenya’s Premier Dental Clinic
    </span>

    <motion.h1
      className="text-4xl sm:text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Discover the Nivali Difference
    </motion.h1>

    <motion.p
      className="max-w-3xl mx-auto text-lg text-blue-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      We redefine dental care in Nairobi with a blend of high-tech expertise, family-friendly service, and a warm, welcoming environment that prioritizes your comfort and smile.
    </motion.p>

    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <a
        href="/contact"
        className="inline-block px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-full text-sm font-semibold transition shadow-lg"
      >
        Book Appointment
      </a>
    </motion.div>
  </div>
</section>


      {/* About Intro */}
      <section className="grid md:grid-cols-2 gap-10 px-6 sm:px-10 md:px-20 py-20 items-center">
        <div>
          <Image
            src="/assets/about-dentist.jpg"
            alt="Our team"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">A Team That Cares Like Family</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our compassionate staff brings years of experience and a gentle touch to every appointment. We take time to get to know our patients personally, and we tailor our care to each unique smile.
          </p>
        </div>
      </section>

      

      {/* Mission & Vision */}
      <section className="py-24 px-6 sm:px-10 md:px-20 bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide exceptional, affordable dental care that’s rooted in trust, empathy, and advanced clinical techniques. We strive to educate and empower every patient, creating a lifetime of confident smiles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become the most trusted dental clinic in Nairobi by setting the standard in care, hospitality, and innovation—making every visit memorable, every smile meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Dentists */}
<section className="py-20 px-6 sm:px-10 md:px-20">
  <h2 className="text-3xl font-bold text-center mb-12">Meet Our Dentists</h2>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {dentists.map((dentist, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className="text-center p-6 rounded-xl shadow transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1 bg-gradient-to-br from-sky-50 via-blue-100 to-sky-50 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 hover:shadow-2xl"
      >
        <Image
          src={dentist.image}
          alt={dentist.name}
          width={300}
          height={300}
          className="rounded-full mx-auto shadow-lg mb-4 object-cover hover:scale-105 transition-transform duration-500"
        />
        <motion.h4
          className="text-xl font-semibold mb-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {dentist.name}
        </motion.h4>
        <motion.p
          className="text-muted-foreground text-sm italic mb-2"
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.3 }}
        >
          &ldquo;{dentist.why}&rdquo;
        </motion.p>
        <p className="text-muted-foreground text-sm mb-3">{dentist.bio}</p>
        <Link
          href={dentist.profileUrl}
          className="text-primary font-medium text-sm hover:underline"
          aria-label={`View profile of ${dentist.name}`}
        >
          View Profile &rarr;
        </Link>
      </motion.div>
    ))}
  </div>
</section>


      <section id="testimonials" className="relative py-20">
  {/* Decorative Background Glow */}
  <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-blue-200/20 dark:bg-emerald-400/10 rounded-full blur-3xl opacity-70 z-0" />
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-100/20 dark:bg-blue-300/10 rounded-full blur-2xl opacity-50 z-0" />

  {/* Heading */}
  <h2 className="text-3xl font-bold text-center mb-16 relative z-10 text-primary">
    What Our Patients Say
  </h2>

  {/* Testimonial Carousel */}
  <div className="overflow-x-auto scrollbar-hide pb-2 -mx-4 sm:mx-0 relative z-10">
    <div className="flex gap-6 px-4 sm:px-0 w-max">
      {[
        {
          name: 'James K.',
          quote: 'The most gentle cleaning I’ve ever had. The staff was so welcoming and professional.',
          image: '/assets/patient1.jpg',
        },
        {
          name: 'Angela M.',
          quote: 'I’ve always feared dentists but Nivali changed that. I now look forward to my visits!',
          image: '/assets/patient2.jpg',
        },
        {
          name: 'Brian T.',
          quote: 'Fantastic service and care. Highly recommend their smile design treatments!',
          image: '/assets/patient3.jpg',
        },
      ].map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="relative min-w-[300px] sm:min-w-[340px] max-w-[90vw] bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg border border-border text-center hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
        >
          {/* Decorative quote icon */}
          <div className="absolute top-4 left-4 text-4xl text-primary/20 select-none pointer-events-none">“</div>

          {/* Avatar */}
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gradient-to-r from-primary to-emerald-500">
            <Image
              src={t.image}
              alt={t.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote */}
          <p className="italic text-muted-foreground mb-4 leading-relaxed z-10 relative">“{t.quote}”</p>

          {/* Name & Rating */}
          <div className="text-primary font-medium">{t.name}</div>
          <div className="flex justify-center text-yellow-400 mt-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>★</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Clinic Video Section with CTA Overlay */}
      <section className="py-24 px-6 sm:px-10 md:px-20 text-center bg-muted/10">
        <h2 className="text-3xl font-bold mb-6">🎥 Take a Look Inside</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the calm, modern atmosphere of Nivali Dental Clinic. Watch our short video tour below.
        </p>
        <div className="relative max-w-4xl mx-auto aspect-video cursor-pointer group" onClick={() => setShowModal(true)}>
          <Image
            src="/assets/hero.jpg"
            alt="Clinic video preview"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl group-hover:bg-black/60 transition">
            <PlayCircle size={72} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Modal with Animation */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-5xl aspect-video"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/SMaqX0ggiXU?autoplay=1"
                  title="Clinic Tour"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-lg"
                ></iframe>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-4 text-white text-2xl font-bold hover:scale-110 transition"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Call to Action */}
<motion.section
  className="py-20 px-6 sm:px-10 md:px-20 text-center bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
    Your Smile Deserves the Best
  </h2>
  <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
    Schedule a visit to experience dental care that&rsquo;s gentle, personal, and designed with you in mind.
  </p>
  <a
    href="/contact"
    className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
  >
    Book an Appointment
  </a>
</motion.section>
    </div>
  )
}
