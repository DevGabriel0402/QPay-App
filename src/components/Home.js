import Logo from "../assets/QPay-logo.png";
import { Link } from "react-router-dom";

import ImageFinance from "../assets/Finance image.svg";
import {
  Container,
  Header,
  Title,
  Form,
} from "../Styles/Styles";
import React from "react";

const infoLabel = [
  {
    label: "Email",
    type: "text",
    classLabel: "label",
    classInput: "input",
  },
  {
    label: "Senha",
    type: "password",
    classLabel: "label",
    classInput: "input",
  },
];

const Buttons = [
  {
    text: "Log In",
    ClassName: "btn-primary",
  },
  {
    text: "Create an Account",
    ClassName: "btn-secundary",
    to: "/createAccount",
  },
];

function Home() {
  return (
    <Container>
      <Header>
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
        <img
          src={ImageFinance}
          alt="ImageFinance"
          className="imageFinance"
        />
      </Header>
      <Form>
        <Title>Welcome Back 😃</Title>
        {infoLabel.map((item) => {
          return (
            <label
              key={item.label}
              className={item.classLabel}
            >
              {item.label}
              <input
                type={item.type}
                className={item.classInput}
              />
            </label>
          );
        })}

        <p className="forgotPassword">
          Forgot password?
        </p>
        {Buttons.map((item) => {
          return (
            <Link
              key={item.text}
              className={item.ClassName}
              to={item.to}
            >
              {item.text}
            </Link>
          );
        })}
      </Form>
    </Container>
  );
}

export default Home;
