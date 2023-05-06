import "./scss/footer.scss";

export function Footer() {
  const date = "©" + " " + new Date().getFullYear();
  const https = "https://";

  const seagardenApp = "seagarden.app";
  const seagarden = (
    <>
      <a href={https + seagardenApp}>{seagardenApp}</a>
    </>
  );

  const mySite = "nielsnicola.xyz";
  const nielsnicola = (
    <>
      <a href={https + mySite} target="_blank">
        {mySite}
      </a>
    </>
  );

  return (
    <>
      <section className="footer">
        <p className="copyright">
          {date} {seagarden} by {nielsnicola}
        </p>
      </section>
    </>
  );
}
