import { styled } from "styled-components";
import { List } from "../../components/Event";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

export const StretchedList = styled(List)`
  width: 100%;
`;
