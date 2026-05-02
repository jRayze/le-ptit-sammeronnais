import './Gallery.css'

/*
 * GALERIE – Pour ajouter vos propres photos :
 *
 * 1. Placez vos images dans le dossier /public/gallery/
 *    Exemple : /public/gallery/photo1.jpg, photo2.jpg, etc.
 *
 * 2. Remplacez les entrées dans le tableau `photos` ci-dessous :
 *    { src: '/gallery/photo1.jpg', alt: 'Description de la photo' }
 *
 * 3. Les photos Facebook peuvent être téléchargées depuis :
 *    https://www.facebook.com/PTITSAMMERONNAIS
 *    (clic droit → Enregistrer l'image sous)
 *
 * Taille recommandée : environ 800×600px, format JPG ou WebP
 */
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75',
    alt: 'Ambiance chaleureuse du restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=75',
    alt: 'Plats généreux et savoureux',
  },
  {
    src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=75',
    alt: 'Soirée conviviale entre amis',
  },
  {
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=75',
    alt: 'Bar chaleureux',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=75',
    alt: 'Cuisine généreuse',
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=75',
    alt: 'Moments festifs',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75',
    alt: 'Salle du restaurant',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=75',
    alt: 'Burgers maison',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=75',
    alt: 'Animations et événements',
  },
]

export default function Gallery() {
  return (
    <section id="galerie">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Nos moments</p>
          <h2 className="section-title">La <em>galerie</em></h2>
          <div className="divider"><span className="divider-line" /><span className="divider-dot" /></div>
          <p className="gallery-intro">
            Ambiance, plats, événements — retrouvez la vie du P'tit Sammeronnais en images.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <div className="gallery-item reveal" key={i}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-overlay">
                <span>{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta reveal">
          <a
            href="https://www.facebook.com/PTITSAMMERONNAIS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            ↗ Voir toutes les photos sur Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
