import "./About.css";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About PixelAgenix</h1>
          <p>
            We are a creative IT solutions company helping businesses grow
            digitally with modern technology and smart design.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              PixelAgenix is a professional IT services company delivering
              innovative web, mobile, and digital solutions for startups,
              small businesses, and enterprises.
            </p>
            <p>
              Our team focuses on quality, performance, and long-term growth
              strategies for our clients.
            </p>
          </div>
          <div className="about-image">
            <img src="/about-who.jpg" alt="Who We Are" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting-edge digital solutions that
              drive growth, efficiency, and innovation.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted global IT partner delivering impactful and
              scalable technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose PixelAgenix</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Expert Team</h4>
            <p>Skilled developers and designers with real-world experience.</p>
          </div>

          <div className="why-card">
            <h4>Quality Focus</h4>
            <p>High-performance, secure, and scalable digital solutions.</p>
          </div>

          <div className="why-card">
            <h4>Client-Centric</h4>
            <p>We work closely with clients to achieve business goals.</p>
          </div>

          <div className="why-card">
            <h4>On-Time Delivery</h4>
            <p>Timely project delivery with complete transparency.</p>
          </div>
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      <section className="timeline-section">
      <h2>Our Journey</h2>

      <div className="timeline">
        
        <div className="timeline-item">
          <span className="timeline-icon">
            <i className="fas fa-rocket"></i>
          </span>
          <div className="timeline-content">
            <h4>Company Founded</h4>
            <p>
              PixelAgenix was founded with a vision to deliver innovative
              digital solutions.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-icon">
            <i className="fas fa-briefcase"></i>
          </span>
          <div className="timeline-content">
            <h4>50+ Projects Delivered</h4>
            <p>
              Successfully completed multiple web and IT projects for
              growing businesses.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-icon">
            <i className="fas fa-users"></i>
          </span>
          <div className="timeline-content">
            <h4>Team Expansion</h4>
            <p>
              Built a skilled team of developers, designers, and marketers.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-icon">
            <i className="fas fa-globe"></i>
          </span>
          <div className="timeline-content">
            <h4>Global Clients</h4>
            <p>
              Started delivering scalable IT solutions to international
              clients.
            </p>
          </div>
        </div>

      </div>
    </section>


    </>
  );
};

export default About;
