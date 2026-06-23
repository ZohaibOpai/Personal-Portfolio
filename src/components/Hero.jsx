import { useState, useEffect } from "react";

const words = [
  "Web Developer",
  "HTML Craftsman",
  "CSS Artist",
  "JS Engineer",
  "App Builder",
  "Saylani Student",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let wIdx = 0, cIdx = 0, deleting = false;
    let timer;

    const type = () => {
      const word = words[wIdx];
      if (!deleting) {
        cIdx++;
        setTypedText(word.slice(0, cIdx));
        if (cIdx === word.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        cIdx--;
        setTypedText(word.slice(0, cIdx));
        if (cIdx === 0) {
          deleting = false;
          wIdx = (wIdx + 1) % words.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 110);
    };

    timer = setTimeout(type, 110);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-tag">Available for opportunities</div>

        <h1 className="hero-name">
          Zohaib<br /><em>Opai</em>
        </h1>

        <div className="hero-title-row">
          <div className="hero-title-line"></div>
          <div className="hero-typed">
            <span id="typed-text">{typedText}</span>
            <span className="cursor-blink"></span>
          </div>
        </div>

        <p className="hero-desc">
          A passionate web and app developer in training at{" "}
          <strong>Saylani Welfare IT</strong>, building modern digital
          experiences with HTML, CSS, JavaScript, and beyond.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>

        <br />
        <a href="/Profile.pdf" download className="btn-primary">Download CV</a>
        <br />

        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">3<span>+</span></div>
            <div className="hero-stat-label">Cisco Certs</div>
          </div>
          <div>
            <div className="hero-stat-num">ES<span>6</span></div>
            <div className="hero-stat-label">JS Level</div>
          </div>
          <div>
            <div className="hero-stat-num">1<span>yr</span></div>
            <div className="hero-stat-label">Learning</div>
          </div>
        </div>

        <div className="scroll-indicator">Scroll down</div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-bg-text">Z</div>
          <div className="hero-code-block">
            <div className="code-comment">// zohaib.config.js</div>
            <div>&nbsp;</div>
            <div>
              <span className="code-key">const</span>{" "}
              <span className="code-dot">developer</span> = {"{"}
            </div>
            <div>&nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-str">"Zohaib Opai"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-key">role</span>: <span className="code-str">"Web Developer"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-key">institute</span>: <span className="code-str">"Saylani"</span>,</div>
            <div>&nbsp;&nbsp;<span className="code-key">stack</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"HTML"</span>, <span className="code-str">"CSS"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"JavaScript"</span>, <span className="code-str">"ES6"</span></div>
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;<span className="code-key">status</span>: <span className="code-str">"Learning hard"</span></div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
