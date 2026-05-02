import './Ambiance.css'

export default function Ambiance() {
  return (
    <section id="ambiance">
      <div className="container">
        <div className="ambiance-grid">
          <div className="ambiance-text reveal">
            <p className="section-label">L'adresse</p>
            <h2 className="section-title">Un coin de<br /><em>convivialité</em></h2>
            <div className="divider"><span className="divider-line" /><span className="divider-dot" /></div>
            <p>
              Niché au cœur du village de Sammeron, Le P'tit Sammeronnais vous accueille dans
              un cadre chaleureux et apaisant, où chaque plat est préparé avec des produits frais
              de qualité.
            </p>
            <p>
              Une cuisine authentique, un service attentionné, et une patronne dont le sourire
              fait partie de la recette — voilà ce qui rend cette adresse si unique.
            </p>
            <div className="features-list">
              {[
                'Produits frais & de saison',
                'Cadre accessible PMR',
                'Bar chaleureux, équipe anglophone',
                'Ambiance festive & familiale',
                '54 Rue de Metz, 77260 Sammeron',
              ].map((feat) => (
                <div className="feature-item" key={feat}>
                  <span className="feature-dash" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="visual-frame">
              <span className="badge">⭐ 4,7 / 5</span>
              <div className="vf-title">Cuisine maison</div>
              <div className="vf-sub">généreuse &amp; authentique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
