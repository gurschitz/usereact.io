import React, { useState } from "react";

import { H3 } from "../Headings";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

import { Grid, Collapsable, InputGroup } from "./styled";

function RegisterForm({ className }) {
  const [collapsed, setCollapsed] = useState(true);
  const [values, fields] = useFormFields({
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  function handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "request", ...values })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    event.preventDefault();
  }

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
          pose={collapsed ? "closed" : "open"}
          style={{ overflow: "hidden" }}
        >
          <H3 className="text-center" style={{ marginBottom: 16 }}>
            Anfrage
          </H3>
          <Grid>
            <InputGroup>
              <Label>Name*</Label>
              <Input name="name" required {...fields.name} />
            </InputGroup>
            <InputGroup>
              <Label>Firma</Label>
              <Input name="company" {...fields.company} />
            </InputGroup>
            <InputGroup>
              <Label type="email">E-Mail*</Label>
              <Input name="email" required {...fields.email} />
            </InputGroup>
            <InputGroup>
              <Label type="tel">Telefon*</Label>
              <Input name="phone" required {...fields.phone} />
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
            <Button type="submit">Anfrage senden</Button>
          </div>
        )}
      </form>
    </div>
  );
}

function useFormFields(obj) {
  const [state, setState] = useState(obj);

  const fields = Object.keys(obj).reduce((res, key) => {
    res[key] = {
      value: state[key],
      onChange: evt => {
          const { name, value } = evt.currentTarget;
          setState(prevState => ({
              ...prevState,
              [name]: value

          }));
      }
    };

    return res;
  }, {});

  return [state, fields];
}

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default RegisterForm;
