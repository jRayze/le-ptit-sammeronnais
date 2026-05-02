import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Venez nous voir</p>
          <h2 className="section-title">Réservez<br /><em>votre table</em></h2>
          <div className="divider">
            <span className="divider-line" style={{ background: 'var(--warm-white)' }} />
            <span className="divider-dot" style={{ background: 'var(--warm-white)' }} />
          </div>
          <p className="contact-desc">
            Une envie de bonne table, une occasion à fêter, ou simplement l'envie de passer
            un moment chaleureux ? On vous attend.
          </p>
        </div>

        <div className="contact-grid reveal">
          <div className="contact-card">
            <div className="contact-card-label">Adresse</div>
            <div className="contact-card-value">
              54 Rue de Metz<br />77260 Sammeron
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Ouverture</div>
            <div className="contact-card-value">
              Lun–Mer : midi<br />
              Mar–Jeu : midi &amp; soir<br />
              Ven–Sam : midi &amp; soir<br />
              Dim : fermé
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Avis clients</div>
            <div className="contact-card-value">
              4,7 / 5 Facebook<br />1 000+ abonnés
            </div>
          </div>
        </div>

        <div className="reveal" style={{ textAlign: 'center' }}>
          <a
            href="https://www.choix-resto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-white"
          >
            Réserver en ligne
          </a>
        </div>
      </div>
    </section>
  )
}
