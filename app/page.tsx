"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "../components/theme-switch";

function PencilLoader() {
  return <div className="pencil-loader-screen" role="status" aria-label="Loading portfolio"><div className="pencil-loader-wrap"><div className="pencil-loader-art"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="pencil"><defs><clipPath id="pencil-eraser"><rect height="30" width="30" ry="5" rx="5" /></clipPath></defs><circle transform="rotate(-113,100,100)" strokeLinecap="round" strokeDashoffset="439.82" strokeDasharray="439.82 439.82" strokeWidth="2" stroke="#d8d8d8" fill="none" r="70" className="pencil__stroke" /><g transform="translate(100,100)" className="pencil__rotate"><g fill="none"><circle transform="rotate(-90)" strokeDashoffset="402" strokeDasharray="402.12 402.12" strokeWidth="30" stroke="#5f7f6b" r="64" className="pencil__body1" /><circle transform="rotate(-90)" strokeDashoffset="465" strokeDasharray="464.96 464.96" strokeWidth="10" stroke="#91aa98" r="74" className="pencil__body2" /><circle transform="rotate(-90)" strokeDashoffset="339" strokeDasharray="339.29 339.29" strokeWidth="10" stroke="#3f5f4c" r="54" className="pencil__body3" /></g><g transform="rotate(-90) translate(49,0)" className="pencil__eraser"><g className="pencil__eraser-skew"><rect height="30" width="30" ry="5" rx="5" fill="#91aa98" /><rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="#718b7a" /><rect height="20" width="30" fill="#e7e7e4" /><rect height="20" width="15" fill="#bdbdb9" /><rect height="20" width="5" fill="#d3d3cf" /><rect height="2" width="30" y="6" fill="rgba(20,30,24,.2)" /><rect height="2" width="30" y="13" fill="rgba(20,30,24,.2)" /></g></g><g transform="rotate(-90) translate(49,-30)" className="pencil__point"><polygon points="15 0,30 30,0 30" fill="#d6b27a" /><polygon points="15 0,6 30,0 30" fill="#a77b4d" /><polygon points="15 0,20 10,10 10" fill="#202823" /></g></g></svg></div><span className="pencil-loader-label">drawing up portfolio</span></div></div>;
}

const skills = ["Java", "JavaScript", "Node.js", "Next.js", "React", "HTML & CSS", "Puppeteer", "Web Scraping", "CSV & Data Processing", "Git & GitHub", "Vercel", "UI / UX"];

const projects = [
  { title: "STUKO", type: "Study platform", text: "An all-in-one study tool designed around interests, personality, and a genuinely cute UI." },
  { title: "Community Map Platform", type: "Web platform", text: "A community-focused mapping project built to make local information easier to discover and explore." },
  { title: "EAMCET 2027", type: "Education platform", text: "A student-focused web project with data-driven tooling and an evolving 2027 exam experience." },
  { title: "Project 04", type: "Experiment", text: "A space for the next idea worth building." },
  { title: "Project 05", type: "Experiment", text: "More things are being designed, tested, and shipped." },
  { title: "Project 06", type: "Experiment", text: "The portfolio is still growing — so is the work." },
];

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 1100); return () => window.clearTimeout(timer); }, []);
  if (!ready) return <PencilLoader />;

  return <main className="site-shell">
    <nav className="nav"><a className="brand" href="#top">AB / 2026</a><div className="nav-links"><a href="#about">about</a><a href="#skills">skills</a><a href="#work">my work</a><a href="#contact">contact</a><ThemeSwitch /></div></nav>

    <section className="hero" id="top"><div className="hero-inner"><div className="eyebrow">Computer Science · builder · creative problem solver</div><h1>Building uniquely<br />beautiful stuff.</h1><p className="hero-copy">I&apos;m <strong>Anjani Beesu</strong> — a B.Tech Computer Science &amp; Engineering student who enjoys turning ideas into useful, thoughtful, and slightly unusual digital experiences.</p><div className="actions"><a className="button primary" href="#work">See my work ↗</a><a className="button" href="#contact">Let&apos;s talk</a></div></div><div className="corner-note">SCROLL TO EXPLORE ↓</div></section>

    <section className="section about-section" id="about"><div className="section-label">01 / about me</div><div className="about-grid"><div><h2>Hi, I&apos;m Anjani.</h2><p>I&apos;m currently pursuing my <strong>B.Tech in Computer Science &amp; Engineering</strong>.</p><p><strong>Semester 1 GPA: 9.15</strong></p><p>I like building things that are more than technically functional — I want them to feel intentional, useful, and uniquely beautiful.</p></div><div className="leadership"><div className="mini-label">LEADERSHIP</div><h3>Class Representative</h3><p className="date">AUG 2025 — PRESENT</p><p>Serving as CR and coordinating communication, academic requirements, and student activities. I&apos;ve organized several departmental events and helped organize a college-level event.</p></div></div></section>

    <section className="section" id="skills"><div className="section-label">02 / skills</div><h2>Tools I build with.</h2><div className="skills-grid">{skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}</div></section>

    <section className="section work-section" id="work"><div className="section-label">03 / my work</div><h2>Things I&apos;ve built.</h2><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><span className="project-number">0{index + 1}</span><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.text}</p></div><span className="project-arrow">↗</span></article>)}</div></section>

    <section className="section contact-section" id="contact"><div className="section-label">04 / contact me</div><div className="contact-grid"><div><h2>Have an idea?<br />Send it my way.</h2><p>Whether it&apos;s an internship, collaboration, project, or simply an interesting conversation — I&apos;d love to hear from you.</p></div><form className="contact-form" action="/api/contact" method="POST"><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell me what&apos;s on your mind..." rows={5} required /></label><button className="button primary" type="submit">Send message ↗</button></form></div></section>

    <footer className="footer">© 2026 Anjani Beesu · designed &amp; built from scratch.</footer>
  </main>;
}
