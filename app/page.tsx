"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "../components/theme-switch";

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 1100); return () => window.clearTimeout(timer); }, []);
  if (!ready) return null;
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">AB / 2026</a>
        <div className="nav-links"><a href="#about">about</a><a href="#work">work</a><a href="#contact">contact</a><ThemeSwitch /></div>
      </nav>
      <section className="hero" id="top"><div className="hero-inner"><div className="eyebrow">CSE student · builder · curious human</div><h1>Building things<br />worth clicking.</h1><p className="hero-copy">I&apos;m <strong>Anjani Beesu</strong> — a computer science student who likes turning ideas into useful, slightly unusual digital experiences.</p><div className="actions"><a className="button primary" href="#work">Explore my work ↗</a><a className="button" href="mailto:hello@anjanibeesu.dev">Say hello</a></div></div><div className="corner-note">SCROLL TO EXPLORE ↓</div></section>
      <section className="section" id="about"><div className="section-label">01 / about</div><h2>Code, curiosity &amp; a little chaos.</h2><p>I&apos;m studying Computer Science and building my way through the web — from full-stack products and community-focused tools to experiments that help me learn by doing.</p></section>
      <section className="section" id="work"><div className="section-label">02 / selected work</div><h2>Projects coming alive.</h2><p>This space will become the home for STUKO, Community Map, future experiments, and the projects that best show how I think, build, and solve problems.</p></section>
      <section className="section" id="contact"><div className="section-label">03 / contact</div><h2>Let&apos;s make something.</h2><p>Open to internships, collaborations, interesting ideas, and conversations.</p><div className="actions"><a className="button primary" href="mailto:hello@anjanibeesu.dev">Email me ↗</a><a className="button" href="https://github.com/AnjaniBeesu" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      <footer className="footer">© 2026 Anjani Beesu · designed &amp; built from scratch.</footer>
    </main>
  );
}
