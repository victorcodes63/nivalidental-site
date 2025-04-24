'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Smile, Brush, Stethoscope, Globe } from 'lucide-react'

const services = [
  {
    title: 'General Dentistry',
    icon: <Globe size={28} />,
    image: '/assets/general.jpg',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAGAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCbTvE8U9ncX8EUzJYyx5SRgN2Ttxx1HsaqX3xW0ePULmMaPPhZWA+52J96KKzW7NeiP//Z',
    description: `Routine exams, cleanings, fluoride treatments, and cavity fillings to keep your teeth and gums healthy. We focus on prevention to help you avoid expensive procedures down the line.`,
    whyUs: `Our experienced team uses gentle techniques and advanced tools to make your visits stress-free. We take the time to educate you and personalize every treatment plan.`,
  },
  {
    title: 'Orthodontics',
    icon: <Brush size={28} />,
    image: '/assets/ortho.jpg',
    description: `Customized braces and clear aligners to straighten teeth and correct bite issues for all ages. Improve both aesthetics and functionality with long-term results.`,
    whyUs: `We offer discreet, fast, and effective options including Invisalign® and ceramic braces. Our orthodontists provide consistent monitoring to ensure optimal progress.`,
  },
  {
    title: 'Smile Design',
    icon: <Smile size={28} />,
    image: '/assets/smile2.jpg',
    description: `Aesthetic-focused treatments like teeth whitening, bonding, and veneers tailored to elevate your smile and confidence. Ideal for special events or total makeovers.`,
    whyUs: `We use digital smile design technology to preview results before treatment begins. Every enhancement is crafted to suit your face shape, skin tone, and personality.`,
  },
  {
    title: 'Surgical Procedures',
    icon: <Stethoscope size={28} />,
    image: '/assets/surgery2.jpg',
    description: `Complex care including wisdom tooth removal, dental implants, and full-mouth reconstructions — performed with precision and comfort.`,
    whyUs: `Led by seasoned surgeons, our practice follows minimally invasive protocols with sedation options. Our recovery plans are designed for faster healing and less discomfort.`,
  },
]

export default function HomeServicesShowcase() {
  return (
    <section className="py-28 px-6 sm:px-10 md:px-16 bg-background text-foreground relative transition-colors">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-4"
        >
          Our Signature Services
        </motion.h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
          Explore how our comprehensive care transforms oral health into lifelong confidence.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-muted rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition group"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={450}
              placeholder="blur"
              blurDataURL={service.blur || '/assets/blur.jpg'}
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="pt-2 border-t border-border">
                <h4 className="text-sm font-medium uppercase text-muted mb-1 tracking-wide">Why Choose Us</h4>
                <p className="text-sm text-foreground/90">{service.whyUs}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-32 bg-gradient-to-r from-primary to-primary/80 text-white rounded-3xl shadow-2xl py-14 px-6 sm:px-10 md:px-16"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Perfect Smile Starts Here
          </h3>
          <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
            Book a consultation to experience personalized, compassionate, and expert dental care — right from your first visit.
          </p>
          <Link href="/services">
            <button className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
              View All Services
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
