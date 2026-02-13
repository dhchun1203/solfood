import { useState } from 'react'
import { motion } from 'framer-motion'
import SolfoodLarge from '@/assets/logo/Solfood.svg'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

export function StayInTouch() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <Section id="contact">
      <Container>
        <SectionTitle>연락처</SectionTitle>

        <motion.div
          className="mx-auto mt-10 sm:mt-14 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[600px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-card sm:p-8 md:text-left md:p-10"
          >
            <motion.h3
              className="mb-8 text-center text-2xl font-bold text-zinc-900 sm:mb-9 md:text-3xl"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.06, ease }}
            >
              채널 구독하기
            </motion.h3>

            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.12, ease }}
            >
              <label htmlFor="stay-email" className="mb-4 block text-xl font-semibold text-zinc-900 md:text-2xl">
                이메일
              </label>
              <input
                id="stay-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
                className="h-14 min-h-[48px] w-full rounded-xl border border-zinc-200 px-5 text-base text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)] focus:ring-opacity-20"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="h-14 min-h-[48px] w-full rounded-xl bg-[var(--brand-yellow)] text-base font-semibold text-zinc-900 shadow-card transition hover:brightness-95 hover:shadow-card-hover active:scale-[0.99]"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              whileHover={{ y: -1 }}
            >
              구독하기
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center lg:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <img
            src={SolfoodLarge}
            alt="Solfood"
            className="h-auto w-full max-w-[200px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[440px]"
            draggable={false}
          />
        </motion.div>
      </Container>
    </Section>
  )
}
