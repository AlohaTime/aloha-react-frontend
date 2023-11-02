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
