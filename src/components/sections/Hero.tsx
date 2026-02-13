import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Allustration from '@/assets/hero/Allustration.png'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Illustration - opacity + scale */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={Allustration}
              alt="아시아 음식 - 똠얌꿍, 팟타이 등"
              className="w-full max-w-[520px] object-contain"
            />
          </motion.div>

          {/* Right: Text + CTA */}
          <div>
            <motion.h1
              className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.05]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              맛있는{' '}
              <span className="text-gradient-brand">음식</span>과 함께
              <br />
              <span className="text-gradient-brand">새로운</span> 경험을
              <br />
              만들어 보세요
            </motion.h1>

            <motion.p
              className="mt-6 max-w-md text-sm leading-relaxed text-zinc-600 lg:text-base"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              캄보디아를 비롯한 아시아 각국의 다양한 음식을 이곳에서 맛보실 수
              있으며, 합리적인 가격으로 최고의 맛을 선사하겠습니다.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--brand-yellow)] px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -1 }}
              >
                음식 주문
                <ShoppingCart size={20} strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--brand-yellow)] px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[var(--brand-yellow)]/10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -1 }}
              >
                자세히 보기
              </motion.a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
