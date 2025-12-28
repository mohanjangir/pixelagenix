import "./FloatingContact.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="px-float-container">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919783362433"
        target="_blank"
        rel="noopener noreferrer"
        className="px-float-btn whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+91-9783362433"
        className="px-float-btn call"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
};

export default FloatingContact;
