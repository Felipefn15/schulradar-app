import "./index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form() {
  return (
    <div className="worksWrapper">
      <div className="formHead">
        <h1>Anmeldung & Kontakt</h1>
        <p>
          Wir arbeiten gerade intensiv am Schulradar. Melden Sie sich nun
          kostenlos an und erfahren als Erste vom Launch des Schulradars.{" "}
        </p>
      </div>
      <div className="formBox">
        <div className="formWrapper">
          <TextField label="Vorname" variant="standard" className="formField" />
          <TextField
            label="Nachname"
            variant="standard"
            className="formField"
          />
          <TextField
            label="E-Mail-Adresse"
            variant="standard"
            className="formField"
          />
        </div>
        <Button>
          <a href="/" className="registerButton">
            Anmelden
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Form;
