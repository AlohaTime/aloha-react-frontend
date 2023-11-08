import { ButtonStyle } from "components/Input";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  align-self: stretch;
  max-width: 576px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const AppName = styled.h1`
  color: #5886c7;
  text-align: center;
  font-family: Tmoney RoundWind;
  font-size: 35px;
  font-style: normal;
  font-weight: 800;
  padding: 0;
  margin: 0;
`;

export const Header = styled.h2`
  font-family: Tmoney RoundWind;
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 0;
`;

export const Body = styled.span`
  font-family: Tmoney RoundWind;
  font-size: 10px;
  color: #999;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const BorderedButton = styled(ButtonStyle)`
  color: #5886c7;
  border: 1px solid #5886c7;
  background-color: #fff;
  &:hover {
    color: #fff;
    border-color: #fff;
    background-color: #5886c7;
  }
`;
