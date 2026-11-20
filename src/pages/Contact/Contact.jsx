
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Globe,
  Handshake,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHero from "../../components/Layout/PageHero";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      formData.subject || "Website Contact Inquiry"
    );

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:humanitarianraid@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+254 720 014028",
      link: "tel:+254720014028",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "humanitarianraid@gmail.com",
      link: "mailto:humanitarianraid@gmail.com",
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Kakuma Refugee Camp, Kenya",
      link: "https://www.google.com/maps/search/?api=1&query=Kakuma+Refugee+Camp+Kenya",
    },
  ];

  return (
    <main className="contact-page">
      <PageHero
        eyebrow="GET IN TOUCH"
        title="We Would Love to Hear From You"
        description="Have a question, partnership idea, or interest in our work? Contact Humanitarian Resilience Aid. We welcome conversations with individuals and organizations who want to make a difference."
        image="/images/contact-hero.jpg"
      />

      {/* INTRODUCTION */}
      <section className="contact-intro section-padding">
        <div className="contact-container contact-intro-grid">
          <div className="contact-intro-content">
            <span className="contact-label">CONTACT HUMANITARIAN RESILIENCE AID</span>
            <h2>
              Let's Start a <span>Conversation</span>
            </h2>

            <p>
              We believe meaningful change begins with communication,
              collaboration, and community participation.
            </p>

            <p>
              Whether you want to learn about our programmes, explore
              partnership opportunities, volunteer, or support our activities,
              our team would be happy to hear from you.
            </p>

            <div className="contact-intro-points">
              <div>
                <MessageCircle size={20} />
                <span>Ask questions about our programmes</span>
              </div>
              <div>
                <Handshake size={20} />
                <span>Explore partnership opportunities</span>
              </div>
              <div>
                <Heart size={20} />
                <span>Find ways to support our mission</span>
              </div>
            </div>
          </div>

          <div className="contact-intro-image">
            <img
              src="/images/contact-community.jpg"
              alt="Community members participating in a local programme"
            />
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information section-padding">
        <div className="contact-container">
          <div className="contact-heading">
            <span className="contact-label">REACH OUT TO US</span>
            <h2>Our Contact Information</h2>
            <p>
              Choose the most convenient way to connect with our team.
            </p>
          </div>

          <div className="contact-info-grid">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <article className="contact-info-card" key={item.title}>
                  <div className="contact-info-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{item.title}</h3>
                  <a href={item.link}>{item.detail}</a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section className="contact-form-section section-padding">
        <div className="contact-container contact-form-grid">
          <div className="contact-form-content">
            <span className="contact-label">SEND US A MESSAGE</span>
            <h2>How Can We Help You?</h2>

            <p>
              Fill in the form below to prepare an email to our team. Your
              email application will open with your message ready to send.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Prepare Email <Send size={18} />
              </button>
            </form>
          </div>

          <aside className="contact-side-panel">
            <div className="contact-side-image">
              <img
                src="/images/contact-team.jpg"
                alt="Team members collaborating"
              />
            </div>

            <div className="contact-side-content">
              <span className="contact-label">WE ARE HERE TO CONNECT</span>
              <h3>Let's Work Together</h3>
              <p>
                We welcome conversations about community health, education,
                empowerment, livelihoods, and partnerships.
              </p>

              <div className="contact-side-detail">
                <Clock size={19} />
                <div>
                  <strong>Communication</strong>
                  <span>Contact us by email or phone</span>
                </div>
              </div>

              <div className="contact-side-detail">
                <Globe size={19} />
                <div>
                  <strong>Community Focus</strong>
                  <span>Kakuma Refugee Camp, Kenya</span>
                </div>
              </div>

              <a
                href="mailto:humanitarianraid@gmail.com"
                className="contact-side-link"
              >
                Email HRA <ArrowRight size={17} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location section-padding">
        <div className="contact-container contact-location-grid">
          <div className="contact-location-content">
            <span className="contact-label">FIND US</span>
            <h2>Serving Communities in Kakuma</h2>

            <p>
              Humanitarian Resilience Aid works in Kakuma Refugee Camp, Kenya,
              supporting refugee and host communities through community-based
              programmes.
            </p>

            <div className="contact-location-detail">
              <MapPin size={22} />
              <div>
                <strong>Our Location</strong>
                <span>Kakuma Refugee Camp, Turkana County, Kenya</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kakuma+Refugee+Camp+Kenya"
              target="_blank"
              rel="noreferrer"
              className="contact-submit-btn contact-map-btn"
            >
              View on Google Maps <ArrowRight size={18} />
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Map showing Kakuma Refugee Camp in Kenya"
              src="https://www.google.com/maps?q=Kakuma%20Refugee%20Camp%2C%20Kenya&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta">
        <div className="contact-container contact-cta-inner">
          <div>
            <span>LET'S CREATE CHANGE TOGETHER</span>
            <h2>Be Part of Our Mission</h2>
            <p>
              Your time, knowledge, resources, and collaboration can help
              strengthen communities and create opportunities.
            </p>
          </div>

          <div className="contact-cta-actions">
            <Link to="/get-involved/volunteer">
              Volunteer <ArrowRight size={17} />
            </Link>
            <Link to="/get-involved/partnerships">
              Partner With Us <ArrowRight size={17} />
            </Link>
            <Link to="/donate">
              Support Our Work <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
