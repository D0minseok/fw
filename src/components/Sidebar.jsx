import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'

function navLinkClass({ isActive }) {
  return `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
}

function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <NavLink to="/" className="sidebar__logo" end>
          💪 FW
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
    </>
  )
}

export default Sidebar
