
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";

import styles from "./Navbar.module.css";

const NavDropdown = ({
  title,
  basePath,
  eyebrow,
  description,
  links = [],
  active = false,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  /* Close dropdown after changing route */

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* Check active dropdown item */

  const isLinkActive = (path) => {
    if (path === basePath) {
      return location.pathname === basePath;
    }

    return location.pathname === path;
  };

  return (
    <div
      className={`${styles.dropdown} ${
        isOpen ? styles.dropdownOpen : ""
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* DROPDOWN TRIGGER */}

      <button
        type="button"
        className={`${styles.dropdownTrigger} ${
          active ? styles.activeStandalone : ""
        }`}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>

        <ChevronDown
          size={14}
          className={`${styles.dropdownChevron} ${
            isOpen ? styles.chevronRotated : ""
          }`}
        />
      </button>

      {/* DROPDOWN MENU */}

      <div
        className={`${styles.dropdownMenu} ${
          isOpen ? styles.dropdownMenuOpen : ""
        }`}
      >
        {/* HEADER */}

        <div className={styles.dropdownHeader}>
          <span className={styles.dropdownEyebrow}>
            {eyebrow}
          </span>

          <h3>{title}</h3>

          <p>{description}</p>
        </div>

        {/* MENU LINKS */}

        <div className={styles.dropdownLinks}>
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${styles.dropdownItem} ${
                isLinkActive(item.to)
                  ? styles.dropdownItemActive
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>

              <ArrowUpRight
                size={14}
                className={styles.dropdownArrow}
              />
            </Link>
          ))}
        </div>

        {/* FOOTER */}

        <div className={styles.dropdownFooter}>
          <span className={styles.dropdownFooterDot} />

          <span>
            HUMANITARIAN RESILIENCE AID
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
