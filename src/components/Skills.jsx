import { useEffect, useRef } from "react";

const skills = [
    { icon: "Core", name: "HTML5", desc: "Semantic markup, accessibility, forms, and modern HTML5 APIs with clean structure.", pct: 90, cert: true },
    { icon: "Style", name: "CSS3", desc: "Flexbox, Grid, animations, transitions, responsive design and modern layout techniques.", pct: 85, cert: true },
    { icon: "Logic", name: "JavaScript", desc: "DOM manipulation, events, fetch API, asynchronous JS, and now mastering ES6+ syntax.", pct: 78, cert: true },
    { icon: "Modern", name: "ES6+", desc: "Arrow functions, destructuring, modules, classes, promises, async/await, spread and rest.", pct: 70, cert: false },
    { icon: "Layout", name: "Responsive", desc: "Mobile-first design, media queries, fluid grids, and cross-browser compatible layouts.", pct: 82, cert: false },
    { icon: "Tools", name: "Git & Tools", desc: "Version control with Git, GitHub workflows, VS Code, and developer tooling essentials.", pct: 65, cert: false },
];

export default function Skills() {
    const gridRef = useRef(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        grid.querySelectorAll(".skill-bar-fill").forEach((f) => {
                            f.style.width = f.dataset.pct + "%";
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        obs.observe(grid);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="skills">
            <div className="section-tag reveal">Technical Skills</div>
            <h2 className="section-heading reveal reveal-delay-1">
                What I<br /><em>Know</em>
            </h2>
            <p className="section-sub reveal reveal-delay-2">
                Skills built through hands-on projects and certified courses at Saylani and Cisco.
            </p>

            <div className="skills-grid" id="skillsGrid" ref={gridRef}>
                {skills.map((s, i) => (
                    <div className={`skill-card reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`} key={s.name}>
                        <div className="skill-icon">{s.icon}</div>
                        <div className="skill-name">{s.name}</div>
                        <div className="skill-desc">{s.desc}</div>
                        <div className="skill-bar-wrap">
                            <div className="skill-bar-fill" data-pct={s.pct}></div>
                        </div>
                        <div className="skill-pct">{s.pct}%</div>
                        {s.cert && <div className="skill-cert-tag">Cisco Certified</div>}
                    </div>
                ))}
            </div>
        </section>
    );
}
