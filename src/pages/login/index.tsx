import { useState } from "react";
import { ButtonStyle, TextInput } from "../../components/Input";
import { List, Item } from "../../components/Event";
import { Calendar } from "../../components/Calendar";

function Login() {
  const [id, setId] = useState("");
  return (
    <div
      style={{ display: "flex", gap: 10, padding: 10, flexDirection: "column" }}
    >
      <h1>Login</h1>
      <TextInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        errorMessage="tet"
        placeholder="Id"
      ></TextInput>
      <TextInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        errorMessage=""
        placeholder="password"
        type="password"
      ></TextInput>
      <ButtonStyle>test</ButtonStyle>
      <ButtonStyle disabled>test</ButtonStyle>

      <List>
        <Item
          title="컴퓨터공학기초"
          subTitle={new Date().toLocaleString()}
          type="과제"
          completed={false}
        />
        <Item
          title="컴퓨터공학기초"
          subTitle={new Date().toLocaleString()}
          type="출석"
          completed={false}
        />
        <Item
          title="컴퓨터공학기초"
          subTitle={new Date().toLocaleString()}
          type="과제"
          completed={true}
        />
      </List>
      <Calendar />
    </div>
  );
}

export default Login;
