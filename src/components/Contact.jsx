import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [btnText, setBtnText] = useState("Send Message");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }

    setBtnText("Sending...");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "504ea00c-c0ec-415f-a593-e1bea715b591",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setBtnText("Message Sent! ✅");
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setBtnText("Send Message");
          setSent(false);
        }, 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setBtnText("Failed! Try Again ❌");
      setError(true);
      setTimeout(() => {
        setBtnText("Send Message");
        setError(false);
      }, 3000);
    }
  };

  return (
    <section id="contact">
      <div className="section-tag reveal">Contact</div>
      <h2 className="section-heading reveal reveal-delay-1">
        Let's <em>Connect</em>
      </h2>
      <p className="section-sub reveal reveal-delay-2">
        Open to internships, freelance work, and collaborations. Let's build something great together.
      </p>

      <div className="contact-wrap">
        <div>
          <div className="contact-info-item reveal">
            <div className="contact-icon">@</div>
            <div>
              <div className="contact-info-label">Email</div>
              <div className="contact-info-val">
                <a href="mailto:zohaibdude2505@gmail.com">zohaibdude2505@gmail.com</a>
                <a href="mailto:zohaibclaude@gmail.com">zohaibclaude@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-info-item reveal">
            <div className="contact-icon">IN</div>
            <div>
              <div className="contact-info-label">LinkedIn</div>
              <div className="contact-info-val">
                <a href="" target="_blank" rel="noreferrer">
                  linkedin.com/in/zohaib
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info-item reveal reveal-delay-1">
            <div className="contact-icon">#</div>
            <div>
              <div className="contact-info-label">Phone / WhatsApp</div>
              <div className="contact-info-val">
                <a href="https://api.whatsapp.com/send?phone=+923008218012&text=Hello%21%20Would%20you%20like%20to%20help%20me?" target="_blank" rel="noreferrer">
                  +92 300 821 8012
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info-item reveal reveal-delay-2">
            <div className="contact-icon">GH</div>
            <div>
              <div className="contact-info-label">GitHub</div>
              <div className="contact-info-val">
                <a href="https://github.com/ZohaibOpai" target="_blank" rel="noreferrer">
                  github.com/ZohaibOpai
                </a>
              </div>
            </div>
          </div>

          <div className="social-row reveal reveal-delay-3">
            <a href="https://github.com/ZohaibOpai" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">GH</a>
            <a href="mailto:zohaibdude2505@gmail.com" className="social-btn" title="Email">EM</a>
            <a href="mailto:zohaibclaude@gmail.com" className="social-btn" title="Email">EM</a>
            <a href="https://wa.me/923008218012" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">WA</a>
            <a href="" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">LI</a>
          </div>
        </div>

        <div className="contact-form reveal reveal-delay-1">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className="form-btn"
            onClick={handleSend}
            style={sent ? { background: "#4caf50" } : error ? { background: "#f44336" } : {}}
          >
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
}