import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="social-links">
          <ul>
            <li>
              <Link href="#" to="/">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" to="/">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" to="/">
                Google+
              </Link>
            </li>
            <li>
              <Link href="#" to="/">
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-no">
          <span>+91 123 456789</span>
        </div>
        <div className="footer-logo">
          <Link href="#" to="/">
            <span>CI</span>
            DENT
          </Link>
        </div>
        <div className="copy-right">
          <p>
            Copyright &copy; 2020 Cident. All Rights Reserved | Developed by{" "}
            <Link href="#" to="/">
              BuildForSDG Team 094
            </Link>
          </p>
        </div>
        <div className="top-to-page">
          {/* <a href="#top" className="scroll">
            {" "}
          </a> */}
          <div className="clear"> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
