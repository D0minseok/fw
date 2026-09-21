import { Link, useParams } from 'react-router-dom'
import Badge from '../components/Badge.jsx'
import { exercises } from '../data/exercises.js'
import { products } from '../data/products.js'
import NotFound from './NotFound.jsx'
import './ExerciseDetail.css'

function ExerciseDetail() {
  const { id } = useParams()
  const exercise = exercises.find((item) => item.id === id)

  if (!exercise) {
    return <NotFound />
  }

  const relatedProducts = products.filter((product) => exercise.relatedProductIds.includes(product.id))

  return (
    <div className="page exercise-detail">
      <Link to="/exercises" className="back-link">
        ← 운동 목록으로
      </Link>

      <div className="exercise-detail__header">
        <span className="exercise-detail__visual" aria-hidden="true">
          {exercise.visual.value}
        </span>
        <div>
          <h1>{exercise.name}</h1>
          <div className="exercise-detail__badges">
            <Badge variant="category">{exercise.category}</Badge>
            <Badge variant="difficulty">{exercise.difficulty}</Badge>
          </div>
          <p className="muted">{exercise.description}</p>
        </div>
      </div>

      <section className="exercise-detail__section">
        <h2 className="section-title">주요 타겟 부위</h2>
        <p>
          {exercise.targetMuscles.join(', ')} · 준비물: {exercise.equipment}
        </p>
      </section>

      <section className="exercise-detail__section">
        <h2 className="section-title">운동 방법</h2>
        <ol className="exercise-detail__steps">
          {exercise.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {exercise.tips.length > 0 && (
        <section className="exercise-detail__callout">
          <h2 className="section-title">초보자 팁</h2>
          <ul>
            {exercise.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      {exercise.commonMistakes.length > 0 && (
        <section className="exercise-detail__section">
          <h2 className="section-title">흔한 실수</h2>
          <ul>
            {exercise.commonMistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="exercise-detail__section">
          <h2 className="section-title">관련 용품</h2>
          <ul className="exercise-detail__related">
            {relatedProducts.map((product) => (
              <li key={product.id}>
                <Link to="/products">
                  {product.visual.value} {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

export default ExerciseDetail
