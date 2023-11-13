import { styled } from "styled-components";
import { List } from "../../components/Item";
import { ButtonStyle, Select } from "components/Input";

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
  min-width: 370px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;
`;
export const RefreshButton = styled.button`
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: #00000000;
  border: 1px solid #eee;

`;
export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  max-width: calc(100% - 60px);
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const EllipsisSelect = styled(Select)`
  flex: 1;
  max-width: calc(100% - 75px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const StretchedList = styled(List)`
  width: 100%;
  flex: 1;
`;
