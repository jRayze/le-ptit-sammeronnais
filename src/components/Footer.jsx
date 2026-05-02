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
        <a href="tel:+33160321657" className="footer-tel">01 60 32 16 57</a>
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
            href="https://www.instagram.com/le_ptit_sammeronnais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
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
