import { useMemo, useState } from 'react'
import ExerciseCard from '../components/ExerciseCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { exercises } from '../data/exercises.js'
import { EXERCISE_CATEGORIES, DIFFICULTIES } from '../data/constants.js'
import './ExercisesList.css'

function ExercisesList() {
  const [category, setCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(null)

  const filtered = useMemo(
    () =>
      exercises.filter(
        (exercise) =>
          (category === null || exercise.category === category) &&
          (difficulty === null || exercise.difficulty === difficulty),
      ),
    [category, difficulty],
  )

  return (
    <div className="page">
      <h1>운동 종목 둘러보기</h1>
      <p className="muted">부위와 난이도를 선택해서 나에게 맞는 운동을 찾아보세요.</p>

      <div className="exercises-filters">
        <FilterBar label="부위" options={EXERCISE_CATEGORIES} activeValue={category} onChange={setCategory} />
        <FilterBar label="난이도" options={DIFFICULTIES} activeValue={difficulty} onChange={setDifficulty} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState message="선택한 조건에 맞는 운동이 없습니다. 다른 조건을 선택해보세요." />
      ) : (
        <div className="card-grid">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ExercisesList
