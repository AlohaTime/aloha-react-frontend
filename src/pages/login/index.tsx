import { useState } from "react";
import { Container, Link, LoginButton, Logo, StretchedTextInput } from "./styled";


function Login() {
  const [id, setId] = useState("");
  const [idErr, setIdErr] = useState("");
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState("");

  return (
    <Container>
      <Logo src="/logo192.png" />
      <StretchedTextInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        errorMessage={idErr}
        placeholder="학번"
      ></StretchedTextInput>
      <StretchedTextInput
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        errorMessage={pwErr}
        placeholder="비밀번호"
        type="password"
      ></StretchedTextInput>
      <LoginButton>로그인</LoginButton>
      <Link>회원가입</Link>
      <Link>ID/PW 찾기</Link>
    </Container>
  );
}

export default Login;
