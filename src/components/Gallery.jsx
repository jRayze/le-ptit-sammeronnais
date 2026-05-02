import { useState } from 'react'
import './Gallery.css'

/*
 * ──────────────────────────────────────────────────────
 * GALERIE — Comment ajouter vos photos Instagram :
 *
 * 1. Sur Instagram (mobile ou PC) :
 *    - Ouvre la photo → "..." → "Copier le lien"
 *    - Ou appui long sur la photo → "Enregistrer"
 *
 * 2. Place les fichiers dans :
 *    /public/gallery/
 *
 * 3. Mets à jour le tableau `photos` ci-dessous :
 *    { src: '/gallery/nom-du-fichier.jpg', alt: 'Description' }
 *
 * Formats acceptés : JPG, JPEG, PNG, WebP
 * Taille idéale   : 800×800px ou 1080×1080px (carré Instagram)
 * ──────────────────────────────────────────────────────
 */

const photos = [
  // ← Remplace les chemins par tes vraies photos :
  // { src: '/gallery/soiree-karaoké.jpg',   alt: 'Soirée karaoké' },
  // { src: '/gallery/raclette-friends.jpg', alt: 'Raclette entre amis' },
  // { src: '/gallery/cocktails.jpg',        alt: 'Cocktails maison' },
  // { src: '/gallery/plats.jpg',            alt: 'Nos plats du moment' },
  // { src: '/gallery/terrasse.jpg',         alt: 'La terrasse' },
  // { src: '/gallery/burger.jpg',           alt: 'Burger maison' },
  //
  // En attendant tes photos, des emplacements vides sont affichés :
  { src: null, alt: 'Ambiance du restaurant' },
  { src: null, alt: 'Nos plats' },
  { src: null, alt: 'Soirée festive' },
  { src: null, alt: 'Bar & cocktails' },
  { src: null, alt: 'Événement spécial' },
  { src: null, alt: 'Cuisine maison' },
]

function GalleryItem({ src, alt, index }) {
  const [errored, setErrored] = useState(false)
  const missing = !src || errored

  return (
    <div className={missing ? 'gallery-item placeholder' : 'gallery-item reveal'}>
      {missing ? (
        <div className="gallery-placeholder-inner">
          <span className="gallery-placeholder-icon">📷</span>
          <span className="gallery-placeholder-text">Photo à venir</span>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setErrored(true)}
          />
          <div className="gallery-overlay">
            <span>{alt}</span>
          </div>
        </>
      )}
    </div>
  )
}

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
            <GalleryItem key={i} index={i} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        <div className="gallery-cta reveal">
          <a
            href="https://www.instagram.com/le_ptit_sammeronnais/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            ↗ Voir toutes nos photos sur Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
