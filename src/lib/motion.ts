/** Global motion config - 미세 + 통일 */
export const motionConfig = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: 0.08,
  viewport: { once: true, amount: 0.3 },
}

/** prefers-reduced-motion 확인 */
export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** fade-up 기본 변형 */
export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

/** fade-up 미세 (y 작게) */
export const fadeUpSubtle = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}
