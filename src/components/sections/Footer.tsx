import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SolfoodLogo from '@/assets/logo/Solfood.svg'
import FooterCard1 from '@/assets/footer/footer_card1.png'
import FooterCard2 from '@/assets/footer/footer_card2.png'
import FooterCard3 from '@/assets/footer/footer_card3.png'
import FooterSns1 from '@/assets/footer/footer_sns1.png'
import FooterSns2 from '@/assets/footer/footer_sns2.png'
import FooterSns3 from '@/assets/footer/footer_sns3.png'
import { Container } from '@/components/layout/Container'

const PAYMENT_ICONS = [FooterCard1, FooterCard2, FooterCard3]
const SNS_ICONS = [FooterSns1, FooterSns2, FooterSns3]

const viewport = { once: true, amount: 0.2 }
const ease = [0.22, 1, 0.36, 1] as const

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-900 pt-12 pb-8 sm:pt-16 md:pt-24 md:pb-10">
      {/* Subtle decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(240,198,76,0.15) 0%, transparent 50%)',
        }}
      />

      <Container>
        <motion.div
          className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
        >
          {/* Brand column - wider */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block">
              <img src={SolfoodLogo} alt="Solfood" className="mb-6 w-[140px] sm:w-[160px] brightness-0 invert opacity-95" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              맛있는 음식과 새로운 경험을 선사합니다.
            </p>
            <div className="mt-8">
              <span className="mb-3 block text-xs font-medium uppercase tracking-wider text-zinc-500">결제 수단</span>
              <div className="flex gap-3">
                {PAYMENT_ICONS.map((img, i) => (
                  <motion.div
                    key={i}
                    className="flex h-10 w-12 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <img key={i} src={img} alt="" aria-hidden className="h-5 object-contain" draggable={false} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">바로가기</h3>
            <nav className="flex flex-col gap-4">
              <a
                href="#faq"
                className="text-sm text-zinc-300 transition-colors hover:text-[var(--brand-yellow)]"
              >
                자주 묻는 질문
              </a>
              <a
                href="#contact"
                className="text-sm text-zinc-300 transition-colors hover:text-[var(--brand-yellow)]"
              >
                문의하기
              </a>
            </nav>
          </div>

          {/* Contact / Social */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">소셜</h3>
            <div className="flex gap-3">
              {SNS_ICONS.map((img, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm transition-colors hover:bg-[var(--brand-yellow)] hover:bg-opacity-20"
                  aria-label="소셜 링크"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <img src={img} alt="" aria-hidden className="h-5 w-5 object-contain" draggable={false} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">위치</h3>
            <div className="flex gap-4">
              <MapPin size={20} className="mt-0.5 flex-shrink-0 text-[var(--brand-yellow)]" />
              <p className="text-sm leading-relaxed text-zinc-400">
                서울특별시 강남구 테헤란로 123
                <br />
                (역삼동, 솔푸드빌딩 1층)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="relative mt-12 flex justify-center border-t border-zinc-800 pt-8 md:mt-16 md:pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.4, delay: 0.2, ease }}
        >
          <p className="text-xs text-zinc-500">© Solfood · Powered by SolDEV</p>
        </motion.div>
      </Container>
    </footer>
  )
}
