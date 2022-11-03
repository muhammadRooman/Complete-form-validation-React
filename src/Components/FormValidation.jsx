import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap-v5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validations } from "./indexJavaScript";

const FormValidation = () => {
  const [error, setError] = useState({
    names: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    conformPassword: "",
  });

  const [formData, setFormData] = useState([]);
  const [data, setData] = useState({
    names: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    conformPassword: "",
  });

  const loginhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const Validation = (event) => {
    event.preventDefault();
    setFormData(data);

    setError({ ...validations(data) });
  };

  useEffect(() => {
    setFormData(data);
  });
  console.log(error);

  return (
    <div className="mt-5">
      <h1 style={{ textAlign: "center" }}>FORM VALIDATION</h1>
      <Container>
        <Form onSubmit={Validation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className={
                error.names ? "boder" : !data.names ? "" : "bordergreen"
              }
              type="names"
              placeholder="Name"
              name="names"
              value={data.names}
              onChange={loginhandle}
            />
            <Form.Text className={`text errorCss `}>{error.names}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lname"
              placeholder="Last Name"
              name="lname"
              value={data.lname}
              onChange={loginhandle}
            />
            <Form.Text className="text errorCss">{error.lname}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={loginhandle}
            />{" "}
            <Form.Text className="text errorCss">{error.email}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={loginhandle}
            />{" "}
            <Form.Text className="text errorCss">{error.phone}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={loginhandle}
            />{" "}
            <Form.Text className="text errorCss">{error.password}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Conform Password</Form.Label>
            <Form.Control
              type="conformPassword"
              placeholder="Conform Password"
              name="conformPassword"
              value={data.conformPassword}
              onChange={loginhandle}
            />{" "}
            <Form.Text className="text errorCss">
              {error.conformPassword}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormValidation;
