import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const onMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.12;
      pos.current.ry += (my - pos.current.ry) * 0.12;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
      ring.style.left = pos.current.rx + "px";
      ring.style.top = pos.current.ry + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    const rafId = requestAnimationFrame(animate);

    const onEnter = () => {
      cur.style.width = "18px";
      cur.style.height = "18px";
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "var(--orange)";
    };

    const onLeave = () => {
      cur.style.width = "10px";
      cur.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "var(--charcoal)";
    };

    const addHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addHover();
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={curRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
