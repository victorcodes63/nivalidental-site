export default function ContactPage() {
    return (
      <main className="min-h-screen px-6 sm:px-10 md:px-20 py-20 bg-white dark:bg-neutral-950 transition-all">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
  
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Ngong Road, Nairobi</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Mon - Fri: 8AM - 5PM</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">Phone: +254 718 611 236</p>
            <p className="text-gray-700 dark:text-gray-300">Email: info@ravendental.co.ke</p>
          </div>
  
          <div>
            <iframe
              src="https://maps.google.com/maps?q=Ngong%20Road,%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    )
  }
  