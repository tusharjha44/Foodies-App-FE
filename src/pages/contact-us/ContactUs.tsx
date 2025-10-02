import React, { useState } from 'react'

const ContactUs: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // For now, just log the values
    console.log({ name, email, message })
    alert('Thanks for contacting Foodies! We’ll get back to you soon.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center text-muted mb-5">
            Have a question or feedback? We’d love to hear from you. Fill out the form below or
            reach us directly!
          </p>

          <div className="card shadow-sm p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-5">
            <h5>Other ways to reach us</h5>
            <p className="mb-1">📞 +91 98XXX XXXXX</p>
            <p className="mb-0">📧 support@foodies.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
