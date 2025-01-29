import React from 'react'
import './../../public/css/main.css'

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background text-white">

      <img src="./images/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center">
        <h2 data-aos="fade-up" data-aos-delay="100">PLAN. LAUNCH. GROW.</h2>
        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-get-started-first ms-3">Watch Video</a>
        </div>
      </div>

    </section>
  )
}

export default Hero