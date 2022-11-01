import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HowWorks from "./pages/howWorks";
import Form from "./pages/form";
import "./index.css";
import logo from "./assets/schulradar.png";
import Button from "@mui/material/Button";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <div className="mainWrapper">
      <div className="headerWraper">
        <div className="header">
          <div className="links">
            <Button>
              <a className="linkText" href="/how-works">
                So funktioniert`s
              </a>
            </Button>
            <Button>
              <a href="/form" className="linkText">Anmeldung & Kontakt</a>
            </Button>
          </div>
          <div className="logo">
            <a href="/">
              <img src={logo} alt={"logo"} className="logoImage" />
            </a>
          </div>
          <div className="blank" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-works" element={<HowWorks />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  </BrowserRouter>,
  rootElement
);
