import type { Metadata } from "next";
import "./globals.css";
import "./hero-underline.css";
import SplashCursor from "../components/SplashCursor";

export const metadata: Metadata = {
  title: "Anjani Beesu — Portfolio",
  description: "The portfolio of Anjani Beesu, a CSE student and builder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#89d8be"
        />
        {children}
      </body>
    </html>
  );
}
