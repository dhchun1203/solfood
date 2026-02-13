import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Allustration from '@/assets/hero/Allustration.png'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="home">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Illustration - opacity + scale */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: reducedMotion ? 0 : [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              y: reducedMotion
                ? { duration: 0 }
                : {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
            }}
          >
            <img
              src={Allustration}
              alt="아시아 음식 - 똠얌꿍, 팟타이 등"
              className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] object-contain"
            />
          </motion.div>

          {/* Right: Text + CTA */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-2xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.05]"
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

            <div className="mt-6 flex w-full flex-col flex-wrap items-stretch gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
              <motion.a
                href="#menu"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--brand-yellow)] px-6 py-3.5 min-h-[48px] text-sm font-semibold text-zinc-900 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover active:scale-[0.98] sm:w-auto"
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
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[var(--brand-yellow)] px-6 py-3.5 min-h-[48px] text-sm font-semibold text-zinc-900 transition-colors hover:bg-[var(--brand-yellow)]/10 active:scale-[0.98] sm:w-auto"
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
