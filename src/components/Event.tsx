import { styled } from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const Container = styled.div<{ type: string; completed: boolean }>`
  box-sizing: border-box;
  display: flex;
  padding: 10px 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px solid #eee;
  border-left: 5px solid
    ${(props) => {
      if (props.completed) return "#999999";
      if (props.type === "출석") return "#BCDBC6";
      if (props.type === "과제") return "#F6BCBC";
    }};
  & span {
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  }
`;

const Info = styled.div`
  display: flex;
  width: 173.5px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

const Title = styled.span`
  color: #222;
  font-family: AppleSDGothicNeoB00;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const SubTitle = styled.span`
  color: #999;
  font-family: AppleSDGothicNeoSB00;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const Type = styled.span`
  color: #555;
  font-family: AppleSDGothicNeoSB00;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

interface ItemProps {
  type: string;
  title: string;
  subTitle: string;
  completed: boolean;
}

export function Item({ type, title, subTitle, completed }: ItemProps) {
  return (
    <Container type={type} completed={completed}>
      <Info>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Info>
      <Type>{type}</Type>
    </Container>
  );
}
