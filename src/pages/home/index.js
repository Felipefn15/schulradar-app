import "./index.css";
import Button from "@mui/material/Button";
import About from "../about";
function Home() {
  return (
    <div className="homeWrapper">
      <div className="registerNowWrapper">
        <h1 className="registerNowTitle">
          WIR FINDEN DIE BESTE SCHULE FÜR IHR KIND!
        </h1>
        <p style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
          Insgesamt vergleichen wir über 1.000.000 Datensätze von der
          Lehrerbewertungsapp Lernsieg mit den Talenten von Ihrem Kind, um dann
          klare Statistiken für Sie zu generieren.
        </p>
        <Button>
          <a href="/form" className="registerNowButton">
            JETZT ANMELDEN
          </a>
        </Button>
      </div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
        <About />
      </div>
    </div>
  );
}

export default Home;
