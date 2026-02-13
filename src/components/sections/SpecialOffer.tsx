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

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: Visual card - 레이어 순차 등장 */}
          <motion.div
            className="relative mx-auto h-[364px] w-[364px] md:h-[424px] md:w-[424px] lg:h-[464px] lg:w-[464px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            {/* 1) Shadow - 먼저 */}
            <motion.div
              className="absolute left-6 top-6 h-[340px] w-[340px] rounded-2xl bg-[#B0B0B0] blur-[12px] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px]"
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            />
            {/* 2) Olive - 다음 */}
            <motion.div
              className="absolute left-0 top-0 flex h-[340px] w-[340px] items-center justify-center overflow-hidden rounded-2xl bg-[#6F7A6A] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px]"
              aria-hidden
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
          </motion.div>

          {/* Right: Text - stagger */}
          <div className="flex flex-col justify-center">
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
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-[var(--brand-yellow)] px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-card transition-all hover:brightness-95 hover:shadow-card-hover"
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
