import logo from '/logo.jpg'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Le P'tit Sammeronnais" className="footer-logo-img" />
      <div className="footer-info">
        <strong>Le P'tit Sammeronnais</strong>
        <br />
        54 Rue de Metz · 77260 Sammeron
        <br />
        Mar–Sam : midi &amp; soir
      </div>
      <ul className="footer-links">
        <li>
          <a
            href="https://www.facebook.com/PTITSAMMERONNAIS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.choix-resto.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Réserver
          </a>
        </li>
        <li>
          <a
            href="https://maps.google.com/?q=54+Rue+de+Metz+77260+Sammeron"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maps
          </a>
        </li>
      </ul>
    </footer>
  )
}
