const projects = [
  { thumb: "TODO", name: "Todo List App", Github_link: "https://github.com/ZohaibOpai/TODO-List", Live_link: "https://todo-list-sage-five-60.vercel.app/" },
  { thumb: "React", name: "REACT PROJECT", Github_link: "https://github.com/ZohaibOpai/First-React-Project.git", Live_link: "https://first-react-project-nu-two.vercel.app/" },
  { thumb: "HACKATHON", name: "SMIT Hackathon", Github_link: "https://github.com/ZohaibOpai/Hackathon-2026.git", Live_link: "https://hackathon-2026-sand.vercel.app/" },
  { thumb: "REACT", name: "REACT-RECIPIES", Github_link: "https://github.com/ZohaibOpai/React-Recipe.git", Live_link: "https://react-recipe-eosin.vercel.app/" },
  { thumb: "TABLE", name: "PERIODIC TABLE", Github_link: "https://github.com/ZohaibOpai/Periodic-Table.git", Live_link: "https://periodic-table-lyart-eight.vercel.app/" },
  { thumb: "PIZZA", name: "PIZZAPOINT", Github_link: "https://github.com/ZohaibOpai/PizzaPoint.git", Live_link: "https://pizza-point-ten.vercel.app/" },
  { thumb: "RESTRURANT", name: "RICE N SMOKE", Github_link: "https://github.com/ZohaibOpai/ricensmoke.git", Live_link: "https://ricensmoke.vercel.app/" },
  { thumb: "INTERNSHIP", name: "MY INTERNSHIP", Github_link: "https://github.com/ZohaibOpai/developershub-corporation.git", Live_link: "https://developershub-corporation.surge.sh/" },
  { thumb: "Market", name: "STORE", Github_link: "https://github.com/ZohaibOpai/food-marketing.git", Live_link: "https://food-marketing-pi.vercel.app/" },
  { thumb: "CALC", name: "Calculator", Github_link: "https://github.com/ZohaibOpai/Calculator.js", Live_link: "https://heroic-youtiao-5496d1.netlify.app/" },
  { thumb: "MAP", name: "Roadmap Project", Github_link: "https://github.com/ZohaibOpai/Roadmap.sh", Live_link: "https://gorgeous-clafoutis-cd815.netlify.app/" },
  { thumb: "HACK", name: "Mini Hackathon", Github_link: "https://github.com/ZohaibOpai/Mini-Hackathon", Live_link: "https://rainbow-dragon-726a88.netlify.app/" },
  { thumb: "ICE", name: "Ice Cream Website", Github_link: "https://github.com/ZohaibOpai/Ice-Cream.git", Live_link: "https://ice-cream-five-eta.vercel.app/" },
  { thumb: "WA", name: "WhatsApp Web Clone", Github_link: "https://github.com/ZohaibOpai/WhatsApp__Web", Live_link: "https://profound-frangipane-9ccdfd.netlify.app/" },
  { thumb: "BOOT", name: "Bootstrap Portfolio", Github_link: "https://github.com/ZohaibOpai/Bootstrap_Portfolio", Live_link: "https://subtle-choux-311383.netlify.app/" },
  { thumb: "HH", name: "Harmony Heights", Github_link: "https://github.com/ZohaibOpai/Harmony_Heights", Live_link: "https://dainty-praline-11d809.netlify.app/" },
  { thumb: "ROLL DICE", name: "Roll Dice", Github_link: "https://github.com/ZohaibOpai/Roll-Dice.git", Live_link: "https://idyllic-marigold-f5a26c.netlify.app/" },
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
              {(p.Live_link || p.Github_link) ? (
                <a href={p.Live_link || p.Github_link} target="_blank" rel="noreferrer">
                  {p.Live_link ? "View Live →" : "View GitHub →"}
                </a>
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
