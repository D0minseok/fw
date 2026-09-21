import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'
import './ExerciseCard.css'

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercises/${exercise.id}`} className="exercise-card">
      <span className="exercise-card__visual" aria-hidden="true">
        {exercise.visual.value}
      </span>
      <div className="exercise-card__body">
        <h3 className="exercise-card__name">{exercise.name}</h3>
        <div className="exercise-card__badges">
          <Badge variant="category">{exercise.category}</Badge>
          <Badge variant="difficulty">{exercise.difficulty}</Badge>
        </div>
        <p className="exercise-card__desc">{exercise.description}</p>
      </div>
    </Link>
  )
}

export default ExerciseCard
