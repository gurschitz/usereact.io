import React, { useState } from "react";

import { H3 } from "../Headings";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

import useNetlifyForm from "./useNetlifyForm";

import { Grid, Collapsable, InputGroup } from "./styled";

function RegisterForm({ className }) {
  const [collapsed, setCollapsed] = useState(true);
  const { fields, handleSubmit, formSent, loading, error } = useNetlifyForm("request", {
    name: "foo",
    company: "",
    email: "foo@example.com",
    phone: "000"
  });

  return (
    <div className={className}>
      <form
        name="request"
        onSubmit={handleSubmit}
        data-netlify-honeypt="bot-field"
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <Collapsable
          pose={collapsed || formSent ? "closed" : "open"}
          style={{ overflow: "hidden" }}
        >
          <H3 className="text-center" style={{ marginBottom: 16 }}>
            Anfrage
          </H3>
          <Grid>
            <InputGroup>
              <Label>Name*</Label>
              <Input name="name" required {...fields.name} disabled={loading} />
            </InputGroup>
            <InputGroup>
              <Label>Firma</Label>
              <Input name="company" {...fields.company} disabled={loading} />
            </InputGroup>
            <InputGroup>
              <Label>E-Mail*</Label>
              <Input type="email" name="email" required {...fields.email} disabled={loading} />
            </InputGroup>
            <InputGroup>
              <Label>Telefon*</Label>
              <Input name="phone" type="tel" required {...fields.phone} disabled={loading} />
            </InputGroup>
          </Grid>
        </Collapsable>
        {collapsed && !formSent && (
          <div
            className="flex justify-center"
            onClick={() => setCollapsed(false)}
          >
            <Button>Zur Anfrage</Button>
          </div>
        )}
        {!collapsed && !formSent && (
          <div className="flex justify-center">
            <Button type="submit" disabled={loading}>Anfrage senden</Button>
          </div>
        )}
      </form>
        {formSent && !error && (
          <div className="justify-center text-center" style={{ color: '#2ECC40' }}>
            Die Anfrage wurde erfolgreich versendet. <br />
            Wir werden uns bald bei Ihnen melden.
          </div>
        )}
        {formSent && error && (
          <div className="justify-center text-center " style={{ color: '#FF4136' }}>
            Leider ist ein Fehler bei der Anfrage aufgetreten. <br />
            <span>Bitte senden Sie eine E-Mail an <a href="mailto:hi@usereact.io">hi@usereact.io</a>.</span>
          </div>
        )}
    </div>
  );
}

export default RegisterForm;
