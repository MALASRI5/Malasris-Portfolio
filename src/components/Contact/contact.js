import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_dgmzqnf';
    const templateID = 'template_4usc3vr';
    const userID = '9sJkEisVC2slNWTIq';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact">
      <h2 align="center">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
