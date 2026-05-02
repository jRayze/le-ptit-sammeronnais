import './Horaires.css'

const hours = [
  { day: 'Lundi', time: null },
  { day: 'Mardi', time: '12h–14h · 19h–22h' },
  { day: 'Mercredi', time: '12h–14h · 19h–22h' },
  { day: 'Jeudi', time: '12h–14h · 19h–23h' },
  { day: 'Vendredi', time: '12h–14h · 19h–00h' },
  { day: 'Samedi', time: '12h–14h · 19h–00h' },
  { day: 'Dimanche', time: null },
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
                {hours.map(({ day, time }) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td className={time ? '' : 'closed'}>{time ?? 'Fermé'}</td>
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
              <div className="info-block-label">Réservation en ligne</div>
              <div className="info-block-value">
                <a href="https://www.choix-resto.com" target="_blank" rel="noopener noreferrer">
                  www.choix-resto.com
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">Facebook</div>
              <div className="info-block-value">
                <a
                  href="https://www.facebook.com/PTITSAMMERONNAIS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Le P'tit Sammeronnais
                </a>
              </div>
            </div>

            <div className="map-placeholder reveal">
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
