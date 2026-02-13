import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, Bell, Menu, X } from 'lucide-react'
import SolfoodLogo from '@/assets/logo/Solfood.svg'
import { Container } from '@/components/layout/Container'

const navItems = [
  { label: '인기 메뉴', href: '#menu' },
  { label: '특별 할인', href: '#offer' },
  { label: '매장 안내', href: '#place' },
  { label: '고객 후기', href: '#review' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        scrolled
          ? 'bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_1px_0_0_rgba(255,255,255,0.6),0_8px_32px_-6px_rgba(0,0,0,0.08)]'
          : 'bg-white/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_1px_0_0_rgba(255,255,255,0.4)]'
      }`}
    >
      <Container className="relative">
        <div className="flex h-14 min-h-[56px] items-center justify-between gap-4 sm:h-20 md:h-[100px]">
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
              className="h-12 w-auto sm:h-14"
            />
          </motion.a>

          {/* Center: Navigation - 데스크톱에서만 */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
            <ul className="flex flex-nowrap items-center gap-2 lg:gap-4">
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
                    className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-[var(--brand-yellow)]/15 hover:text-zinc-900"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right: Icons + Hamburger (모바일) / Nav + Icons (데스크톱) */}
          <motion.div
            className="ml-auto flex items-center gap-1 sm:gap-3 md:gap-6"
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
              className="hidden rounded-xl p-2.5 min-w-[44px] min-h-[44px] items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:flex"
              aria-label="Search"
              whileHover={{ scale: 1.05 }}
            >
              <Search size={20} strokeWidth={1.5} />
            </motion.button>
            <motion.button
              type="button"
              className="hidden rounded-xl p-2.5 min-w-[44px] min-h-[44px] items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:flex"
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
              className="ml-1 hidden rounded-full bg-[var(--brand-yellow)] px-5 py-2.5 min-h-[44px] text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:shadow-md hover:brightness-105 md:inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              로그인
            </motion.button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-xl p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-100 md:hidden"
              aria-label="메뉴 열기"
              aria-expanded={menuOpen}
            >
              <Menu size={22} className="text-zinc-900" strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Mobile side menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] min-h-screen w-[min(320px,85vw)] flex-col bg-white shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-14 min-h-[56px] flex-shrink-0 items-center justify-between border-b border-zinc-100 px-5 pt-[env(safe-area-inset-top)] sm:h-20">
                <img src={SolfoodLogo} alt="Solfood" className="h-7 w-auto" />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-zinc-600 transition-colors hover:bg-zinc-100"
                  aria-label="메뉴 닫기"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.03, duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center rounded-xl px-4 py-4 text-base font-medium text-zinc-800 transition-colors hover:bg-[var(--brand-yellow)]/10 hover:text-zinc-900 active:bg-[var(--brand-yellow)]/15"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 border-t border-zinc-100 pt-6">
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-4 text-base font-medium text-zinc-700 transition-colors active:bg-zinc-100"
                  >
                    <Search size={20} strokeWidth={1.5} />
                    검색
                  </a>
                  <a
                    href="#menu"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-4 text-base font-medium text-zinc-700 transition-colors active:bg-zinc-100"
                  >
                    <ShoppingCart size={20} strokeWidth={1.5} />
                    장바구니
                  </a>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="mt-2 flex items-center justify-center rounded-xl border-2 border-[var(--brand-yellow)] bg-[var(--brand-yellow)]/10 py-4 text-base font-semibold text-zinc-900 transition-colors active:bg-[var(--brand-yellow)]/20"
                  >
                    로그인
                  </button>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
