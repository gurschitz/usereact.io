import React, { useState } from "react";
import Obfuscate from 'react-obfuscate';
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

import useNetlifyForm from "./useNetlifyForm";

import { Collapsable, InputGroup } from "./styled";

function RegisterForm({ className }) {
  const [collapsed, setCollapsed] = useState(true);
  const { fields, handleSubmit, formSent, loading, error } = useNetlifyForm(
    "request",
    {
      name: "",
      company: "",
      email: "",
      phone: ""
    }
  );

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
          <>
            <InputGroup>
              <Label>Name*</Label>
              <Input
                required
                disabled={loading}
                placeholder="Max Mustermann"
                {...fields.name}
              />
            </InputGroup>
            <InputGroup>
              <Label>Firma</Label>
              <Input
                disabled={loading}
                placeholder="Mustermann GmbH"
                {...fields.company}
              />
            </InputGroup>
            <InputGroup>
              <Label>E-Mail*</Label>
              <Input
                type="email"
                required
                disabled={loading}
                placeholder="max@example.com"
                {...fields.email}
              />
            </InputGroup>
            <InputGroup>
              <Label>Telefon*</Label>
              <Input
                type="tel"
                required
                disabled={loading}
                placeholder="0123456"
                {...fields.phone}
              />
            </InputGroup>
          </>
        </Collapsable>
        {collapsed && !formSent && (
          <div
            className="flex justify-center"
            onClick={() => setCollapsed(false)}
          >
            <Button >Zur Anfrage</Button>
          </div>
        )}
        {!collapsed && !formSent && (
          <div className="flex justify-center">
            <Button className="mt2" type="submit" disabled={loading}>
              Anfrage senden
            </Button>
          </div>
        )}
      </form>
      {formSent && !error && (
        <div
          className="justify-center text-center"
          style={{ color: "#2ECC40" }}
        >
          Die Anfrage wurde erfolgreich versendet. <br />
          Wir werden uns bald bei Ihnen melden.
        </div>
      )}
      {formSent && error && (
        <div
          className="justify-center text-center "
          style={{ color: "#FF4136" }}
        >
          Leider ist ein Fehler bei der Anfrage aufgetreten. <br />
          <span>
            Bitte senden Sie eine E-Mail an{" "}
            <Obfuscate email="hi@usereact.io" />
          </span>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
