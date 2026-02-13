import { motion } from 'framer-motion'
import SelectFoodImg from '@/assets/order/SelectFood.png'
import CustomizationImg from '@/assets/order/Customization.png'
import PlacementImg from '@/assets/order/Placement.png'
import PickupImg from '@/assets/order/Pickup.png'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

type StepCard = {
  title: string
  desc: string
  img: string
}

const STEPS: StepCard[] = [
  { title: '음식 선택', desc: '주문하고 싶은 음식의 종류를 선택합니다', img: SelectFoodImg },
  { title: '맞춤 설정', desc: '추가 재료, 수정 사항 또는 선호도를 지정할 수 있습니다', img: CustomizationImg },
  { title: '주문하기', desc: '장바구니에 담고 연락처를 입력하여 온라인으로 주문할 수 있습니다', img: PlacementImg },
  { title: '배달/픽업', desc: '주문 확정 메시지 또는 이메일을 받으며, 예상 배달 또는 픽업 시간이 안내됩니다', img: PickupImg },
]

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

function OrderStepCard({ title, desc, img, index }: StepCard & { index: number }) {
  return (
    <motion.div
      className="group min-h-[440px] overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay: index * 0.1, ease }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex h-[240px] items-center justify-center p-6">
        <motion.img
          src={img}
          alt={title}
          className="max-h-[200px] w-auto object-contain"
          draggable={false}
          whileHover={{ scale: 1.02 }}
        />
      </div>
      <div className="px-6 pb-8 text-center">
        <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-zinc-600">{desc}</p>
      </div>
    </motion.div>
  )
}

export function HowYouCanOrder() {
  return (
    <Section id="order" alt>
      <Container>
        <SectionTitle>주문 방법</SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <OrderStepCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
