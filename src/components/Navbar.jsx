import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
      style={{
        background: "rgba(15,23,42,0.95)",
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">Prashant<span className="text-info">{" "}Dike</span></Link>
        <button className="navbar-toggler border-0" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {
            menuOpen
              ? <FaTimes size={28} />
              : <FaBars size={28} />
          }
        </button>

        <div className={
          menuOpen
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >

          <ul className="navbar-nav ms-auto text-center gap-lg-3">
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}