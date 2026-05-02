import { useState } from 'react'
import './Menu.css'

const categories = [
  {
    id: 'entrees',
    label: 'Entrées',
    items: [
      { name: 'Poêlée de la mer',        desc: 'Saint-Jacques, sauce corail et poireaux' },
      { name: 'Ardoise de foie gras',     desc: 'Foie gras maison, servi avec ses accompagnements' },
      { name: 'Carpaccio de saumon fumé', desc: 'Finement tranché, câpres et citron' },
      { name: 'Œuf meurette',             desc: 'Œuf poché, lardons, champignons, sauce vin rouge' },
      { name: 'Avocat cocktail',          desc: 'Avocat frais et crevettes, sauce cocktail maison' },
      { name: 'Planche finger food',      desc: 'Nems, accras de morue, beignets crabe/crevettes, oignons rings — au choix' },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    items: [
      { name: 'La Sammeronnaise',         desc: 'Salade signature : Brie de Meaux, jambon cru, œuf poché' },
      { name: 'Tagliatelles carbonara',   desc: 'Recette italienne revisitée à la sammeronnaise' },
      { name: 'Linguines aux gambas',     desc: 'Gambas fraîches en sauce crémeuse' },
      { name: 'Rigatonis au Bœuf Angus',  desc: 'Bœuf Angus irlandais, sauce maison' },
      { name: 'Carpaccio Bœuf Angus',     desc: '150 g de bœuf Angus irlandais, frites ou salade, sauce au choix' },
      { name: 'Raclette Morbier',         desc: 'Pour 2 ou 3 personnes — fromage Morbier, charcuteries, pommes de terre' },
      { name: 'Ravioles aux cèpes',       desc: 'Sauce foie gras' },
      { name: 'Légumes grillés plancha',  desc: 'Courgettes, aubergines, poivrons, carottes et oignons' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'La Sphère Surprise',       desc: 'La spécialité du P\'tit Sammeronnais — à découvrir !' },
      { name: 'Café gourmand',            desc: '5 mini-desserts au choix du chef, servi avec un expresso' },
      { name: 'Pavlova aux fruits frais', desc: 'Meringue légère, chantilly et fruits de saison' },
      { name: 'Crème brûlée',            desc: 'Recette classique, caramel croustillant maison' },
      { name: 'Banane flambée',          desc: 'Flambée au Calvados, boule de glace vanille' },
      { name: 'Cœur coulant chocolat',   desc: 'Fondant au chocolat noir, glace vanille maison' },
      { name: 'Tarte citron meringuée',  desc: 'Lemon curd maison, meringue italienne' },
      { name: 'Charlotte du moment',     desc: 'Selon inspiration du chef' },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    items: [
      { name: 'Cocktails maison',       desc: 'Mojito, Pornstar Martini, Piña Colada, Cosmopolitan, Apérol Spritz…' },
      { name: 'Mocktails',              desc: 'Virgin Mojito, Sunrise, Piña Colada — toute la fête sans alcool' },
      { name: 'Bières pression',        desc: 'Goudale blonde & Thor blonde en pression' },
      { name: 'Cave & Vins',            desc: 'Sélection de vins rouges, blancs et rosés — ardoise au bar' },
      { name: 'Champagne',              desc: 'Fallet Dart Grande Sélection Brut — coupe ou bouteille' },
      { name: 'Rhum arrangé maison',    desc: 'Préparation maison, recette secrète du bar' },
      { name: 'Cafés & Chauds',         desc: 'Expresso, Cappuccino, Caramel Macchiato, Irish Coffee…' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('entrees')
  const current = categories.find((c) => c.id === active)

  return (
    <section id="menu">
      <div className="container">
        <div className="reveal">
          <p className="section-label">Notre carte</p>
          <h2 className="section-title">Des saveurs pour<br /><em>tous les goûts</em></h2>
          <div className="divider">
            <span className="divider-line" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="divider-dot" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>

        {/* Onglets de catégorie */}
        <div className="menu-tabs reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={cat.id === active ? 'menu-tab active' : 'menu-tab'}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Liste des plats */}
        <div className="menu-items" key={active}>
          {current.items.map((item, i) => (
            <div className="menu-item" key={i} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="menu-item-name">{item.name}</div>
              <div className="menu-item-dots" aria-hidden="true" />
              <div className="menu-item-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="menu-cta reveal">
          <p className="menu-cta-note">Carte complète disponible sur place et en ligne</p>
          <a
            href="https://choix-resto.com/Customer/GetRestaurantView?restaurantId=14"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-white"
          >
            Voir la carte &amp; réserver
          </a>
        </div>
      </div>
    </section>
  )
}
