'use client'

import { motion } from 'framer-motion'

export default function NewsletterCTA() {
  return (
    <section className="bg-muted/40 py-20 px-6 sm:px-10 md:px-16 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
          Stay Informed. Stay Smiling.
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Join our mailing list to get dental care tips, offers, and health updates from Nivali.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center mt-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-2/3 px-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  )
}
