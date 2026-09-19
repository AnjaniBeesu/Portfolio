"use client";

import { useEffect, useState } from "react";
import ThemeSwitch from "../components/theme-switch";

function PencilLoader() {
  return (
    <div className="pencil-loader-screen" role="status" aria-label="Loading portfolio">
      <div className="pencil-loader-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="pencil">
          <defs><clipPath id="pencil-eraser"><rect height="30" width="30" ry="5" rx="5" /></clipPath></defs>
          <circle transform="rotate(-113,100,100)" strokeLinecap="round" strokeDashoffset="439.82" strokeDasharray="439.82 439.82" strokeWidth="2" stroke="currentColor" fill="none" r="70" className="pencil__stroke" />
          <g transform="translate(100,100)" className="pencil__rotate">
            <g fill="none">
              <circle transform="rotate(-90)" strokeDashoffset="402" strokeDasharray="402.12 402.12" strokeWidth="30" stroke="currentColor" r="64" className="pencil__body1" />
              <circle transform="rotate(-90)" strokeDashoffset="465" strokeDasharray="464.96 464.96" strokeWidth="10" stroke="currentColor" r="74" className="pencil__body2" />
              <circle transform="rotate(-90)" strokeDashoffset="339" strokeDasharray="339.29 339.29" strokeWidth="10" stroke="currentColor" r="54" className="pencil__body3" />
            </g>
            <g transform="rotate(-90) translate(49,0)" className="pencil__eraser"><g className="pencil__eraser-skew">
              <rect height="30" width="30" ry="5" rx="5" fill="currentColor" /><rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="currentColor" /><rect height="20" width="30" fill="currentColor" /><rect height="20" width="15" fill="currentColor" /><rect height="20" width="5" fill="currentColor" /><rect height="2" width="30" y="6" fill="currentColor" opacity=".35" /><rect height="2" width="30" y="13" fill="currentColor" opacity=".35" />
            </g></g>
            <g transform="rotate(-90) translate(49,-30)" className="pencil__point"><polygon points="15 0,30 30,0 30" fill="currentColor" /><polygon points="15 0,6 30,0 30" fill="currentColor" /><polygon points="15 0,20 10,10 10" fill="currentColor" /></g>
          </g>
        </svg>
        <div className="pencil-drawing-line" aria-hidden="true" />
        <span className="pencil-loader-label">drawing up portfolio</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setReady(true), 1100); return () => window.clearTimeout(timer); }, []);
  if (!ready) return <PencilLoader />;
  return (
    <main className="site-shell">
      <nav className="nav"><a className="brand" href="#top">AB / 2026</a><div className="nav-links"><a href="#about">about</a><a href="#work">work</a><a href="#contact">contact</a><ThemeSwitch /></div></nav>
      <section className="hero" id="top"><div className="hero-inner"><div className="eyebrow">CSE student · builder · curious human</div><h1>Building things<br />worth clicking.</h1><p className="hero-copy">I&apos;m <strong>Anjani Beesu</strong> — a computer science student who likes turning ideas into useful, slightly unusual digital experiences.</p><div className="actions"><a className="button primary" href="#work">Explore my work ↗</a><a className="button" href="mailto:hello@anjanibeesu.dev">Say hello</a></div></div><div className="corner-note">SCROLL TO EXPLORE ↓</div></section>
      <section className="section" id="about"><div className="section-label">01 / about</div><h2>Code, curiosity &amp; a little chaos.</h2><p>I&apos;m studying Computer Science and building my way through the web — from full-stack products and community-focused tools to experiments that help me learn by doing.</p></section>
      <section className="section" id="work"><div className="section-label">02 / selected work</div><h2>Projects coming alive.</h2><p>This space will become the home for STUKO, Community Map, future experiments, and the projects that best show how I think, build, and solve problems.</p></section>
      <section className="section" id="contact"><div className="section-label">03 / contact</div><h2>Let&apos;s make something.</h2><p>Open to internships, collaborations, interesting ideas, and conversations.</p><div className="actions"><a className="button primary" href="mailto:hello@anjanibeesu.dev">Email me ↗</a><a className="button" href="https://github.com/AnjaniBeesu" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      <footer className="footer">© 2026 Anjani Beesu · designed &amp; built from scratch.</footer>
    </main>
  );
}
