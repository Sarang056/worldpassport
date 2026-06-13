import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function AnimatedSection({ children, className = '', direction = 'left', delay = 0 }) {
  const { ref, visible } = useScrollAnimation()

  const directionMap = {
    left: 'translateX(-60px)',
    right: 'translateX(60px)',
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
  }

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? 'translate(0)' : directionMap[direction],
        opacity: visible ? 1 : 0,
        transition: `transform 0.7s ease ${delay}ms, opacity 0.7s ease ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  )
}
