
import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_0wi3w5j",   // ✅ Service ID
  "template_9yzblcl",  // ✅ Template ID
  formRef.current,
  "C1xpfc7qMJnRdWrOy"     // ✅ Public Key
)

    // emailjs
    //   .sendForm(
    //     "pixelagenix@gmail.com",      // 🔴 yaha apna EmailJS service id
    //     "template_9yzblcI",     // 🔴 yaha apna template id
    //     formRef.current,
    //     "kdKDHP_IW0qm-h4fiuYYT"       // 🔴 yaha apna public key
    //   )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Message failed!");
        console.log(error);
      });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="px-contact-hero">
        <div className="px-contact-hero-content">
          <h1>Contact Us</h1>
          <p>Let’s discuss your project & grow your business</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-contact-section">
        <div className="px-contact-wrapper">

          {/* FORM */}
          <div className="px-contact-form-box">
            <h2>Send Inquiry</h2>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* MAP */}
          <div className="px-contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
