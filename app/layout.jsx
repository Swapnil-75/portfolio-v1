import './globals.css'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import ActiveSectionContextProvider from '../context/active-section-context'
import { ThemeProvider } from '../context/theme-provider'
import Starfield from '../components/Starfield'

export const metadata = {
  title: 'Swapnil Singh',
  description: 'Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`flex flex-col min-h-screen font-sans bg-white dark:bg-zinc-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionContextProvider>
            <Navbar />
            <div className='-z-50'>
              <Starfield />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}