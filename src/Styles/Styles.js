import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 36px;
  box-shadow: 0px 25px 45px 0px
    rgba(0, 0, 0, 0.25);
  transform: all 0.3s;

  @media screen and (max-width: 450px) {
    width: 350px;
  }

  @media screen and (max-width: 325px) {
    width: 300px;
  }
`;

export const Header = styled.div`
  width: 100%;
  background-color: #1e7bf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  margin-bottom: 29px;
  width: 414px;
  height: 285px;
  position: relative;

  img {
    background-color: transparent;
  }

  .logo {
    width: 100px;
    margin-top: 20px;
  }

  .imageFinance {
    width: 244.315px;
    height: 200px;
    position: absolute;
    bottom: -40px;
  }

  @media screen and (max-width: 450px) {
    width: 350px;
  }

  @media screen and (max-width: 325px) {
    width: 300px;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 36px;
  background-color: transparent;

  .label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: rgba(14, 59, 117, 0.6);
    font-size: 12px;
    font-weight: 900;
    background-color: transparent;
  }

  .input {
    width: 100%;
    height: 54px;
    align-items: center;
    padding: 0px 20px 0px 20px;
    font-size: 16px;
    margin-bottom: 16px;
    color: #0e3b75;
    font-weight: 500;
    border: 1px solid rgba(14, 59, 117, 0.35);
    background-color: transparent;

    &:focus {
      outline: none;
      border: 2px solid #0e3b75;
    }
  }

  .forgotPassword {
    color: rgba(14, 59, 117, 0.6);
    text-align: center;
    font-size: 14px;
    margin-bottom: 18px;
    background: transparent;
    cursor: pointer;
  }

  .btn-primary,
  .btn-secundary {
    display: flex;
    width: 100%;
    height: 64px;
    padding: 22px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 17px;
    border: none;
    margin-bottom: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .btn-primary {
    background: #1e7bf6;
    color: #fff;
  }
  .btn-secundary {
    border: 1px solid #1e7bf6;
    color: #1e7bf6;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: start;
  font-size: 24px;
  background-color: transparent;
  color: #0e3b75;
  margin-bottom: 28px;
`;
