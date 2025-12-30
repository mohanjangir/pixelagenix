import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Business Website",
      desc: "Modern responsive business website",
      img: "/portfolio/p1.jpg",
    },
    {
      id: 2,
      title: "E-commerce Store",
      desc: "Online store with payment integration",
      img: "/portfolio/p2.jpg",
    },
    {
      id: 3,
      title: "Mobile App UI",
      desc: "Creative mobile app UI/UX design",
      img: "/portfolio/p3.jpg",
    },
    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio for professionals",
      img: "/portfolio/p4.jpg",
    },


    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio for professionals",
      img: "/portfolio/p4.jpg",
    },


    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio for professionals",
      img: "/portfolio/p4.jpg",
    },


    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio for professionals",
      img: "/portfolio/p4.jpg",
    },

    {
      id: 4,
      title: "Portfolio Website",
      desc: "Personal portfolio for professionals",
      img: "/portfolio/p4.jpg",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="px-portfolio-hero">
        <div className="px-portfolio-hero-content">
          <h1>Our Portfolio</h1>
          <p>Some of our latest and creative works</p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-portfolio-section">
        <h2 className="px-portfolio-title">Featured Projects</h2>

        <div className="px-portfolio-grid">
          {projects.map((item) => (
            <div className="px-portfolio-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="px-portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* OUR THEMES SECTION */}
    <section className="px-themes-section">
      <h2 className="px-themes-title">Our Themes</h2>
      <p className="px-themes-subtitle">
        Ready-to-use premium website themes crafted for different industries
      </p>

      <div className="px-themes-grid">
        <div className="px-theme-card">
          <img src="/themes/theme1.jpg" alt="Business Theme" />
          <h3>Mohan Jnagid</h3>
          <p>Professional corporate & startup websites</p>
          <div className="px-theme-icons">
            <a href="#" title="Live Demo">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href="#" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" title="Preview">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="px-theme-card">
          <img src="/themes/theme2.jpg" alt="E-commerce Theme" />
          <h3>E-commerce Theme</h3>
          <p>Online stores with modern UI & UX</p>
          <div className="px-theme-icons">
            <a href="#" title="Live Demo">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href="#" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" title="Preview">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="px-theme-card">
          <img src="/themes/theme3.jpg" alt="Portfolio Theme" />
          <h3>Portfolio Theme</h3>
          <p>Perfect for designers & developers</p>
          <div className="px-theme-icons">
            <a href="#" title="Live Demo">
              <i className="fa-solid fa-globe"></i>
            </a>
            <a href="#" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" title="Preview">
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Portfolio;
