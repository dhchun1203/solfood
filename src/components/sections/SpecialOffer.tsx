import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Offers1Img from '@/assets/offers/offers1.png'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

export function SpecialOffer() {
  return (
    <Section id="offer" alt>
      <Container>
        <SectionTitle>특별 할인</SectionTitle>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: Visual card - 카드(220px) 기준 그리드 셀 중앙 정렬 */}
          <motion.div
            className="flex w-full items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div className="relative h-[220px] w-[220px] min-[480px]:h-[280px] min-[480px]:w-[280px] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]">
              {/* Shadow layer */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.45), 0 16px 32px -10px rgba(0,0,0,0.35)' }}
                aria-hidden
              />
              {/* Olive card */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-[#6F7A6A]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.08, ease }}
              >
              {/* 3) Food - 마지막 */}
              <motion.img
                src={Offers1Img}
                alt="캄보디아 카레 50% 할인"
                className="w-[72%] max-w-[300px] object-contain drop-shadow-md"
                draggable={false}
                initial={{ opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.16, ease }}
              />
            </motion.div>
            </div>
          </motion.div>

          {/* Right: Text - stagger */}
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <motion.h3
              className="text-2xl font-extrabold leading-tight text-zinc-900 md:text-3xl lg:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease }}
            >
              카레 <span className="text-gradient-brand">50%</span> 할인
            </motion.h3>
            <motion.p
              className="mt-6 max-w-md text-xs leading-relaxed text-zinc-600 lg:text-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              캄보디아 음식 50% 할인 혜택을 드립니다. 모두가 사랑하는 맛있는 캄보디아 음식을 맛보세요.
            </motion.p>
            <motion.a
              href="#menu"
              className="mt-9 inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-[var(--brand-yellow)] px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-card transition-all hover:brightness-95 hover:shadow-card-hover"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              whileHover={{ y: -1 }}
            >
              지금 주문하기
              <ShoppingCart size={20} strokeWidth={2} />
            </motion.a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
