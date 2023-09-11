import { styled } from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  gap: 12px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 12px;
`;

const Tag = styled.div<{ type: string }>`
  width: 3px;
  border-radius: 3px;
  background-color: ${(props) => {
    switch (props.type) {
      case "출석":
        return "#FF97AE";
      case "퀴즈":
        return "#F8D47A";
      case "과제":
        return "#C3F07B";
      default:
        return "#C2C2C2";
    }
  }};
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Title = styled.span`
  color: #222;
  font-size: 12px;
`;

const SubTitle = styled.span`
  color: #999;
  font-size: 10px;
`;

const Type = styled.span`
  color: #555;
  font-size: 10px;
`;

export interface ItemProps {
  type: string;
  title: string;
  subTitle: string;
  completed: boolean;
}

export function Item({ type, title, subTitle, completed }: ItemProps) {
  return (
    <Container>
      <Tag type={completed ? "완료" : type} />
      <Info>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Info>
      <Type>{type}</Type>
    </Container>
  );
}
