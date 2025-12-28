import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-srv-hero">
        <div className="px-srv-hero-overlay"></div>

        <div className="px-srv-hero-content">
          <h1>Our Services</h1>
          <p>
            We deliver modern, scalable & result-driven digital solutions
            for businesses and startups.
          </p>

          <Link to="/contact" className="px-srv-hero-btn">
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="px-srv-section">
        <h2 className="px-srv-title">What We Offer</h2>

        <div className="px-srv-grid">
          <div className="px-srv-card">
            <img src="/service-web.jpg" alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              High-performance, responsive and SEO-friendly websites
              using modern technologies.
            </p>
          </div>

          <div className="px-srv-card">
            <img src="/service-ui.jpg" alt="UI UX Design" />
            <h3>UI / UX Design</h3>
            <p>
              Clean, user-focused designs that improve engagement
              and conversions.
            </p>
          </div>

          <div className="px-srv-card">
            <img src="/service-seo.jpg" alt="SEO Services" />
            <h3>SEO & Marketing</h3>
            <p>
              Rank higher on Google and grow your business with
              result-oriented SEO.
            </p>
          </div>

          <div className="px-srv-card">
            <img src="/service-app.jpg" alt="App Development" />
            <h3>App Development</h3>
            <p>
              Scalable Android & Web applications built for performance
              and growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
