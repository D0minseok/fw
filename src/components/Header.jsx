import { NavLink } from 'react-router-dom'
import './Header.css'

function navLinkClass({ isActive }) {
  return `header__link ${isActive ? 'header__link--active' : ''}`
}

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo" end>
          💪 FW
        </NavLink>
        <nav className="header__nav">
          <NavLink to="/exercises" className={navLinkClass}>
            운동
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            용품
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
