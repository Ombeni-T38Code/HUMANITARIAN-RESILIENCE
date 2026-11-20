import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import logo from "../../assets/logos.png";
import styles from "./Footer.module.css";

const FOOTER_GROUPS = [
  {
    heading: "Organization",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" }
    ]
  },
  {
    heading: "Programs",
    links: [
      { label: "Education", to: "/projects" },
      { label: "Community health", to: "/what-we-do/healthcare" },
      { label: "Psychosocial support", to: "/what-we-do/education" }
    ]
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", to: "/donate" },
      { label: "Partner With Us", to: "/get-involved/register" },
      { label: "Careers", to: "/get-involved" }
    ]
  }
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.2v3.2h2.8V22h3.5z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d="M6.9 8.5H3.6V19h3.3V8.5zM5.2 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13c0-3.1-1.7-4.7-4-4.7-1.8 0-2.7 1-3.1 1.7V8.5H10c0 .9 0 10.5 0 10.5h3.3v-5.9c0-.3 0-.6.1-.8.2-.6.8-1.3 1.7-1.3 1.2 0 1.7.9 1.7 2.3V19H20v-6h.4z" />
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.4-4.8zM10 15.1V8.9l5.4 3.1-5.4 3.1z" />
      </svg>
    )
  },
  {
    name: "Website",
    href: "/",
    icon: <Globe size={17} strokeWidth={2} aria-hidden="true" />
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer} aria-label="Site footer">
      <div className={styles.footerContent}>
        <div className={styles.brandColumn}>
          <Link to="/" className={styles.logoRow}>
            <img
              src={logo}
              alt="Humanitarian Resilience Aid logo"
              className={styles.logoImage}
              loading="lazy"
            />
            <span className={styles.logoText}>
              Humanitarian Resilience Aid
            </span>
          </Link>

          <p className={styles.brandDesc}>
            Promoting health care and education through refugee-led training,
            physiotherapy and community support in Kakuma, Kenya.
          </p>

          <p className={styles.locationNote}>
            <MapPin size={15} strokeWidth={2} aria-hidden="true" />
            <span>Kakuma Refugee Camp, Turkana County, Kenya</span>
          </p>

          <div className={styles.socialSection}>
            <span className={styles.socialLabel}>
              <Share2 size={14} strokeWidth={2} aria-hidden="true" />
              <span>Follow Our Updates</span>
            </span>

            <div className={styles.socialList} role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((item) => {
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    title={item.name}
                    className={styles.socialIcon}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <nav className={styles.linksGrid} aria-label="Footer navigation">
          {FOOTER_GROUPS.map((group) => (
            <div className={styles.linkGroup} key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {currentYear} Humanitarian Resilience Aid. All rights reserved.
        </p>

        <div className={styles.bottomLinks}>
          <a href="mailto:humanitarianraid@gmail.com" className={styles.contactItem}>
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            <span>humanitarianraid@gmail.com</span>
          </a>

          <a href="tel:+254720014028" className={styles.contactItem}>
            <Phone size={15} strokeWidth={2} aria-hidden="true" />
            <span>+254 720 014028</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;