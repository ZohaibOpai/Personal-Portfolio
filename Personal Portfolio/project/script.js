// ── CURSOR ──
const cur = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
});
function animCursor() {
    cur.style.left = mx + "px";
    cur.style.top = my + "px";
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll("a,button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cur.style.width = "18px";
        cur.style.height = "18px";
        ring.style.width = "50px";
        ring.style.height = "50px";
        ring.style.borderColor = "var(--orange)";
    });
    el.addEventListener("mouseleave", () => {
        cur.style.width = "10px";
        cur.style.height = "10px";
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "var(--charcoal)";
    });
});

// ── NAV SCROLL ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ── HAMBURGER ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () =>
    navLinks.classList.toggle("open"),
);
navLinks
    .querySelectorAll("a")
    .forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("open")),
    );

// ── TYPING EFFECT ──
const words = [
    "Web Developer",
    "HTML Craftsman",
    "CSS Artist",
    "JS Engineer",
    "App Builder",
    "Saylani Student",
];
let wIdx = 0,
    cIdx = 0,
    deleting = false;
const typedEl = document.getElementById("typed-text");
function type() {
    const word = words[wIdx];
    if (!deleting) {
        typedEl.textContent = word.slice(0, ++cIdx);
        if (cIdx === word.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typedEl.textContent = word.slice(0, --cIdx);
        if (cIdx === 0) {
            deleting = false;
            wIdx = (wIdx + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 60 : 110);
}
type();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("revealed");
            }
        });
    },
    { threshold: 0.1 },
);
revealEls.forEach((el) => revealObs.observe(el));

// ── SKILL BARS ──
const barObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                const fills = e.target.querySelectorAll(".skill-bar-fill");
                fills.forEach((f) => {
                    f.style.width = f.dataset.pct + "%";
                });
            }
        });
    },
    { threshold: 0.2 },
);
barObs.observe(document.getElementById("skillsGrid"));

// ── TIMELINE REVEAL ──
const tlObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                const items = document.querySelectorAll(".tl-item");
                items.forEach((item, i) => {
                    setTimeout(() => item.classList.add("revealed"), i * 200);
                });
            }
        });
    },
    { threshold: 0.1 },
);
tlObs.observe(document.getElementById("timeline"));

// ── FORM BUTTON ──
document.getElementById("formBtn").addEventListener("click", function () {
    this.textContent = "Message Sent!";
    this.style.background = "#4caf50";
    setTimeout(() => {
        this.textContent = "Send Message";
        this.style.background = "";
    }, 3000);
});