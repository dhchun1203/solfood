import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Bell, Menu } from 'lucide-react'
import SolfoodLogo from '@/assets/logo/Solfood.svg'
import { Container } from '@/components/layout/Container'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Service', href: '#service' },
  { label: 'Contact us', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? 'bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_0_0_rgba(255,255,255,0.6),0_8px_32px_-6px_rgba(0,0,0,0.08)]'
          : 'bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_1px_0_0_rgba(255,255,255,0.4)]'
      }`}
    >
      <Container>
        <div className="grid h-[96px] md:h-[100px] grid-cols-[1fr_auto_1fr] items-center justify-between gap-4 md:grid-cols-[1fr_auto_1fr]">
          {/* Left: Logo */}
          <motion.a
            href="#home"
            className="flex items-center"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={SolfoodLogo}
              alt="Solfood"
              className="h-8 w-auto"
            />
          </motion.a>

          {/* Center: Navigation - 순차 페이드 */}
          <nav className="hidden items-center justify-center md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={item.href}
                    className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right: Icons + Login - 마지막 등장 */}
          <motion.div
            className="flex items-center justify-end gap-5 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.button
              type="button"
              className="rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Search"
              whileHover={{ scale: 1.05 }}
            >
              <Search size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              className="rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              aria-label="Cart"
              whileHover={{ scale: 1.05 }}
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              className="hidden rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:block"
              aria-label="Notifications"
              whileHover={{ scale: 1.05 }}
            >
              <Bell size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              className="ml-1 rounded-xl border border-[var(--brand-yellow)] bg-[var(--brand-yellow)]/5 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-[var(--brand-yellow)]/15"
              whileHover={{ y: -1 }}
            >
              Login
            </motion.button>
            <button
              type="button"
              className="rounded-xl p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden"
              aria-label="Menu"
            >
              <Menu size={20} className="text-zinc-900" strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </Container>
    </header>
  )
}
