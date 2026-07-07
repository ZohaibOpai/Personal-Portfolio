const projects = [
  { thumb: "TODO", name: "Todo List App", Github_link: "https://github.com/ZohaibOpai/TODO-List", Live_link: "" },
  { thumb: "React", name: "REACT PROJECT", Github_link: "", Live_link: "" },
  { thumb: "HACKATHON", name: "SMIT Hackathon", Github_link: "", Live_link: "" },
  { thumb: "API", name: "FORKIFY API", Github_link: "", Live_link: "" },
  { thumb: "TABLE", name: "PERIODIC TABLE", Github_link: "", Live_link: "" },
  { thumb: "PIZZA", name: "PIZZAPOINT", Github_link: "", Live_link: "" },
  { thumb: "RESTRURANT", name: "RICE N SMOKE", Github_link: "", Live_link: "" },
  { thumb: "INTERNSHIP", name: "MY INTERNSHIP", Github_link: "", Live_link: "" },
  { thumb: "ECOMMERCE", name: "STORE", Github_link: "", Live_link: "" },
  { thumb: "CALC", name: "Calculator", Github_link: "https://github.com/ZohaibOpai/Calculator.js", Live_link: "" },
  { thumb: "MAP", name: "Roadmap Project", Github_link: "https://github.com/ZohaibOpai/Roadmap.sh", Live_link: "" },
  { thumb: "HACK", name: "Mini Hackathon", Github_link: "https://github.com/ZohaibOpai/Mini-Hackathon", Live_link: "" },
  { thumb: "ICE", name: "Ice Cream Website", Github_link: "", Live_link: "" },
  { thumb: "WA", name: "WhatsApp Web Clone", Github_link: "https://github.com/ZohaibOpai/WhatsApp__Web", Live_link: "" },
  { thumb: "BOOT", name: "Bootstrap Portfolio", Github_link: "https://github.com/ZohaibOpai/Bootstrap_Portfolio", Live_link: "" },
  { thumb: "HH", name: "Harmony Heights", Github_link: "https://github.com/ZohaibOpai/Harmony_Heights", Live_link: "" },
  { thumb: "ROLL DICE", name: "Roll Dice", Github_link: "https://github.com/ZohaibOpai/Roll-Dice.git", Live_link: "" },
  { thumb: "AI", name: "ZohaibAI", Github_link: "https://github.com/ZohaibOpai/ZohaibAI", Live_link: "https://zohaib-ai-orcin.vercel.app" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
  { thumb: "", name: "", Github_link: "", Live_link: "" },
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
