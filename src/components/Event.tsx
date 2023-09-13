import { styled } from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 12px;
  padding: 12px 0px;
  border-bottom: 1px solid #eee;
  scroll-snap-align: start;
  &:last-child {
    border-bottom: none;
  }
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

const Title = styled.span<{ $completed: boolean }>`
  color: ${(props) => (props.$completed ? "#999" : "#222")};
  font-size: 12px;
`;

const SubTitle = styled.span`
  color: #999;
  font-size: 10px;
`;

const Type = styled.span<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$completed ? "#999" : "#555")};
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
        <Title $completed={completed}>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Info>
      <Type $completed={completed}>{type}</Type>
    </Container>
  );
}
