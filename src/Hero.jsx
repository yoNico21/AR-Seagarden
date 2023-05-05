import logo from "/logo-min.svg";
import "./scss/hero.scss";

export function Hero() {
  const subtext = `Take a deep dive through this digital garden full of sea creatures.`;

  return (
    <>
      <section className="hero">
        <img src={logo} className="logo" />
        <h3 className="subtext">{subtext}</h3>
        <button className="btn btn-start">Start Experience</button>
      </section>
    </>
  );
}
