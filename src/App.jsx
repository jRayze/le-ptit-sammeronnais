import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ambiance from './components/Ambiance'
import Menu from './components/Menu'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Horaires from './components/Horaires'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ambiance />
        <Menu />
        <Events />
        <Gallery />
        <Horaires />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
