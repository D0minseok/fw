import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <p className="hero__eyebrow">운동을 처음 시작하는 분들을 위한</p>
        <h1>FW, First Workout</h1>
        <p className="hero__desc">
          어떤 운동을 어떻게 해야 할지 막막하셨다면, FW에서 기본 운동법과 필요한 용품을 하나씩 알아가 보세요.
        </p>
        <div className="hero__actions">
          <Link to="/exercises" className="button button--primary">
            운동 배우기
          </Link>
          <Link to="/products" className="button button--secondary">
            용품 알아보기
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
