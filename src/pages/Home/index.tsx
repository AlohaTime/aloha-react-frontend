import { useEffect } from "react";
import { Calendar } from "../../components/Calendar";
import { Item } from "../../components/Event";
import {
  EllipsisSelect,
  Header,
  HomeContainer,
  InfoContainer,
  LeftContainer,
  RefreshButton,
  RightContainer,
  StretchedList,
} from "./styled";
import { Select } from "components/Input";
import { FallingLines } from "react-loader-spinner";
import { useItem } from "hooks/Item";
import { useInput } from "hooks/Input";
import { ItemTypes } from "interfaces/Item";

function Home() {
  const { type, subject, setType, setSubject } = useInput();
  const { itemLoading, getFilterdItems, refreshItems, subjectList } = useItem();

  useEffect(refreshItems, [refreshItems]);

  return (
    <HomeContainer>
      <Calendar />
      <InfoContainer>
        <Header>
          <LeftContainer>
            <RefreshButton onClick={refreshItems}>
              {itemLoading ? (
                <FallingLines width="22px" height="22px" color="#5886c7" />
              ) : (
                <img
                  src="images/refresh.svg"
                  height="10px"
                  alt="refresh button"
                />
              )}
            </RefreshButton>
          </LeftContainer>
          <RightContainer>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as ItemTypes)}
            >
              <option value="all">유형 전체</option>
              <option value="출석">출석</option>
              <option value="과제">과제</option>
              <option value="퀴즈">퀴즈</option>
            </Select>
            <EllipsisSelect
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="all">과목 전체</option>
              {subjectList.map((title, idx) => {
                return (
                  <option key={idx} value={title}>
                    {title.split("[")[0]}
                  </option>
                );
              })}
            </EllipsisSelect>
          </RightContainer>
        </Header>
        <StretchedList>
          {getFilterdItems().map((event, idx) => (
            <Item
              key={idx}
              type={event.type}
              title={event.title}
              subTitle={event.subTitle}
              completed={event.completed}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          ))}
        </StretchedList>
      </InfoContainer>
    </HomeContainer>
  );
}

export default Home;
