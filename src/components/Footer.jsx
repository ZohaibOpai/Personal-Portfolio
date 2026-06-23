export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Z<span>.</span>Opai</div>
      <div className="footer-copy">&copy; 2026 Zohaib Opai — All rights reserved</div>
      <button
        className="footer-back"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top ^
      </button>
    </footer>
  );
}
