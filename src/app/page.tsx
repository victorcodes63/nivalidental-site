'use client'

import Image from 'next/image'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import AppointmentCTA from '@/components/AppointmentCTA'
import FAQ from '@/components/FAQ'
import NewsletterCTA from '@/components/NewsletterCTA'

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground transition-colors">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Overview */}
        <section id="services">
          <Services />
        </section>

        {/* 3. Why Choose Us / Clinic Highlights */}
        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* 4. Appointment CTA */}
        <section id="appointment">
          <AppointmentCTA />
        </section>

        {/* 5. FAQ */}
        <section id="faq">
          <FAQ />
        </section>

        {/* 6. Testimonials */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* 7. Newsletter */}
        <section id="newsletter">
          <NewsletterCTA />
        </section>
      </main>

      {/* 🌐 Floating WhatsApp Button */}
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
    </>
  )
}
