import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function navLinkClass({ isActive }) {
  return `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar__logo" end>
        💪
      </NavLink>
      <nav className="sidebar__nav">
        <NavLink to="/exercises" className={navLinkClass}>
          <span className="sidebar__icon" aria-hidden="true">
            🏋️
          </span>
          <span className="sidebar__label">운동</span>
        </NavLink>
        <NavLink to="/products" className={navLinkClass}>
          <span className="sidebar__icon" aria-hidden="true">
            🛍️
          </span>
          <span className="sidebar__label">용품</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
