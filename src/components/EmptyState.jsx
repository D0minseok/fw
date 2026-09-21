import './EmptyState.css'

function EmptyState({ message = '조건에 맞는 결과가 없습니다.' }) {
  return (
    <div className="empty-state">
      <p>{message}</p>
    </div>
  )
}

export default EmptyState
