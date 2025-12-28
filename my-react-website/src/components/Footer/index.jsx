import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo + Company */}
        <div className="footer-box">
          <div className="footer-logo">
            <img src="/logo.png" alt="PixelAgenix Logo" />
            <h3>PixelAgenix IT Solutions</h3>
          </div>

          <p>
            We help businesses grow digitally with modern websites,
            SEO, and digital marketing solutions.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
           <a href="https://www.facebook.com/share/17khPJKdHw/"><i className="fab fa-facebook-f"></i></a>
           <a href="https://www.instagram.com/pixelagenix?igsh=MWhrbDdqNmQ1cGN0eg==&utm_source=ig_contact_invite"><i className="fab fa-instagram"></i></a>
           <a href="https://www.linkedin.com/company/pixelagenixitsolutions/"><i className="fab fa-linkedin-in"></i></a>
           <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-box">
          <h4>Our Services</h4>
          <ul>
            <li>Website Development</li>
            <li>UI / UX Design</li>
            <li>SEO Services</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-box">
          <h4>Contact Us</h4>
          <p>📍 Jaipur, Rajasthan</p>
          <p>📞 +91-9783362433</p>
          <p>✉️ pixelagenix@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PixelAgenix IT Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
