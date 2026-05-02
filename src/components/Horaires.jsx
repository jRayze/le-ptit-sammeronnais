import './Horaires.css'

const hours = [
  { days: 'Lundi – Mercredi', time: '12:00 – 14:00', closed: false },
  { days: 'Mardi – Jeudi',    time: '12:00 – 14:30  ·  19:00 – 21:30', closed: false },
  { days: 'Vendredi – Samedi',time: '12:00 – 14:30  ·  19:00 – 22:30', closed: false },
  { days: 'Dimanche',         time: 'Fermé', closed: true },
]

export default function Horaires() {
  return (
    <section id="horaires">
      <div className="container">
        <div className="hours-layout">
          <div className="reveal">
            <p className="section-label">Horaires d'ouverture</p>
            <h2 className="section-title">Quand<br /><em>nous trouver</em></h2>
            <div className="divider"><span className="divider-line" /><span className="divider-dot" /></div>
            <table className="hours-table">
              <tbody>
                {hours.map(({ days, time, closed }) => (
                  <tr key={days}>
                    <td>{days}</td>
                    <td className={closed ? 'closed' : ''}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="reveal">
            <p className="section-label">Infos pratiques</p>
            <h2 className="section-title">Nous<br /><em>trouver</em></h2>
            <div className="divider"><span className="divider-line" /><span className="divider-dot" /></div>

            <div className="info-block">
              <div className="info-block-label">Adresse</div>
              <div className="info-block-value">54 Rue de Metz, 77260 Sammeron</div>
            </div>
            <div className="info-block">
              <div className="info-block-label">Téléphone</div>
              <div className="info-block-value">
                <a href="tel:+33160321657">01 60 32 16 57</a>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">Réservation en ligne</div>
              <div className="info-block-value">
                <a href="https://www.choix-resto.com" target="_blank" rel="noopener noreferrer">
                  www.choix-resto.com
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">Réseaux sociaux</div>
              <div className="info-block-value social-links">
                <a href="https://www.facebook.com/PTITSAMMERONNAIS" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <span className="social-sep">·</span>
                <a href="https://www.instagram.com/le_ptit_sammeronnais/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>

            <div className="map-placeholder">
              <a
                href="https://maps.google.com/?q=54+Rue+de+Metz+77260+Sammeron"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ marginTop: '1.5rem', display: 'inline-block' }}
              >
                ↗ Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
