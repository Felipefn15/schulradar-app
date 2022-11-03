import "./index.css";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";

function HowWorks() {
  return (
    <div className="worksWrapper">
      <h1>So funktioniert`s</h1>
      <p>Weil die Wahl der richtigen Schule eine wichtige Entscheidung ist.</p>
      <div className="worksVideo">
        <iframe src="https://player.vimeo.com/video/766812917?h=eabbf21982" width={"100%"}
          height={"100%"} frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
      </div>
      <div className={"box"}>
        <div className="boxText">
          <h2>👇 TALENT-CHECK</h2>
          <p>
            Wählen Sie die Talente Ihrer Kinder aus oder lassen Sie Ihr Kind
            unseren kostenlosen Check machen.
          </p>
        </div>
        <div className="boxText">
          <h2>✍ SCHULEN AUSWÄHLEN </h2>
          <p>
            Wählen Sie Schulen aus, die Sie vergleichen wollen oder geben den
            Radius ein, um eine Vorschlagsliste an guten Schulen zu erhalten.
          </p>
        </div>
        <div className="boxText">
          <h2>🚀 LOS GEHT`S</h2>
          <p>
            Zahlen Sie 19,30 Euro pro Vergleich und erhalten sofort Statistiken
            was die beste Schule für Ihr Kind ist.
          </p>
        </div>
      </div>
      <div className={"buttonWrapper"}>
        <Button>
          <a href="/form" className="registerNowButton">
            JETZT ANMELDEN
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HowWorks;
