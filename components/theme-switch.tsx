"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  return (
    <label className="theme-switch" aria-label="Toggle light and dark mode">
      <input type="checkbox" className="theme-switch__checkbox" checked={light} onChange={(event) => setLight(event.target.checked)} />
      <div className="theme-switch__container">
        <div className="theme-switch__clouds" />
        <div className="theme-switch__stars-container">✦</div>
        <div className="theme-switch__circle-container">
          <div className="theme-switch__sun-moon-container">
            <div className="theme-switch__moon">
              <div className="theme-switch__spot" />
              <div className="theme-switch__spot" />
              <div className="theme-switch__spot" />
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
