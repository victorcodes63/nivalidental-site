'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !(mobileMenuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX: useScrollScale() }}
      />

      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          'backdrop-blur-xl border-b border-white/20 dark:border-neutral-800/40 shadow-sm',
          scrolled ? 'bg-white/80 dark:bg-neutral-900/60 py-2' : 'bg-white/60 dark:bg-neutral-900/40 py-4'
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: scrolled ? 0.95 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className={cn(
                'font-semibold tracking-tight transition-all',
                scrolled ? 'text-base' : 'text-lg',
                'text-gray-900 dark:text-white'
              )}
            >
              Nivali Dental
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className={cn(
              pathname === '/' ? 'text-primary' : 'text-gray-700 dark:text-gray-300',
              'hover:text-primary transition')}>Home</Link>
            <Link href="/services" className={cn(
              pathname === '/services' ? 'text-primary' : 'text-gray-700 dark:text-gray-300',
              'hover:text-primary transition')}>What We Do</Link>
            <Link href="/about" className={cn(
              pathname === '/about' ? 'text-primary' : 'text-gray-700 dark:text-gray-300',
              'hover:text-primary transition')}>Who We Are</Link>

            <Link href="/contact">
              <span className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-all shadow-sm">
                Get in Touch
              </span>
            </Link>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-4 text-sm font-medium bg-white/90 dark:bg-neutral-900/90"
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={cn(pathname === '/' ? 'text-primary' : 'text-gray-700 dark:text-gray-300', 'hover:text-primary')}>Home</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={cn(pathname === '/services' ? 'text-primary' : 'text-gray-700 dark:text-gray-300', 'hover:text-primary')}>Services</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={cn(pathname === '/about' ? 'text-primary' : 'text-gray-700 dark:text-gray-300', 'hover:text-primary')}>About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-all shadow-sm">
                  Contact
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

function useScrollScale() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      setProgress(height ? scrolled / height : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return progress
}
