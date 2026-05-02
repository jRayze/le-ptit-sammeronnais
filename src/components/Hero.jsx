import logo from '/logo.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <img className="hero-logo" src={logo} alt="Le P'tit Sammeronnais" />
        <p className="hero-tag">Restaurant &amp; Bar · Sammeron, Seine-et-Marne</p>
        <div className="hero-divider">
          <span className="hero-divider-line" />
          <span className="hero-divider-dot" />
          <span className="hero-divider-line" />
        </div>
        <h1>
          <span className="script">Le P'tit</span>
          <br />
          Sammeronnais
        </h1>
        <p className="hero-sub">
          Cuisine généreuse &amp; conviviale<br />
          au cœur de la Brie
        </p>
        <div className="hero-btns">
          <a
            href="https://www.choix-resto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Réserver une table
          </a>
          <a href="#menu" className="btn-ghost">
            Découvrir la carte
          </a>
        </div>
        <div className="hero-rating">
          <span className="stars">★★★★★</span>
          <span>4,7 · 1 000+ abonnés Facebook</span>
        </div>
      </div>
    </section>
  )
}
