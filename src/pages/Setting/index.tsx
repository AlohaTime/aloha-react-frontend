import { useNavigate } from "react-router-dom";
import {
  AppName,
  Body,
  BorderedButton,
  Buttons,
  Container,
  Header,
  Logo
} from "./styled";
import { ButtonStyle } from "components/Input";
import { ROUTES_PATH_LOGIN } from "constants/Routes";
import { removeAuthInfo } from "utils/Auth";

function Setting() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Logo src={`/logo.png`} />
        <AppName>Aloha Time</AppName>
        <Header>개발자</Header>
        <Body>인하대학교 미래융합대학</Body>
        <Body>박소연, 정효은, 황석영</Body>
        <Header>Bug Report</Header>
        <Body>tjrdud6412@inha.edu</Body>
        <Header>GitHub</Header>
        <Body>https://github.com/AlohaTime</Body>
        <Header>버전</Header>
        <Body>1.13.0</Body>
        <Buttons>
          <BorderedButton onClick={() => navigate(-1)}>돌아가기</BorderedButton>
          <ButtonStyle
            onClick={() => {
              navigate(ROUTES_PATH_LOGIN);
              removeAuthInfo();
            }}
          >
            로그아웃
          </ButtonStyle>
        </Buttons>
      </Container>
    </>
  );
}

export default Setting;
