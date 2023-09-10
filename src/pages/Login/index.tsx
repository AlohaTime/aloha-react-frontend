import { useState } from "react";
import {
  Container,
  Link,
  LoginButton,
  Logo,
  Message,
  StretchedTextInput,
} from "./styled";

function Login() {
  const [id, setId] = useState("");
  const [idErr, setIdErr] = useState("");
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState("");

  return (
    <Container>
      <Logo src="/logo.png" />
      <StretchedTextInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        errorMessage={idErr}
        placeholder="아이디"
      ></StretchedTextInput>
      <StretchedTextInput
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        errorMessage={pwErr}
        placeholder="비밀번호"
        type="password"
      ></StretchedTextInput>
      <LoginButton>로그인</LoginButton>
      <Link>아이디/비밀번호 찾기</Link>
      <Message>
        Aloha Time은 인하대학교 학생만 사용이 가능합니다.<br />
        I-Class 계정으로 로그인이 가능합니다.
      </Message>
    </Container>
  );
}

export default Login;
