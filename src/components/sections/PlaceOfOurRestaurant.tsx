import { motion } from 'framer-motion'
import Place1Img from '@/assets/place/place1.png'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

export function PlaceOfOurRestaurant() {
  return (
    <Section id="place">
      <Container>
        <SectionTitle>매장 안내</SectionTitle>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-[0.9fr_1fr] xl:mt-20">
          <motion.div
            className="mx-auto max-w-md text-center lg:mx-0 lg:justify-self-end lg:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease }}
          >
            <h3 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl md:text-4xl">
              쾌적하고 편안한 공간
            </h3>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-zinc-600 lg:text-sm">
              사랑하는 고객님께 최고의 서비스와 맛있는 음식을 선사합니다
            </p>
          </motion.div>

          <motion.div
            className="group relative mx-auto flex w-full max-w-[320px] sm:max-w-[380px] justify-center overflow-visible lg:max-w-[420px] lg:justify-end"
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <div
              className="relative z-10 w-full rounded-2xl transition-shadow group-hover:[box-shadow:0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.04)] lg:max-w-[420px]"
              style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.45), 0 16px 32px -10px rgba(0,0,0,0.35)' }}
            >
              <img
                src={Place1Img}
                alt="쾌적하고 편안한 매장 인테리어"
                className="w-full rounded-2xl object-cover"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
