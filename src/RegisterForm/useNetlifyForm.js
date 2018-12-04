import { useState } from "react";

function useNetlifyForm(formName, initalValues) {
  const [values, fields] = useFormFields(initalValues);
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const onSuccess = () => {
    setSuccess(true);
    setError();
  };

  const onError = err => {
    setSuccess(false);
    setError(err);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    sendForm(formName, values)
      .then(onSuccess)
      .catch(onError)
      .finally(() => {
        setFormSent(true);
        setLoading(false);
      });
  }

  return {
    fields,
    handleSubmit,
    formSent,
    loading,
    success,
    error
  };
}

function sendForm(formName, values) {
  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": formName, ...values })
  }).then(checkStatus);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errMsg = `${response.status} Error${
    response.statusText ? ` - ${response.statusText}` : ""
  }`;
  throw new Error(errMsg);
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

export default useNetlifyForm;
