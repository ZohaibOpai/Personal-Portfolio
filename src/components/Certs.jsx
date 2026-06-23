const certs = [
  {
    num: "01",
    title: "HTML Essentials",
    desc: "Mastery of semantic HTML5 structure, web standards, forms, tables, and accessibility fundamentals validated by Cisco.",
    borderClass: "cert-border-1",
  },
  {
    num: "02",
    title: "CSS Essentials",
    desc: "Complete mastery of CSS3 — selectors, box model, Flexbox, Grid, transitions, responsive design, and styling methodology.",
    borderClass: "cert-border-2",
  },
  {
    num: "03",
    title: "JavaScript Essentials 1",
    desc: "Core JavaScript programming concepts — variables, functions, control flow, DOM interaction, events, and modern JS foundations.",
    borderClass: "cert-border-3",
  },
];

export default function Certs() {
  return (
    <section id="certs">
      <div className="section-tag reveal">Certifications</div>
      <h2 className="section-heading reveal reveal-delay-1">
        Cisco <em>Certified</em>
      </h2>
      <p className="section-sub reveal reveal-delay-2">
        Official certifications earned through Cisco's global networking and development programs.
      </p>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div className={`cert-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={c.num}>
            <div className="cert-num">{c.num}</div>
            <div className="cert-issuer">
              <div className="cert-issuer-dot"></div>
              Cisco Networking Academy
            </div>
            <div className="cert-title">{c.title}</div>
            <div className="cert-desc">{c.desc}</div>
            <div className="cert-verify">
              <div className="cert-verify-dot"></div>
              Verified Certificate
            </div>
            <div className={`cert-border ${c.borderClass}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
