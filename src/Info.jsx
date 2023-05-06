import github from "/github-mark.svg";
import "./scss/info.scss";

export function Info() {
  const githubRepo = "https://github.com/yoNico21/AR-Seagarden";
  const description = `seagarden.app is a web-based augmented reality application created by Niels Nicola as a result of an art school assignment. It acts as a second layer on top of Park Zypendaal and Sonsbeek located in Arnhem. Displaying imagery of a sea garden for people to explore while going for a walk in the park. If you want to take a look under the hood you can access the repository on GitHub.`;

  return (
    <>
      <section className="info">
        <p className="project-description">{description}</p>
        <button className="btn btn-github">
          <a href={githubRepo} className="repo-hyperlink" target="_blank">
            <img src={github} alt="github-mark" />
            yoNico21/AR-Seagarden
          </a>
        </button>
      </section>
    </>
  );
}
