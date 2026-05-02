import './Events.css'

const events = [
  { num: '01', title: 'Live Music', desc: 'Des soirées musicales régulières pour une ambiance festive et conviviale.' },
  { num: '02', title: 'Soirées Karaoké', desc: 'Chantez vos tubes préférés dans une atmosphère détendue et bienveillante.' },
  { num: '03', title: 'Réveillons & Fêtes', desc: 'Nouvel An, anniversaires, soirées privées — on organise des moments inoubliables.' },
]

export default function Events() {
  return (
    <section id="events">
      <div className="container">
        <div className="reveal">
          <p className="section-label">La vie du resto</p>
          <h2 className="section-title">Événements<br /><em>&amp; animations</em></h2>
          <div className="divider"><span className="divider-line" /><span className="divider-dot" /></div>
        </div>

        <div className="events-grid">
          {events.map((ev) => (
            <div className="event-card reveal" key={ev.num}>
              <div className="event-num">{ev.num}</div>
              <div className="event-title">{ev.title}</div>
              <p className="event-desc">{ev.desc}</p>
            </div>
          ))}
        </div>

        <div className="events-cta reveal">
          <a
            href="https://www.facebook.com/PTITSAMMERONNAIS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Suivre nos actualités sur Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
