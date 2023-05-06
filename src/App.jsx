import { useState } from "react";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { Footer } from "./Footer";
import "./scss/app.scss";

import "../node_modules/destyle.css/destyle.css";
import "./scss/app.scss";

function App() {
  return (
    <>
      <Hero />
      <Info />
      <Footer />
    </>
  );
}

export default App;
