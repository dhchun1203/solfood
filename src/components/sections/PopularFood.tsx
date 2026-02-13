import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Plus, SlidersHorizontal } from 'lucide-react'
import BaychhaImg from '@/assets/foods/Baychha.png'
import PapayaSaladImg from '@/assets/foods/papayaSalad.png'
import PorkSatayImg from '@/assets/foods/porkSatay_grilledPork.png'
import { Section } from '@/components/layout/Section'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { Container } from '@/components/layout/Container'

const CATEGORIES = ['전체', '국물', '음료', '매운맛', '전통', '단맛', '케이크']

type FoodItem = { id: string; title: string; desc: string; price: string; img: string }

const FOOD_ITEMS: FoodItem[] = [
  { id: '1', title: '새우 볶음밥', desc: '신선한 새우, 계란, 야채가 어우러진 향긋한 볶음밥', price: '2.30', img: BaychhaImg },
  { id: '2', title: '돼지고기 사테', desc: '땅콩 소스와 함께하는 부드러운 돼지고기 꼬치', price: '2.32', img: PorkSatayImg },
  { id: '3', title: '파파야 샐러드', desc: '라임과 고추가 듬뿍 들어간 신선한 청파파야 샐러드', price: '2.32', img: PapayaSaladImg },
  { id: '4', title: '돼지고기 사테', desc: '땅콩 소스와 함께하는 부드러운 돼지고기 꼬치', price: '2.32', img: PorkSatayImg },
  { id: '5', title: '새우 볶음밥', desc: '신선한 새우, 계란, 야채가 어우러진 향긋한 볶음밥', price: '2.30', img: BaychhaImg },
  { id: '6', title: '돼지고기 사테', desc: '땅콩 소스와 함께하는 부드러운 돼지고기 꼬치', price: '2.32', img: PorkSatayImg },
  { id: '7', title: '파파야 샐러드', desc: '라임과 고추가 듬뿍 들어간 신선한 청파파야 샐러드', price: '2.32', img: PapayaSaladImg },
  { id: '8', title: '돼지고기 사테', desc: '땅콩 소스와 함께하는 부드러운 돼지고기 꼬치', price: '2.32', img: PorkSatayImg },
]

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

function FoodCard({ item, index }: { item: FoodItem; index: number }) {
  const [isLiked, setIsLiked] = useState(false)
  const row = Math.floor(index / 4)
  const col = index % 4
  const staggerDelay = row * 0.12 + col * 0.06

  return (
    <motion.div
      className="group relative flex min-h-[380px] sm:min-h-[400px] lg:min-h-[440px] flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
      role="article"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay: staggerDelay, ease }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="relative flex h-[160px] flex-shrink-0 items-center justify-center p-4 sm:h-[200px] sm:p-6 md:h-[220px] lg:h-[240px]">
        <img
          src={item.img}
          alt={item.title}
          className="max-h-full w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          draggable={false}
        />
        <motion.button
          type="button"
          onClick={() => setIsLiked(!isLiked)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-100 bg-white/90 shadow-card text-zinc-500 backdrop-blur-sm transition-colors hover:text-red-500"
          aria-label={isLiked ? '즐겨찾기에서 제거' : '즐겨찾기 추가'}
          whileTap={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 0.2 }}
        >
          <Heart size={20} strokeWidth={2} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
        </motion.button>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-4 text-center sm:text-left">
        <h3 className="min-h-[2rem] truncate text-sm font-semibold text-zinc-900 sm:text-base">{item.title}</h3>
        <p className="mt-3 min-h-[2.5rem] line-clamp-2 text-xs leading-relaxed text-zinc-600">{item.desc}</p>
        <div className="mt-5 flex items-center justify-center gap-4 sm:justify-between">
          <span className="text-base font-semibold text-zinc-900">{item.price} 달러</span>
          <motion.button
            type="button"
            className="flex h-11 w-11 min-w-[44px] min-h-[44px] flex-shrink-0 items-center justify-center rounded-xl bg-[var(--brand-yellow)] text-zinc-900 transition hover:brightness-95 active:scale-95"
            aria-label={`${item.title} 장바구니에 담기`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={22} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function PopularFood() {
  const [activeCategory, setActiveCategory] = useState('전체')

  return (
    <Section id="menu">
      <Container>
        <SectionTitle>인기 메뉴</SectionTitle>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <div className="w-full sm:w-fit max-w-full rounded-2xl border border-zinc-200 bg-white px-3 py-3 shadow-card">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-4 md:flex-nowrap">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                    activeCategory === cat ? 'bg-[var(--brand-yellow)] text-zinc-900' : 'text-zinc-600 hover:bg-zinc-100'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center self-end rounded-xl border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 sm:self-auto"
            aria-label="필터"
          >
            <SlidersHorizontal size={20} strokeWidth={1.5} />
          </button>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FOOD_ITEMS.map((item, idx) => (
            <FoodCard key={`${item.id}-${idx}`} item={item} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
