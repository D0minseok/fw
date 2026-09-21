import './FilterBar.css'

function FilterBar({ label, options, activeValue, onChange, allLabel = '전체' }) {
  return (
    <div className="filter-bar">
      {label && <span className="filter-bar__label">{label}</span>}
      <div className="filter-bar__options">
        <button
          type="button"
          className={`filter-bar__option ${activeValue === null ? 'filter-bar__option--active' : ''}`}
          onClick={() => onChange(null)}
        >
          {allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-bar__option ${activeValue === option ? 'filter-bar__option--active' : ''}`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
