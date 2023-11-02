import { useNavigate } from "react-router-dom";
import { AppName, Container, Logo } from "./styled";

function Setting() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Logo src={`${process.env.PUBLIC_URL}/logo.png`} />
        <AppName>Aloha Time</AppName>
      </Container>
    </>
  );
}

export default Setting;
