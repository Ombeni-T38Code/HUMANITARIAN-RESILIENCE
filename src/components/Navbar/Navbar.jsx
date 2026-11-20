
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Navbar.module.css";
import NavDropdown from "./NavDropdown";
import logo from "../../assets/logos.png";

/* =========================================
   NAVIGATION DATA
========================================= */

const navigationGroups = [
  {
    title: "About Us",
    basePath: "/about",
    eyebrow: "GET TO KNOW US",
    description:
      "Learn about our organization, our mission, and the people working to strengthen communities.",
    links: [
      {
        label: "Who We Are",
        to: "/about",
      },
      {
        label: "Our Team",
        to: "/about/our-team",
      },
    ],
  },
  {
    title: "What We Do",
    basePath: "/what-we-do",
    eyebrow: "OUR PROGRAMS",
    description:
      "Discover our community-focused programs supporting health, education, and resilience.",
    links: [
      {
        label: "All Programs",
        to: "/what-we-do",
      },
      {
        label: "Community Health",
        to: "/what-we-do/community-health",
      },
      {
        label: "Physiotherapy & Rehabilitation",
        to: "/what-we-do/physiotherapy-rehabilitation",
      },
      {
        label: "Education & Digital Skills",
        to: "/what-we-do/education-digital-skills",
      },
      {
        label: "Women & Youth Empowerment",
        to: "/what-we-do/women-youth-empowerment",
      },
      {
        label: "Child Development",
        to: "/what-we-do/child-development",
      },
      {
        label: "Psychosocial Support",
        to: "/what-we-do/psychosocial-support",
      },
      {
        label: "Livelihoods",
        to: "/what-we-do/livelihoods",
      },
      {
        label: "Community Resilience",
        to: "/what-we-do/community-resilience",
      },
    ],
  },
  {
    title: "Projects",
    basePath: "/projects",
    eyebrow: "OUR INITIATIVES",
    description:
      "Explore practical projects creating opportunities and positive change in our communities.",
    links: [
      {
        label: "All Projects",
        to: "/projects",
      },
      {
        label: "Community Health Education",
        to: "/projects/community-health-education",
      },
      {
        label: "Community Physiotherapy",
        to: "/projects/community-physiotherapy",
      },
      {
        label: "Psychosocial Awareness",
        to: "/projects/psychosocial-awareness",
      },
      {
        label: "Childcare & Learning",
        to: "/projects/childcare-learning",
      },
      {
        label: "Digital Education",
        to: "/projects/digital-education",
      },
      {
        label: "Women's English Education",
        to: "/projects/womens-english-education",
      },
      {
        label: "Soap Making",
        to: "/projects/soap-making",
      },
      {
        label: "Youth Coding & Digital Skills",
        to: "/projects/youth-coding-digital-skills",
      },
    ],
  },
  {
    title: "Get Involved",
    basePath: "/get-involved",
    eyebrow: "MAKE A DIFFERENCE",
    description:
      "Join our mission by volunteering, building partnerships, and supporting our work.",
    links: [
      {
        label: "Get Involved",
        to: "/get-involved",
      },
      {
        label: "Volunteer With Us",
        to: "/get-involved/volunteer",
      },
      {
        label: "Partnerships",
        to: "/get-involved/partnerships",
      },
    ],
  },
];

/* =========================================
   NAVBAR COMPONENT
========================================= */

const Navbar = () => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileGroup, setExpandedMobileGroup] =
    useState("");

  /* Scroll effect */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Close mobile drawer after navigation */

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobileGroup("");
  }, [location.pathname]);

  /* Lock body scroll when mobile drawer is open */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Close drawer with Escape */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setExpandedMobileGroup("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isGroupActive = (basePath) => {
    return (
      location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/`)
    );
  };

  const toggleMobileGroup = (title) => {
    setExpandedMobileGroup((current) =>
      current === title ? "" : title
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMobileGroup("");
  };

  return (
    <>
      {/* =====================================
          MAIN NAVBAR
      ===================================== */}

      <header
        className={`${styles.navBar} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.navContainer}>

          {/* BRAND / LOGO */}

          <Link
            to="/"
            className={styles.brandLink}
            aria-label="Humanitarian Resilience Aid home"
          >
            <div className={styles.logoRow}>
              <img
                src={logo}
                alt="Humanitarian Resilience Aid logo"
                className={styles.logoImage}
              />

              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>
                  HUMANITARIAN
                  <br />
                  RESILIENCE AID
                </span>

                <span className={styles.taglineText}>
                  Promoting Health Care and Education
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className={styles.navLinks}
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.standaloneLink} ${
                  isActive ? styles.activeStandalone : ""
                }`
              }
            >
              Home
            </NavLink>

            {navigationGroups.map((group) => (
              <NavDropdown
                key={group.title}
                title={group.title}
                basePath={group.basePath}
                eyebrow={group.eyebrow}
                description={group.description}
                links={group.links}
                active={isGroupActive(group.basePath)}
              />
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.standaloneLink} ${
                  isActive ? styles.activeStandalone : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* DESKTOP DONATE BUTTON */}

          <div className={styles.desktopActions}>
            <Link
              to="/donate"
              className={styles.donateLinkBtn}
            >
              <Heart
                size={15}
                className={styles.btnIcon}
                fill="currentColor"
              />
              <span>Donate Now</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className={styles.mobileMenuTrigger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="hra-mobile-drawer"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* =====================================
          MOBILE OVERLAY
      ===================================== */}

      <div
        className={`${styles.drawerOverlay} ${
          mobileOpen ? styles.overlayActive : ""
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* =====================================
          MOBILE DRAWER
      ===================================== */}

      <aside
        id="hra-mobile-drawer"
        className={`${styles.mobileDrawer} ${
          mobileOpen ? styles.drawerOpen : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >

        {/* MOBILE DRAWER BRAND */}

        <div
          style={{
            minHeight: "76px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #edf1ed",
          }}
        >
          <Link
            to="/"
            className={styles.brandLink}
            onClick={closeMobileMenu}
          >
            <div className={styles.logoRow}>
              <img
                src={logo}
                alt="HRA logo"
                className={styles.logoImage}
              />

              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>
                  HUMANITARIAN
                  <br />
                  RESILIENCE AID
                </span>

                <span className={styles.taglineText}>
                  Promoting Health Care and Education
                </span>
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "6px",
              background: "#f0f6f1",
              color: "#145b3b",
              cursor: "pointer",
            }}
          >
            <X size={23} />
          </button>
        </div>

        {/* MOBILE NAVIGATION LINKS */}

        <nav
          className={styles.mobileLinksContainer}
          aria-label="Mobile navigation links"
        >
          {/* HOME */}

          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `${styles.mobileParentLink} ${
                isActive ? styles.mobileActive : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* MOBILE DROPDOWN GROUPS */}

          {navigationGroups.map((group) => {
            const active = isGroupActive(group.basePath);
            const expanded =
              expandedMobileGroup === group.title;

            return (
              <div
                className={styles.mobileGroupBlock}
                key={group.title}
              >
                <button
                  type="button"
                  className={`${styles.mobileParentLink} ${
                    active ? styles.mobileActive : ""
                  }`}
                  onClick={() =>
                    toggleMobileGroup(group.title)
                  }
                  aria-expanded={expanded}
                >
                  <span>{group.title}</span>

                  <ChevronDown
                    size={17}
                    style={{
                      transform: expanded
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {expanded && (
                  <div className={styles.mobileSubGroup}>
                    {group.links.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `${styles.mobileSubLink} ${
                            isActive
                              ? styles.mobileSubActive
                              : ""
                          }`
                        }
                      >
                        <span className={styles.subDot} />
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* CONTACT */}

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `${styles.mobileParentLink} ${
                isActive ? styles.mobileActive : ""
              }`
            }
          >
            Contact
          </NavLink>

          {/* MOBILE DONATE */}

          <Link
            to="/donate"
            onClick={closeMobileMenu}
            className={styles.mobileDonateBtn}
          >
            <Heart size={17} fill="currentColor" />
            <span>Donate Now</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* MOBILE DRAWER FOOTER */}

        <div
          style={{
            padding: "17px 20px",
            borderTop: "1px solid rgba(20, 91, 59, 0.08)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              fontWeight: 800,
              color: "#0b3828",
            }}
          >
            HUMANITARIAN RESILIENCE AID
          </span>

          <p
            style={{
              marginTop: "5px",
              color: "#849087",
              fontSize: "10px",
            }}
          >
            Kakuma Refugee Camp, Kenya
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
