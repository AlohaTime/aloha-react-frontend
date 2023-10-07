import { useState } from "react";
import {
  AppName,
  Container,
  Link,
  LoginButton,
  Logo,
  Message,
  StretchedTextInput,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { postLogin } from "api/authAPI";
import { setAuthInfo } from "utils/Auth";
import { ROUTES_PATH_HOME } from "constants/Routes";
import { ThreeDots } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [idErr, setIdErr] = useState("");
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState("");

  const login = () => {
    if (loading) return;
    if (id === "") {
      setIdErr("아이디를 입력해주세요.");
      return;
    } else setIdErr("");
    if (pw === "") {
      setPwErr("비밀번호를 입력해주세요.");
      return;
    } else setPwErr("");
    setLoading(true);
    postLogin({ id, password: pw })
      .then((res) => {
        const token = res.data;
        if (!token)
          throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
        setAuthInfo(token);
        navigate(ROUTES_PATH_HOME);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Logo src={`${process.env.PUBLIC_URL}/logo.png`} />
        <AppName>Aloha Time</AppName>
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
        <LoginButton onClick={login} disabled={loading}>
          {loading ? (
            <ThreeDots height="12" width="30" color="#5886c7" />
          ) : (
            "로그인"
          )}
        </LoginButton>
        <Link>아이디/비밀번호 찾기</Link>
        <Message>
          Aloha Time은 인하대학교 학생만 사용이 가능합니다.
          <br />
          I-Class 계정으로 로그인이 가능합니다.
        </Message>
      </Container>
    </>
  );
}

export default Login;
