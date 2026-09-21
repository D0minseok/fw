import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const SECTION_LINKS = [
  { id: 'guide', label: '초보자 가이드' },
  { id: 'routines', label: '목표별 루틴' },
  { id: 'poses', label: '자세 학습' },
  { id: 'safety', label: '안전 안내' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (sectionId) => (event) => {
    event.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/')
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          FW<span className="navbar__logo-accent">, First Workout</span>
        </Link>

        <nav className="navbar__links">
          {SECTION_LINKS.map((item) => (
            <button key={item.id} type="button" className="navbar__link" onClick={goToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <Link to="/exercises" className="navbar__link" onClick={() => setMenuOpen(false)}>
            운동 지식
          </Link>
        </nav>

        <div className="navbar__cta">
          <button type="button" className="navbar__login">
            로그인
          </button>
          <Link to="/exercises" className="navbar__start">
            무료 시작하기
          </Link>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {SECTION_LINKS.map((item) => (
            <button key={item.id} type="button" className="navbar__mobile-link" onClick={goToSection(item.id)}>
              {item.label}
            </button>
          ))}
          <Link to="/exercises" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
            운동 지식
          </Link>
          <Link to="/exercises" className="navbar__start navbar__mobile-start" onClick={() => setMenuOpen(false)}>
            무료 시작하기
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
