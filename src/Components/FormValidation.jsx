import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap-v5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { validations } from "./indexJavaScript"; //import Validation function form indexJavaScript

const FormValidation = () => {
  const [error, setError] = useState({
    names: "",
    lname: "",
    email: "",
    phone: "",
    date: "",
    month: "",
    year: "",
    password: "",

    conformPassword: "",
  });
  console.log("error", error);

  const [formData, setFormData] = useState([]);
  const [data, setData] = useState({
    names: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    conformPassword: "",
    date: "",
    month: "",
    year: "",
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
  console.log("ALL DATA IS HERE", data);

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
              className={
                error.lname ? "boder" : !data.lname ? "" : "bordergreen"
              }
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
              className={
                error.email ? "boder" : !data.email ? "" : "bordergreen"
              }
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
              className={
                error.phone ? "boder" : !data.phone ? "" : "bordergreen"
              }
              type="phone"
              placeholder="Phone"
              name="phone"
              value={data.phone}
              onChange={loginhandle}
            />{" "}
            <Form.Text className="text errorCss">{error.phone}</Form.Text>
          </Form.Group>
          {/* Age   */}

          <Form.Label>Age</Form.Label>
          <Form.Group>
            <Row>
              <Col md={2}>
                <select
                  className={`Select ${
                    error.date ? "boder" : !data.date ? "" : "bordergreen"
                  }`}
                  onChange={(e) => {
                    data.date = e.target.value;
                  }}
                >
                  <option disabled selected value="" id="options" hidden>
                    Date
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <Form.Text className="text errorCss">{error.date}</Form.Text>
              </Col>
              <Col md={2}>
                <select
                  className={`Select ${
                    error.month ? "boder" : !data.month ? "" : "bordergreen"
                  }`}
                  onChange={(e) => {
                    data.month = e.target.value;
                  }}
                >
                  <option selected value="" hidden disabled>
                    Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <Form.Text className="text errorCss">{error.month}</Form.Text>
              </Col>
              <Col md={2}>
                <select
                  className={`Select ${
                    error.year ? "boder" : !data.year ? "" : "bordergreen"
                  }`}
                  onChange={(e) => {
                    data.year = e.target.value;
                  }}
                >
                  <option selected disabled value="" hidden>
                    Year
                  </option>

                  <option value="2024">{2024}</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                </select>
                <Form.Text className="text errorCss">{error.year}</Form.Text>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={
                error.password ? "boder" : !data.password ? "" : "bordergreen"
              }
              type="text"
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
              className={
                error.conformPassword
                  ? "boder"
                  : !data.conformPassword
                  ? ""
                  : "bordergreen"
              }
              type="text"
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
