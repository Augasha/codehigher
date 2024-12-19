import React from 'react'

function HomePage() {
  return (

            <div className="app-container">

      <section className="hero">
        <div className="hero-content">
          <h1>Transforming Your Digital Vision into Reality</h1>
          <p>Affordable custom solutions for small and mid-sized businesses, with expertise in web development, software solutions, and cybersecurity.</p>
          <div className="cta-buttons">
            <button className="cta-button">Get Started</button>
            <button className="cta-button">Learn More About Our Services</button>
            <button className="cta-button">Schedule a Free Consultation</button>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <p>We specialize in crafting innovative solutions for businesses, including web and app development, cybersecurity, and digital transformation consulting.</p>
        <div className="service-cards">
          <div className="service-card">
            <img src="web-development-icon.png" alt="Web Development" />
            <h3>Web Development</h3>
            <p>Custom web solutions tailored to your business needs.</p>
          </div>
          <div className="service-card">
            <img src="software-development-icon.png" alt="Software Development" />
            <h3>Software Development</h3>
            <p>Innovative software designed to streamline your operations.</p>
          </div>
          <div className="service-card">
            <img src="cybersecurity-icon.png" alt="Cybersecurity" />
            <h3>Cybersecurity</h3>
            <p>Protect your business with top-notch cybersecurity services.</p>
          </div>
          <div className="service-card">
            <img src="digital-transformation-icon.png" alt="Digital Transformation" />
            <h3>Digital Transformation</h3>
            <p>Helping businesses thrive in a digital-first world.</p>
          </div>
        </div>
      </section>


      <section className="value-proposition">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Affordable custom solutions tailored for SMBs</li>
          <li>Experienced team of web developers, software engineers, and cybersecurity experts</li>
          <li>A one-stop shop for all your digital transformation needs</li>
        </ul>
        <div className="statistics">
          <div>
            <h3>500+</h3>
            <p>Successful projects delivered</p>
          </div>
          <div>
            <h3>98%</h3>
            <p>Client satisfaction rate</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>Empowering businesses through innovative digital solutions.</p>
        <h3>Core Values</h3>
        <ul>
          <li>Innovation</li>
          <li>Reliability</li>
          <li>Transparency</li>
        </ul>
      </section>


      <section className="testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial">
          <p>"Thanks to CodeHeigher, our website traffic increased by 200%!"</p>
          <h4>Ruhiu Kinyanjui, CEO, oakly .int.</h4>
        </div>
      </section>


      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@yourcompany.com | Phone: +254713769729</p>
        <button className="cta-button">Ready to elevate your business? Contact us today!</button>
      </section>

    </div>
  )
}

export default HomePage