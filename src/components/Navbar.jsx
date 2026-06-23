import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        Z<span>.</span>Opai
      </a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#certs" onClick={closeMenu}>Certs</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#journey" onClick={closeMenu}>Journey</a></li>
        <li><a href="#contact" className="nav-hire" onClick={closeMenu}>Hire Me</a></li>
      </ul>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
