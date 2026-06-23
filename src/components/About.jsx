export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <div className="about-img-box">
            <div className="about-initials">ZO</div>
            <div className="about-badge">
              <span className="big">17</span>
              Yrs Old<br />Developer
            </div>
          </div>
          <div className="about-frame-line"></div>
        </div>

        <div className="about-content">
          <div className="section-tag reveal">About Me</div>
          <h2 className="section-heading reveal reveal-delay-1">
            The Story<br />So <em>Far</em>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Hey! I'm Zohaib — a dedicated web and app development student at
            Saylani Welfare IT. I've gone from zero to building real projects
            with HTML, CSS, JavaScript, and now diving deep into ES6 modern
            JavaScript. I hold Cisco certifications that validate my
            foundational skills.
          </p>

          <div className="about-facts reveal reveal-delay-3">
            {[
              { label: "Institute", val: "Saylani Welfare IT" },
              { label: "Course", val: "Web & App Dev" },
              { label: "Location", val: "Pakistan" },
              { label: "Status", val: "Actively Learning" },
            ].map(({ label, val }) => (
              <div className="about-fact" key={label}>
                <div className="about-fact-label">{label}</div>
                <div className="about-fact-val">{val}</div>
              </div>
            ))}
          </div>

          <div className="about-tags reveal">
            {["HTML5", "CSS3", "JavaScript", "ES6+", "Responsive", "Cisco Certified", "Git"].map(
              (tag) => <span className="about-tag" key={tag}>{tag}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
