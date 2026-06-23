import { useEffect, useRef } from "react";

const timeline = [
  {
    date: "Start — 2023",
    title: "Enrolled at Saylani Welfare IT",
    desc: "Joined the Web and App Development course at one of Pakistan's most respected free IT institutes. The journey begins.",
    badge: "Milestone",
    active: false,
  },
  {
    date: "2023",
    title: "Cisco HTML Essentials — Certified",
    desc: "Completed and passed Cisco Networking Academy's HTML Essentials course. Semantic HTML5 mastered and globally verified.",
    badge: "Cisco Certificate",
    active: false,
  },
  {
    date: "2023",
    title: "Cisco CSS Essentials — Certified",
    desc: "Levelled up with Cisco's CSS Essentials certification. Flexbox, Grid, and responsive design locked in.",
    badge: "Cisco Certificate",
    active: false,
  },
  {
    date: "2024",
    title: "Cisco JS Essentials 1 — Certified",
    desc: "Earned JavaScript Essentials 1 from Cisco — core programming logic, functions, DOM, and events all validated.",
    badge: "Cisco Certificate",
    active: false,
  },
  {
    date: "Now — 2026",
    title: ["ES6+ JavaScript — Completed", "React.js + Python — In Progress"],
    desc: "Currently deep in ES6 modern JavaScript — classes, modules, destructuring, async/await, and Promises. Going strong!",
    badge: "Active Learning",
    active: true,
  },
];

export default function Journey() {
  const tlRef = useRef(null);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tl.querySelectorAll(".tl-item").forEach((item, i) => {
              setTimeout(() => item.classList.add("revealed"), i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(tl);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="journey">
      <div className="section-tag reveal">My Journey</div>
      <h2 className="section-heading reveal reveal-delay-1">
        The Road<br /><em>Taken</em>
      </h2>
      <p className="section-sub reveal reveal-delay-2">
        From the first HTML tag to ES6 modern JavaScript — a timeline of growth, effort, and certifications.
      </p>

      <div className="timeline" id="timeline" ref={tlRef}>
        {timeline.map((item, i) => (
          <div className="tl-item" key={i}>
            <div className={`tl-dot${item.active ? " active" : ""}`}></div>
            <div className="tl-date">{item.date}</div>
            {Array.isArray(item.title)
              ? item.title.map((t) => <div className="tl-title" key={t}>{t}</div>)
              : <div className="tl-title">{item.title}</div>
            }
            <div className="tl-desc">{item.desc}</div>
            <div className="tl-badge">{item.badge}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
