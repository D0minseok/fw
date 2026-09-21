import { Link } from 'react-router-dom'
import ExerciseCard from '../components/ExerciseCard.jsx'
import { exercises } from '../data/exercises.js'
import './Home.css'

const featured = exercises.filter((exercise) => exercise.difficulty === '초급').slice(0, 3)

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

      <section className="steps">
        <h2 className="section-title">이렇게 시작해보세요</h2>
        <ol className="steps__list">
          <li>
            <span className="steps__number">1</span>
            <div>
              <h3>내 몸에 맞는 운동 찾기</h3>
              <p className="muted">부위별·난이도별로 운동을 둘러보고 오늘 할 운동을 골라보세요.</p>
            </div>
          </li>
          <li>
            <span className="steps__number">2</span>
            <div>
              <h3>정확한 자세로 따라하기</h3>
              <p className="muted">동작 순서와 초보자 팁을 확인하며 천천히 익혀보세요.</p>
            </div>
          </li>
          <li>
            <span className="steps__number">3</span>
            <div>
              <h3>필요한 용품 준비하기</h3>
              <p className="muted">운동에 도움이 되는 용품을 큐레이션으로 확인해보세요.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="featured">
        <h2 className="section-title">초급자 추천 운동</h2>
        <div className="card-grid">
          {featured.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
