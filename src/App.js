import React, { Component } from "react";
import "./App.css";
import Container from "./Container";
import Link from "./Link";
import Partner from "./Partner";
import Person from "./Person";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Button from "./Button";
import { H1, H2, H3 } from "./Headings";
import Typist from "react-typist";

class App extends Component {
  render() {
    return (
      <>
        <Navbar logoSrc="/use-react-logo.svg" brandName="UseReact.io" />
        <Container>
          <div>
            <H1 className="mb0 text-center">
              Modernes React
              <Typist avgTypingDelay={100}>
                Lernen
                <Typist.Backspace count={6} delay={2000} />
                Anwenden
                <Typist.Backspace count={8} delay={2000} />
                Verstehen
              </Typist>
            </H1>
            <div className="text-center">
              React Workshops in der&nbsp;
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.werkstatt-a.at"
              >
                Werkstatt A
              </Link>
            </div>
            <Hero className="mt3">
              Nimm' teil an einem 2 Tage langem Intensivkurs, bei dem sich alles
              um React dreht. Du wirst lernen, wie du mit React loslegen kannst,
              um deine eigenen Web Applications zu programmieren oder
              existierende Web Applications mit React zu erweitern. Wir zeigen
              dir moderne Funktionen und Patterns von React, und fokussieren uns
              auf den "State-of-the-Art" mit einem Blick in die Zukunft.
              <div className="text-center mt2 bold">Nächster Termin: </div>
              <div className="text-center" style={{ color: "#98b05d" }}>
                React Workshop für Anfänger
              </div>
              <div className="text-center" style={{ color: "#98b05d" }}>
                <strong>14. Februar 2019 - 15. Februar 2019</strong>
              </div>
              <div className="flex justify-center">
                <Button className="mt2" disabled={true}>
                  Zur Anmeldung
                </Button>
              </div>
              <div className="bold text-center mt1">
                Anmeldung startet in Kürze.
              </div>
              <div className="mt2 text-center">
                Bleib informiert und&nbsp;
                <Link href="http://eepurl.com/dNFZT-/">
                  melde dich zum Newsletter an.
                </Link>
              </div>
            </Hero>
          </div>

          <div>
            <H2 className="text-center mb0">Was du dir erwarten kannst</H2>
            <div
              style={{ maxWidth: 1200 }}
              className="flex flex-column items-center"
            >
              <ul style={{ flex: 1 }}>
                <H3>Inhalt</H3>
                <li>ES6 & JSX</li>
                <li>Was ist React und wie lege ich damit los?</li>
                <li>Components & Rendering</li>
                <li>React Data Flow & Lifecycle</li>
                <li>Formulare erstellen und HTTP Requests absetzen</li>
                <li>Controlled vs. Uncontrolled Components</li>
                <li>Deklaratives React</li>
                <li>Context API</li>
                <li>Bessere Components bauen mit Compound Components</li>
                <li>Styling mit styled-components</li>
                <li>Flux Architecture</li>
                <li>Testen von Components</li>
                <li>Die Zukunft von React: Hooks & Suspense</li>
                <li>Viel Zeit für Q&A</li>
              </ul>
              <div style={{ flex: 1 }}>
                <H3>Ablauf</H3>
                <div>
                  Wir werden jedes Thema/Kapitel in einem Vortrag genau
                  erklären. Nach jedem Vortrag gibt es eine Übung, in der du die
                  neu erlernten Themen selbst anhand von Beispielen verfestigen
                  kannst. Während der Übungszeit gehen wir durch und helfen dir
                  persönlich. Wenn du schneller als die anderen bist, kannst du
                  die Beispiele erweitern, oder du hilfst deinen Kolleg/inn/en
                  und verfestigst somit das Gelernte. Außerdem gibt es immer
                  genug Zeit für Fragen. Auch die Pausen kommen nicht zu kurz.
                </div>
                <H3>Voraussetzung</H3>
                <div>
                  Wir setzen minimale Erfahrungen mit{" "}
                  <strong>JavaScript & HTML</strong> voraus. Du musst dabei kein
                  Profi sein, aber zumindest eine Ahnung haben, wie Websites mit
                  JavaScript und HTML funktionieren.
                  <br /> <br /> Weiters gehen wir davon aus, dass du dein{" "}
                  <strong>eigenes Notebook</strong> mitbringst. Dies hat auch
                  den Vorteil, dass wir dir beim einrichten deiner persönlichen
                  Entwicklungsumgebung helfen können. Es ist dabei egal, ob du
                  macOS, Windows oder unixähnliches Betriebssystem verwendest.
                </div>
                <H3>Teilnahmegebühr</H3>
                <div>899 € exkl. MwSt. pro Person</div>
                <H3>Was ist noch dabei</H3>
                <div>
                  <div>Vor und nach dem Kurs:</div>
                  <ul>
                    <li>
                      Zugang zu den Beispielen und den digitalen Kursunterlagen
                    </li>
                    <li>
                      Zugang zum Slack-Team, wo ihr mit uns und untereinander
                      kommunizieren könnt
                    </li>
                  </ul>
                  <div>Während dem Kurs:</div>

                  <ul>
                    <li>Kaffee, Snacks & Getränke den ganzen Tag</li>
                    <li>ein Mittagsbuffet aus der Region</li>
                    <li>
                      regionales Bier von{" "}
                      <Link
                        href="https://bierkanter.at"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Bierkanter
                      </Link>{" "}
                      zum Ausklang des Tages
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <H2 className="text-center">Wer sind wir?</H2>
            <div className="flex justify-center flex-wrap">
              <Person style={{ flex: 1 }}>
                <Person.Avatar src="/juergen_wagner.jpg" style={{ backgroundPosition: '20% 33%' }} />
                <Person.Name>Jürgen Wagner</Person.Name>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wagnersolutions.at"
                >
                  wagnersolutions.at
                </Link>
                <Person.Description className="mt2 text-center">
                  Jürgen ist ein Experte für Web Applikationen mit über 7 Jahren Erfahrung.
                  In der Vergangenheit leitete er verschiedene Teams und sammelte Know-How in diversen Technologien.
                  In den letzten Jahren fokussierte er sich vor allem in den Bereichen React und AWS Serverless Architektur.
                </Person.Description>
              </Person>
              <Person style={{ flex: 1 }}>
                <Person.Avatar src="/gerald_urschitz.jpg" />
                <Person.Name>Gerald Urschitz</Person.Name>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chatbird.io"
                >
                  chatbird.io
                </Link>
                <Person.Description className="mt2 text-center">
                  Gerald blickt auf über 5 Jahre Erfahrung als professioneller
                  Fullstack Web Entwickler zurück. Neben React hat er Erfahrung
                  mit Ruby on Rails, AngularJS und Android. Mit Chatbird
                  arbeitet er an einer Web App, mit deren Hilfe man neue Leute
                  auf Veranstaltungen kennenlernen kann.
                </Person.Description>
              </Person>
            </div>
          </div>

          <div className="mt3 text-center">
            <H2 className="mb0">Partner</H2>
            <Partner />
          </div>

          <div className="mb2">
            <Link
              href="https://www.iubenda.com/privacy-policy/88001001"
              title="Datenschutzerklärung"
              style={{ fontSize: 14 }}
            >
              Datenschutzerklärung
            </Link>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
