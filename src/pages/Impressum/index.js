import React from "react";
import Obfuscate from 'react-obfuscate';
import styled from "styled-components";

import Container from "../../Container";
import { H2 } from "../../Headings";
import Navbar from "../../Navbar";

const Bold = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-bottom: 4px;
`;

const Content = styled.div`
  flex: 1 1 0%;
  align-self: flex-start;

  a {
    text-decoration: none;
  }
`;

function ImpressumPage() {
  return (
    <>
      <Navbar logoSrc="/use-react-logo.svg" brandName="UseReact.io" />
      <Container>
        <Content>
          <H2>Impressum</H2>
          <p>
            Jürgen Wagner
            <br />
            <br />
            Universumstraße 31a/24
            <br />
            1200
            <br />
            Wien
            <br />
            Österreich
            <br />
            <br />
            <Obfuscate tel="+43 (0) 660 766 85 08" />
            <br />
            <Obfuscate email="office@usereact.io" />
            <br />
            <br />
            <Bold>Unternehmensgegenstand: </Bold> IT Dienstleistungen
            <br />
            <Bold>UID-Nummer: </Bold> ATU72872108
            <br />
            <Bold>Gewerbeordnung: </Bold> www.ris.bka.gv.at
            <br />
            <Bold>Aufsichtsbehörde: </Bold> Magistratisches Bezirksamt 20. Bezirk
            <br />
            <Bold>Berufsbezeichnung: </Bold> Softwareentwicklung
            <br />
            <Bold>Verleihungsstaat: </Bold> Österreich
            <br />
          </p>
        </Content>
      </Container>
    </>
  );
}

export default ImpressumPage;
