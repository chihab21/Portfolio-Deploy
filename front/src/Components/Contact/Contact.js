import React, { useState } from 'react';
import './Contact.css';
import ScrollToTop from '../ScrollTop/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    })
    // Display a success notification
    toast.success("Your message has been sent successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">I'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* Toast container for displaying notifications */}
      <ToastContainer />
      
      <ScrollToTop />
    </section>
  );
}

export default Contact;
