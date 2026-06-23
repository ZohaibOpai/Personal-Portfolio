const projects = [
  { thumb: "TODO", name: "Todo List App", link: "https://github.com/ZohaibOpai/TODO-List" },
  { thumb: "React", name: "REACT PROJECT", link: "" },
  { thumb: "HACKATHON", name: "SMIT Hackathon", link: "" },
  { thumb: "API", name: "FORKIFY API", link: "" },
  { thumb: "TABLE", name: "PERIODIC TABLE", link: "" },
  { thumb: "PIZZA", name: "PIZZAPOINT", link: "" },
  { thumb: "RESTRURANT", name: "RICE N SMOKE", link: "" },
  { thumb: "INTERNSHIP", name: "MY INTERNSHIP", link: "" },
  { thumb: "ECOMMERCE", name: "STORE", link: "" },
  { thumb: "CALC", name: "Calculator", link: "https://github.com/ZohaibOpai/Calculator.js" },
  { thumb: "MAP", name: "Roadmap Project", link: "https://github.com/ZohaibOpai/Roadmap.sh" },
  { thumb: "HACK", name: "Mini Hackathon", link: "https://github.com/ZohaibOpai/Mini-Hackathon" },
  { thumb: "ICE", name: "Ice Cream Website", link: "" },
  { thumb: "WA", name: "WhatsApp Web Clone", link: "https://github.com/ZohaibOpai/WhatsApp__Web" },
  { thumb: "BOOT", name: "Bootstrap Portfolio", link: "https://github.com/ZohaibOpai/Bootstrap_Portfolio" },
  { thumb: "HH", name: "Harmony Heights", link: "https://github.com/ZohaibOpai/Harmony_Heights" },
  { thumb: "ROLL DICE", name: "Roll Dice", link: "https://github.com/ZohaibOpai/Roll-Dice.git" },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag reveal">Projects</div>
      <h2 className="section-heading reveal reveal-delay-1">
        Things I've<br /><em>Built</em>
      </h2>
      <p className="section-sub reveal reveal-delay-2">
        Real projects built from scratch during my learning journey. Always improving, always shipping.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.name}>
            <div className="proj-thumb">
              <div className="proj-thumb-text">{p.thumb}</div>
            </div>
            <div className="proj-body">
              <div className="proj-name">{p.name}</div>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>
              ) : (
                <a href="#" style={{ opacity: 0.4, pointerEvents: "none" }}>Coming Soon</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
