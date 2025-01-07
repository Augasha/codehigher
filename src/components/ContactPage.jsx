import React from 'react'

function ContactPage() {
  return (
    <div>
        <h1>REACH OUT TO US</h1>
        <ul className='ContactInformation'>
            <li>Email address: <a href="#patokinya12@gmail.com">patokinya12@gmail.com</a></li>
            <li>Phone number: <a href="#0713769729">0713769729</a></li>
        </ul>
        <form action="submit-form" className='contact-form'>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="tel" placeholder="Phone" name="phone" required />
        <textarea placeholder="Message" name="message" required></textarea>
        <select name="inquiry-type" required>
            <option value="" disabled selected>
                select Inquiry Type
            </option>
            <option value="general">General Inquiry</option>
            <option value="service-related">Service-Related</option>
            <option value="feedback">Feedback</option>
        </select>
            <button type='submit'>send</button>
        </form>
        <div className="social-media">
        <h3>Connect with us on:</h3>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Business Hours Section */}
      <div className="business-hours">
        <h3>Business Hours:</h3>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Call-to-Action Section */}
      <div className="call-to-action">
        <h2>Have a project in mind?</h2>
        <p>Get in touch today to discuss your needs and get a free quote!</p>
      </div>
    </div>
  )
}

export default ContactPage