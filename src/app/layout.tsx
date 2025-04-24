// ✅ layout.tsx (server component)
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Nivali Dental',
  description: 'Modern dental care with a smile',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="">{children}</main>  
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
