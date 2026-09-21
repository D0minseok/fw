import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page">
      <h1>페이지를 찾을 수 없어요</h1>
      <p className="muted">요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/" className="button button--primary">
        홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFound
