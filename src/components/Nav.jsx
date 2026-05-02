import { useState, useEffect } from 'react'
import logo from '/logo.jpg'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a href="#hero" className="nav-logo-wrap" onClick={close}>
        <img src={logo} alt="Le P'tit Sammeronnais" className="nav-logo-img" />
        <span className="nav-logo-text">
          Le P'tit<br />Sammeronnais
        </span>
      </a>

      <button
        className={menuOpen ? 'burger open' : 'burger'}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#ambiance" onClick={close}>L'adresse</a></li>
        <li><a href="#menu" onClick={close}>Notre carte</a></li>
        <li><a href="#events" onClick={close}>Événements</a></li>
        <li><a href="#galerie" onClick={close}>Galerie</a></li>
        <li><a href="#horaires" onClick={close}>Horaires</a></li>
        <li>
          <a
            href="https://www.choix-resto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={close}
          >
            Réserver
          </a>
        </li>
      </ul>
    </nav>
  )
}
