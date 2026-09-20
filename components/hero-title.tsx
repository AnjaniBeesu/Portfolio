"use client";

import { useEffect, useState } from "react";

const words = ["INNOVATIVE", "CREATIVE", "UNIQUE", "WORTH CLICKING ON", "SIMPLE TO USE"];

export default function HeroTitle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 55 : 105;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, display.length + 1);
        setDisplay(next);
        if (next === word) {
          window.setTimeout(() => setDeleting(true), 950);
        }
      } else {
        const next = word.slice(0, Math.max(0, display.length - 1));
        setDisplay(next);
        if (!next) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [display, deleting, wordIndex]);

  return (
    <h1 className="hero-title">
      BUILDING TECH THAT&apos;S
      <br />
      <span className="hero-rotating-word" aria-live="polite">
        <span className="hero-rotating-word-text">{display}</span>
      </span>
    </h1>
  );
}
