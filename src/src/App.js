import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
import Title from "./Title";
import Link from "./Link";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <img src="/use-react-logo.svg" width="150" height="120" alt="logo" />
        </div>
        <Title.Base>
          <Title.H1>
            <span style={{ color: "#96d7c8" }}>{"<"}</span>
            {"UseReact"}
            <span style={{ color: "#96d7c8" }}>{"/>"}</span>
          </Title.H1>
          <Title.Subtitle>React Workshops in der Werkstatt A</Title.Subtitle>
        </Title.Base>

        <div className="text-center mt2">Nächster Termin: </div>
        <div className="text-center" style={{ color: "#98b05d" }}>
          <strong>14. Februar 2019 - 15. Februar 2019</strong>
        </div>
        <div className="text-center" style={{ color: "#98b05d" }}>
          React Workshop für Anfänger
        </div>
        <div className="mt2 text-center">
          <span>Interesse? </span>
          <Link href="http://eepurl.com/dNFZT-/">
            Melde dich zum Newsletter an
          </Link>
        </div>
        <div className="flex justify-center flex-wrap">
          <Person.Base>
            <Person.Avatar src="/juergen_wagner.jpg" />
            <Person.Name>Jürgen Wagner</Person.Name>
            <Link target="_blank" href="https://wagnersolutions.at">
              wagnersolutions.at
            </Link>
          </Person.Base>
          <Person.Base>
            <Person.Avatar src="/gerald_urschitz.jpg" />
            <Person.Name>Gerald Urschitz</Person.Name>
            <Link target="_blank" href="https://chatbird.io">
              chatbird.io
            </Link>
          </Person.Base>
        </div>
        <div className="mb2">
          <Link
            href="https://www.iubenda.com/privacy-policy/88001001"
            title="Datenschutzerklärung"
            style={{ fontSize: 10 }}
          >
            Datenschutzerklärung
          </Link>
        </div>
      </Container>
    );
  }
}

export default App;
