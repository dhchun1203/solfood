import { motion } from 'framer-motion'
import { Star, Plus } from 'lucide-react'
import Reviews1Img from '@/assets/reviews/reviews1.png'
import Reviews2Img from '@/assets/reviews/reviews2.png'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

type ReviewItem = { id: string; name: string; avatar: string; text: string; stars: number }

const REVIEWS: ReviewItem[] = [
  { id: '1', name: '김지영', avatar: Reviews1Img, text: '정말 훌륭한 경험이었어요. 모든 요리가 완벽하게 조리되어 있고 풍미가 가득했습니다. 특히 인상 깊었던 것은 서비스였어요. 친절하고 세심한 스태프 덕분에 다시 찾고 싶은 식당입니다.', stars: 5 },
  { id: '2', name: '이준호', avatar: Reviews2Img, text: '아시아 음식을 별로 먹어본 적이 없었는데, 이곳에서 캄보디아 음식을 맛보고 완전히 반했습니다! 아시아 음식은 정말 맛있다는 걸 처음으로 느꼈어요.', stars: 4 },
]

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} className={i < count ? 'fill-[var(--brand-yellow)] text-[var(--brand-yellow)]' : 'fill-zinc-200 text-zinc-200'} strokeWidth={1.5} />
      ))}
      <span className="ml-2 text-xs text-zinc-700">{count}점</span>
    </div>
  )
}

function ReviewCard({ item, index }: { item: ReviewItem; index: number }) {
  return (
    <motion.div
      className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-zinc-100 bg-white p-5 shadow-card sm:p-6 md:p-8"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
    >
      <div className="flex items-center gap-4">
        <img src={item.avatar} alt={item.name} className="h-14 w-14 flex-shrink-0 rounded-2xl object-cover" draggable={false} />
        <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>
      </div>
      <p className="mt-6 flex-1 text-xs leading-relaxed text-zinc-700 sm:text-sm">{item.text}</p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.1, ease }}
      >
        <StarRating count={item.stars} />
      </motion.div>
    </motion.div>
  )
}

export function Review() {
  return (
    <Section id="review" alt>
      <Container>
        <SectionTitle>고객 후기</SectionTitle>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {REVIEWS.map((item, i) => (
            <ReviewCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <motion.a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-[var(--brand-yellow)]"
          whileHover={{ x: 2 }}
        >
          리뷰 작성하기
          <Plus size={18} strokeWidth={2} />
        </motion.a>
      </Container>
    </Section>
  )
}
