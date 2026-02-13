import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

const viewport = { once: true, amount: 0.3 }
const ease = [0.22, 1, 0.36, 1] as const

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center ${className}`.trim()}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, ease }}
    >
      <h2 className="font-gamja text-2xl text-zinc-900 md:text-3xl lg:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
        <span className="h-0.5 w-3 rounded-full bg-zinc-300" />
        <span
          className="h-1 w-20 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #F0C64C 0%, #f59e0b 50%, #F0C64C 100%)',
          }}
        />
        <span className="h-0.5 w-3 rounded-full bg-zinc-300" />
      </div>
    </motion.div>
  )
}
