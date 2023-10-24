import { styled } from "styled-components";
import { List } from "../../components/Event";
import { Select } from "components/Input";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0px 30px;
  gap: 10px;
  background: #fafafa;
  max-width: 576px;
  margin: 0 auto;
`;

export const InfoContainer = styled(List)`
  width: 100%;
  padding: 12px 30px;
  flex: 1;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;
`;

export const EllipsisSelect = styled(Select)`
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const StretchedList = styled(List)`
  width: 100%;
  flex: 1;
`;
