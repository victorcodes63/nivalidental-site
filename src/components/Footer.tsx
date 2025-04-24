'use client'

import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0b1f3a] via-[#0d2747] to-[#162e4f] text-gray-300 px-6 py-12 sm:px-10 sm:pt-16 sm:pb-10">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">

        {/* Clinic Info */}
        <div className="space-y-4">
          <h3 className="text-white text-base sm:text-lg font-semibold">Nivali Dental Clinic</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={28} className="mt-1" />
              <span>
                Suite 14 - Total Energies Ruaraka,<br className="sm:hidden" />
                opposite Safari Park Hotel, Thika Road
              </span>
            </div>
            <div className="flex items-start gap-2">
  <Clock size={16} className="mt-1 text-gray-400" />
  <div>
    <p>Mon - Fri: 8:00AM - 5:00PM</p>
    <p>Sat: 9:00AM - 1:00PM</p>
    <p>Sun: Closed</p>
  </div>
</div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <div>
                <a href="tel:+254718611236" className="block hover:underline">+254 718 611 236</a>
                <a href="tel:+254733947872" className="block hover:underline">+254 733 947 872</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:nivalidental@gmail.com" className="hover:underline">
                nivalidental@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-white text-base sm:text-lg font-semibold">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/services#preventive" className="hover:text-white">Preventive Dentistry</a></li>
            <li><a href="/services#cosmetic" className="hover:text-white">Cosmetic Dentistry</a></li>
            <li><a href="/services#emergency" className="hover:text-white">Emergency Care</a></li>
            <li><a href="/services#implants" className="hover:text-white">Implants & Surgery</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white text-base sm:text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Our Services</a></li>
            <li><a href="/contact" className="hover:text-white">Book a Consultation</a></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h4 className="text-white text-base sm:text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-2">Follow Us</h4>
            <div className="flex gap-4 text-white/60">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500 space-y-1">
        <p>&copy; {new Date().getFullYear()} Nivali Dental Clinic. All rights reserved.</p>
        <p>
          Built by{' '}
          <a href="https://raventechgroup.com" className="text-blue-400 hover:underline">
            Raven Tech Group
          </a>
        </p>
      </div>
    </footer>
  )
}
