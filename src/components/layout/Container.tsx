import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 ${className}`.trim()}
    >
      {children}
    </div>
  )
}
