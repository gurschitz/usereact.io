import React, { useState } from "react";
import styled from "styled-components";
import posed from "react-pose";

import { H3 } from "../Headings";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  margin: 0 0 32px 0;
`;

const Collapsable = posed.div({
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 500 } }
});

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

function RegisterForm({ className }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={className}>
      <form name="request" data-netlify="true">
        <Collapsable
          pose={collapsed ? "closed" : "open"}
          style={{ overflow: "hidden" }}
        >
          <H3 className="text-center" style={{ marginBottom: 16 }}>
            Anfrage
          </H3>
          <Grid>
            <InputGroup>
              <Label>Name</Label>
              <Input name="name" />
            </InputGroup>
            <InputGroup>
              <Label>Firma</Label>
              <Input name="company" />
            </InputGroup>
            <InputGroup>
              <Label type="email">E-Mail</Label>
              <Input name="email" />
            </InputGroup>
            <InputGroup>
              <Label type="tel">Telefon</Label>
              <Input name="phone" />
            </InputGroup>
          </Grid>
        </Collapsable>
        {collapsed && (
          <div
            className="flex justify-center"
            onClick={() => setCollapsed(false)}
          >
            <Button>Zur Anfrage</Button>
          </div>
        )}
        {!collapsed && (
          <div className="flex justify-center">
            <Button>Anfrage senden</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
