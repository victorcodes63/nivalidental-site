'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Banner for Contact Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-blue-800 text-white py-24 px-6 sm:px-10 md:px-20 text-center bg-[length:200%_200%] animate-[gradientShift_20s_ease_infinite]">
        <div className="absolute inset-0 z-0 bg-[url('/assets/hero-bg.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-medium tracking-wide mb-3">
            <svg className="w-4 h-4 animate-pulse fill-current" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            We’re here for you
          </span>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Reach Out Anytime
          </motion.h1>
          <motion.p
  className="max-w-3xl mx-auto text-lg text-blue-100"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  Whether you have a question, need guidance, or want to speak to a dentist — we&rsquo;re just a call, message, or form away.
</motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#contact-form"
              className="inline-block px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-full text-sm font-semibold transition shadow-lg"
            >
              Send Us a Message
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="relative min-h-screen px-6 sm:px-10 md:px-20 py-24 bg-gradient-to-br from-[#eaf4ff] via-white to-[#f0faff] dark:from-neutral-800 dark:via-neutral-900 dark:to-black text-foreground">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question, want to book an appointment, or need emergency care? We’re here to help.
          </p>
        </motion.div>

        <form className="max-w-2xl mx-auto grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input name="name" onChange={handleChange} type="text" placeholder="Full Name" className="px-4 py-3 rounded-lg border bg-background border-border focus:ring-2 focus:ring-primary outline-none" />
            <input name="email" onChange={handleChange} type="email" placeholder="Email Address" className="px-4 py-3 rounded-lg border bg-background border-border focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <input name="subject" onChange={handleChange} type="text" placeholder="Subject" className="px-4 py-3 rounded-lg border bg-background border-border focus:ring-2 focus:ring-primary outline-none" />
          <textarea name="message" onChange={handleChange} rows={5} placeholder="Your message..." className="px-4 py-3 rounded-lg border bg-background border-border focus:ring-2 focus:ring-primary outline-none" />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition w-full sm:w-max"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-20 text-muted-foreground text-sm">
          Or call us directly on: <strong className="text-primary">+254 718 611 236 or 0733 947 872</strong>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10 text-sm text-muted-foreground max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Phone className="text-primary" size={20} />
            <span>+254 718 611 236 / 0733 947 872</span>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-primary" size={20} />
            <span>nivalidental@gmail.com</span>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary" size={20} />
            <span>Suite F14 - Total Energies, Ruaraka, Opposite Safari Park Hotel, Thika Road</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold mb-2">⏰ Business Hours</h2>
          <p>Mon - Fri: 8:00AM - 5:00PM</p>
          <p>Sat: 9:00AM - 1:00PM</p>
          <p>Sun: Closed</p>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
            <span className="animate-bounce text-primary">📍</span>
            Visit Our Clinic
          </h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe
              title="Nivali Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.780659057193!2d36.876866899066215!3d-1.2357804686490377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f150465fc8607%3A0xf7b984f30a5c3fc!2sTotalEnergies%20Ruaraka%20service%20station!5e0!3m2!1sen!2ske!4v1745391499646!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <div className="fixed bottom-6 right-6 z-50">
          <span className="absolute inset-0 w-14 h-14 rounded-full animate-ping bg-green-500 opacity-30" />
          <a
            href="https://wa.me/254718611236"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-14 h-14 flex items-center justify-center bg-white border border-green-500 rounded-full shadow-lg hover:bg-green-50 dark:hover:bg-green-100 transition"
            aria-label="Chat with us on WhatsApp"
          >
            <Image
              src="/assets/whatsapp-icon.png"
              alt="WhatsApp"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
        </div>
      </section>
    </>
  )
}
