import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let container = React.createRef();
  const scroll = useRef();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOutsideClick = useCallback(
    (event) => {
      const { keyCode } = event;
      if (keyCode === 27) {
        setOpen(false);
        return;
      }
      if (!open) {
        return;
      }
      if (container) {
        const domNode = ReactDOM.findDOMNode(container.current);
        if (domNode && !domNode.contains(event.target)) {
          setOpen(false);
        }
      }
    },
    [container, open]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleOutsideClick);
  }, [handleOutsideClick]);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <div className={`navbar ${scrolled ? "scrolled" : null} `} ref={scroll}>
      <div className="navbrand">
        <Link className="logo" to="/">
          CI<span>DENT</span>
        </Link>
      </div>
      <i className="mobile-nav fa fa-bars" onClick={() => setOpen(true)} />
      <div
        className={`nav-links float-right ${open ? "open" : "closed"}`}
        ref={container}
      >
        <ul className="nav-links">
          <li className="nav-item active">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/whatwedo">WHAT WE DO</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
