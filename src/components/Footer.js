import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

const Footer = React.forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" ref={ref}>
      <div className="footer-container">
        <div className="socials">
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <CiMail size={20} style={{ color: "orange", marginRight: "2rem" }} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} style={{ color: "orange", marginRight: "2rem" }} />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} style={{ color: "orange", marginRight: "2rem" }} />
          </a>
        </div>
        <div className="copyright">
          <p>© {currentYear} AOT Quotes API. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
});

export default Footer;
