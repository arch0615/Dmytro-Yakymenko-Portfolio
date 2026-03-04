import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Summary from './components/Summary'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import GalaxyBackground from './components/GalaxyBackground'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      setShowScrollTop(window.scrollY > 300)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <GalaxyBackground />
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-tabs">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <section id="home" className="page-section">
          <Home onScrollTo={scrollToSection} />
        </section>
        <section id="summary" className="page-section">
          <Summary />
        </section>
        <section id="portfolio" className="page-section">
          <Portfolio />
        </section>
        <section id="education" className="page-section">
          <Education />
        </section>
        <section id="experience" className="page-section">
          <Experience />
        </section>
      </main>
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
