"use client";

import "./toy-camera.css";

export default function ToyCamera() {
  return (
    <div className="toy-camera-container">
      <label className="toy-camera-wrapper">
        <input type="checkbox" className="toy-camera-input" aria-label="Take a photo" />
        <div className="toy-camera-body">
          <div className="toy-camera-button" />
          <div className="toy-camera-lens">
            <span className="toy-camera-lens-glow" />
          </div>
          <div className="toy-camera-photo" aria-hidden="true">
            <div className="photo-image">
              <span>SNAPSHOT</span>
              <b>ANJANI</b>
            </div>
            <div className="photo-text" />
            <div className="photo-text photo-text-short" />
          </div>
        </div>
        <div className="toy-camera-shadow" />
      </label>
    </div>
  );
}
