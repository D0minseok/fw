import './Badge.css'

const DIFFICULTY_CLASS = {
  초급: 'badge--beginner',
  중급: 'badge--intermediate',
  고급: 'badge--advanced',
}

function Badge({ children, variant }) {
  const modifier = variant === 'difficulty' ? DIFFICULTY_CLASS[children] : 'badge--category'

  return <span className={`badge ${modifier}`}>{children}</span>
}

export default Badge
