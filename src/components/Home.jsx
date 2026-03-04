import React from 'react'
import './Home.css'

function Home({ onScrollTo }) {
  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Software Developer</h1>
          <p className="hero-subtitle">React, Next, PHP, Python, FastAPI, React Native, Flutter</p>
          <div className="hero-description">
            <p>
              Hi, I'm Dmytro Yakymenko. I build scalable web and mobile applications from concept to production
              using React, Next.js, PHP, Python, and FastAPI. With 8+ years of experience
              delivering reliable, high-performance systems.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onScrollTo && onScrollTo('portfolio')}>
              View My Work
            </button>
            <a
              href="/Dmytro-Yakymenko.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="banner-container">
            <img
              src="/me.jpg"
              alt="Dmytro Yakymenko - Software Developer"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
