import { styled } from "styled-components";
import { ButtonStyle, TextInput } from "../../components/Input";

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

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StretchedTextInput = styled(TextInput)`
  width: 100%;
`;

export const LoginButton = styled(ButtonStyle)`
  width: 100%;
  margin-top: 12px;
`;

export const Link = styled.a`
  font-size: 10px;
  color: #333;
`;

export const Message = styled.span`
  font-size: 10px;
  color: #999;
  text-align: center;
`;
