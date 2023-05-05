import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Hero } from "./Hero";

import "../node_modules/destyle.css/destyle.css";
import "./scss/app.scss";

function App() {
  return (
    <>
      <Hero />
      <section className="info">
        <p className="project-description"></p>
      </section>
      <section className="footer">
        <p className="outro"></p>
      </section>
      <Analytics />
    </>
  );
}

export default App;
