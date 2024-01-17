import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/QPay-logo.png";

import ImageBitcoin from "../assets/Bitcoin-image.svg";
import {
  Container,
  Header,
  Title,
  Form,
} from "../Styles/Styles";

const infoLabel = [
  {
    label: "Full Name",
    type: "text",
    classLabel: "label",
    classInput: "input",
  },
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
    text: "Create an Account",
    ClassName: "btn-primary",
  },
  {
    text: "Log In",
    ClassName: "btn-secundary",
    to: "/",
  },
];

function CreateAccount() {
  return (
    <Container>
      <Header>
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
        <img
          src={ImageBitcoin}
          alt="ImageBitcoin"
          className="imageFinance"
        />
      </Header>
      <Form>
        <Title>Create an Account</Title>
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

        {Buttons.map((item) => {
          return (
            <Link
              key={item.text}
              to={item.to}
              className={item.ClassName}
            >
              {item.text}
            </Link>
          );
        })}
      </Form>
    </Container>
  );
}

export default CreateAccount;
