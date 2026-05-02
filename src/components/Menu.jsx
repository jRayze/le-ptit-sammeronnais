import './Menu.css'

const items = [
  { num: '01', title: 'Entrées & Salades', desc: 'Des entrées fraîches et généreuses pour démarrer votre repas du bon pied.' },
  { num: '02', title: 'Viandes & Poissons', desc: 'Entrecôte classique ou Black Angus, poissons du marché — du frais, toujours.' },
  { num: '03', title: 'Pâtes & Raclette', desc: 'Linguines aux crevettes, raclette conviviale… des plats qui réconfortent.' },
  { num: '04', title: 'Le Burger Maison', desc: 'Le fameux burger du P\'tit Sammeronnais — une institution parmi nos habitués.' },
  { num: '05', title: 'Fondue Asiatique', desc: 'Une nouveauté originale : plongez dans une expérience culinaire unique entre amis.' },
  { num: '06', title: 'Desserts & Formule', desc: 'Parfaits maison et douceurs pour finir en beauté, formule midi disponible.' },
]

export default function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Notre carte</p>
          <h2 className="section-title">Des saveurs pour<br /><em>tous les goûts</em></h2>
          <div className="divider">
            <span className="divider-line" style={{ background: 'var(--warm-white)' }} />
            <span className="divider-dot" style={{ background: 'var(--warm-white)' }} />
          </div>
        </div>
        <div className="menu-grid">
          {items.map((item) => (
            <div className="menu-card reveal" key={item.num}>
              <div className="menu-card-num">{item.num}</div>
              <div className="menu-card-title">{item.title}</div>
              <p className="menu-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
