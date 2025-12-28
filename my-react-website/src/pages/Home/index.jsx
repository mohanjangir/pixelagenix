import { Link } from "react-router-dom";
import "./Home.css";


/* Service Icons */
import webIcon from "../../assets/services/web.jpg";
import appIcon from "../../assets/services/app.jpg";
import designIcon from "../../assets/services/design.jpg";
import seoIcon from "../../assets/services/seo.jpg";
import ecommerceIcon from "../../assets/services/ecommerce.jpg";
import softwareIcon from "../../assets/services/software.jpg";




import { useEffect, useState } from "react";

const CounterBox = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="counter-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};





const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
      <div className="hero-content">
        {/* <span>Top Web and Mobile Apps Development Company</span> */}
        <h1>
          Grow Your Business <br />
          <span>With PixelAgenix</span>
        </h1>

        <p>
          We design and develop modern, responsive, and high-performing websites
          that help your business grow online.
        </p>

        <div className="hero-buttons">
          <a href="/contact" className="btn primary">
            Get Free Consultation
          </a>
          <a href="/services" className="btn secondary">
            Our Services
          </a>
        </div>
      </div>
    </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services">
        <div className="services-container">

          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer complete IT solutions to help your business grow digitally.
          </p>

          <div className="services-grid">

            <Link to="/services" className="service-card">
              <img src={webIcon} alt="Website Development" />
              <h3>Website Development</h3>
              <p>
                Modern, fast and responsive websites tailored to your business needs.
              </p>
            </Link>

            <Link to="/services" className="service-card">
              <img src={appIcon} alt="Web Applications" />
              <h3>Web Applications</h3>
              <p>
                Scalable and secure web applications built using modern technologies.
              </p>
            </Link>

            <Link to="/services" className="service-card">
              <img src={designIcon} alt="UI UX Design" />
              <h3>UI/UX Design</h3>
              <p>
                User-focused designs that deliver great experiences and conversions.
              </p>
            </Link>

            <Link to="/services" className="service-card">
              <img src={seoIcon} alt="SEO & Marketing" />
              <h3>SEO & Marketing</h3>
              <p>
                Data-driven SEO and marketing strategies to boost your online presence.
              </p>
            </Link>

            <Link to="/services" className="service-card">
              <img src={ecommerceIcon} alt="E-commerce Solutions" />
              <h3>E-commerce Solutions</h3>
              <p>
                High-converting online stores with secure payment integrations.
              </p>
            </Link>

            <Link to="/services" className="service-card">
              <img src={softwareIcon} alt="Custom Software" />
              <h3>Custom Software</h3>
              <p>
                Custom software solutions built to automate and scale your business.
              </p>
            </Link>

          </div>
             {/* ===== BUTTON BELOW CARDS ===== */}
          <div className="services-btn">
            <Link to="/services" className="btn primary">
              View All Services
            </Link>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
<section className="why-choose">
  <div className="why-container">

    <h2 className="section-title">Why Choose PixelAgenix?</h2>
    <p className="section-subtitle">
      We don’t just build websites, we build digital success for your business.
    </p>

    <div className="why-grid">

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="Expert Team" />
        <h3>Expert Team</h3>
        <p>Experienced developers delivering scalable and secure solutions.</p>
      </div>

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Modern Tech" />
        <h3>Modern Technology</h3>
        <p>We use the latest frameworks and tools for future-ready products.</p>
      </div>

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Client Focus" />
        <h3>Client Focused</h3>
        <p>We understand your business goals and build accordingly.</p>
      </div>

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Delivery" />
        <h3>On-Time Delivery</h3>
        <p>Projects delivered on time without compromising quality.</p>
      </div>

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3063/3063821.png" alt="Pricing" />
        <h3>Affordable Pricing</h3>
        <p>Premium services at budget-friendly pricing.</p>
      </div>

      <div className="why-card">
        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Support" />
        <h3>Dedicated Support</h3>
        <p>Continuous support even after project delivery.</p>
      </div>

      <div className="why-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4320/4320217.png" alt="Scalable Solutions"/>
        <h3>Scalable Solutions</h3>
        <p>
          Our solutions are built to grow with your business, ensuring long-term success.
        </p>
      </div>

      <div className="why-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" alt="Trusted Partner"
        />
        <h3>Trusted IT Partner</h3>
        <p>
          We work as your technology partner, focused on delivering real business value.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ================= COUNTERS ================= */}
<section className="counters">
  <div className="counter-wrapper">

    <h2 className="section-title">Our Achievements</h2>
    <p className="section-subtitle">
      Numbers that reflect our dedication, experience, and success.
    </p>

    <div className="counter-container">
      <CounterBox end={120} label="Projects Completed" />
      <CounterBox end={80} label="Happy Clients" />
      <CounterBox end={5} label="Years Experience" />
      <CounterBox end={24} label="Support Availability" />
    </div>

  </div>
</section>



{/* ================= BLOGS SECTION ================= */}
<section className="blogs">
  <div className="blogs-wrapper">

    <h2 className="section-title">Latest Blogs & Insights</h2>
    <p className="section-subtitle">
      Explore our latest articles, tips, and insights on technology, business,
      and digital growth.
    </p>

    <div className="blogs-grid">

      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development Trends"
        />
        <div className="blog-content">
          <h3>Top Web Development Trends in 2025</h3>
          <p>
            Web development is constantly evolving with new technologies,
            frameworks, and best practices. In this blog, we explore the
            latest trends that are shaping modern websites and applications,
            including performance optimization, UI/UX improvements, and
            scalable architectures for businesses.
          </p>
          <Link to="/blogs" className="read-more">
            Read More →
          </Link>
        </div>
      </div>

      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="Digital Marketing"
        />
        <div className="blog-content">
          <h3>How Digital Marketing Helps Your Business Grow</h3>
          <p>
            Digital marketing plays a crucial role in building brand awareness
            and generating quality leads. Learn how SEO, social media marketing,
            and paid advertising strategies can help your business reach the
            right audience and achieve long-term success.
          </p>
          <Link to="/blogs" className="read-more">
            Read More →
          </Link>
        </div>
      </div>

      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="IT Solutions"
        />
        <div className="blog-content">
          <h3>Why IT Solutions Are Important for Modern Businesses</h3>
          <p>
            In today’s competitive market, businesses need smart IT solutions
            to automate processes and improve efficiency. This article explains
            how custom software, cloud solutions, and automation can transform
            your business operations and boost productivity.
          </p>
          <Link to="/blogs" className="read-more">
            Read More →
          </Link>
        </div>
      </div>

    </div>

  </div>
</section>





    </>
  );
};

export default Home;
