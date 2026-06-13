import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation'

export default function Counter({ target, suffix = '+', label }) {
  const { ref, visible } = useScrollAnimation()
  const count = useCounter(target, 2000, visible)

  return (
    <div ref={ref} className="stat-item">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}
