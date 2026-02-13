import { type ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  /** true이면 밝은 회색 배경 (트렌디한 섹션 구분용) */
  alt?: boolean
}

export function Section({ children, className = '', id, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${alt ? 'bg-white' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
