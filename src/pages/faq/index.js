import "./index.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function FAQ() {
  return (
    <div className="faqWrapper">
      <h1>Häufig gestellte Fragen</h1>
      <div className="cardsWrapper">
        <Card className="cardFaq">
          <CardContent>
            <h2 className="cardTitle">Wie läuft das konkret ab?</h2>
            <p className="cardText">
              Schulradar ist recht simple zu verwenden. Zuerst finden Sie mit
              unserem Check die Talente Ihres Kindes kostenlos heraus. Dann
              wählen Sie aus, ob Sie bereits Schulen zum Vergleich haben oder
              eine Empfehlungsliste haben wollen. Nach der Bezahlung erhalten
              Sie sofort auf der Website, als auch per E-Mail die Statistiken
              und Empfehlungen von uns.
            </p>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card className="cardFaq">
          <CardContent>
            <h2 className="cardTitle">Gibt es versteckte Kosten?</h2>
            <p className="cardText">
              Nein, Sie zahlen immer nur einmalig und genau das was wir
              kommunizieren.
            </p>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
      <div className="cardsWrapper">
        <Card className="cardFaq">
          <CardContent>
            <h2 className="cardTitle">
              Wieso wisst ihr was die beste Schule ist?
            </h2>
            <p className="cardText">
              Wir arbeiten mit der Lehrerbewertungsapp Lernsieg zusammen. Sie
              stellt uns die Daten zur Verfügung, die sie über drei Jahre
              gesammelt hat. Millionen Lehrer- und Schulbewertungsdaten fließen
              in unsere Vergleiche ein.
            </p>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
      <div className="cardsWrapper">
        <Card className="cardFaq">
          <CardContent>
            <h2 className="cardTitle">Gibt es versteckte Kosten?</h2>
            <p className="cardText">
              Es beginnt alles mit einer Idee. Vielleicht willst du ein
              Unternehmen gründen. Vielleicht möchtest du ein Hobby in etwas
              Größeres verwandeln. Oder vielleicht hast du ein kreatives
              Projekt, das du mit der Welt teilen möchtest. Was auch immer es
              ist – die Art und Weise, wie du deine Geschichte online
              vermittelst, kann einen gewaltigen Unterschied ausmachen.
            </p>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card className="cardFaq">
          <CardContent>
            <h2 className="cardTitle">Wann geht ihr online?</h2>
            <p className="cardText">
              Zur Zeit arbeiten wir intensiv an der technischen Umsetzung von
              Schulradar. Die Website dient für uns zu sehen wie viele Eltern an
              unserem Angebot interessiert sind. In den nächsten Monaten gehen
              wir online.
            </p>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}

export default FAQ;
