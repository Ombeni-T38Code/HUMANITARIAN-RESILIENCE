
const PageHero = ({
  eyebrow = "HUMANITARIAN RESILIENCE AID",
  title,
  subtitle,
  backgroundImage,
  alignment = "left",
}) => {
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(
          90deg,
          rgba(7, 43, 29, 0.92),
          rgba(7, 43, 29, 0.58)
        ), url("${backgroundImage}")`,
      }
    : {};

  return (
    <section
      className={`page-hero page-hero-${alignment}`}
      style={heroStyle}
    >
      <div className="page-hero-container">
        <div className="page-hero-content">
          {eyebrow && (
            <span className="page-hero-eyebrow">{eyebrow}</span>
          )}

          <h1>{title}</h1>

          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="page-hero-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
