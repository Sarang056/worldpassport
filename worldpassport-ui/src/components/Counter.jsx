import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation'

export default function Counter({ target, suffix = '+', label, desc, variant }) {
  const { ref, visible } = useScrollAnimation()
  const count = useCounter(target, 2000, visible)

  if (variant === 'tubik') {
    return (
      <div ref={ref} className="stat-tubik-item">
        <div className="sti-number">
          <span className="sti-count">{count}</span>
          <span className="sti-suffix">{suffix}</span>
        </div>
        <div className="sti-text">
          <strong>{label}</strong>
          {desc && <span>{desc}</span>}
        </div>
        <div className="sti-line" />
      </div>
    )
  }

  return (
    <div ref={ref} className="stat-item">
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}
