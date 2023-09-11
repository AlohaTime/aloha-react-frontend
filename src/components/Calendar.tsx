import { styled } from "styled-components";
import { useState } from "react";
import { PillButton } from "./Input";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 30px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #fff;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const MonthYearText = styled.h1`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  justify-content: space-between;
  row-gap: 20px;
  width: 100%;
`

const DayOfTheWeek = styled.div`
  color: #666;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`
const Day = styled.div<{ $iscurrentmonth: boolean, $isToday: boolean, $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  text-align: center; 
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => {
    if (props.$isToday) {
      return "#fff"
    }
    if (props.$iscurrentmonth || props.$selected) {
      return "#333"
    }
    return "#999"
  }};
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$isToday) {
      return "#5886c7"
    }
    if (props.$selected) {
      return "#D9EDFF"
    }
    return "transparent"
  }};
`

const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"]

export const Calendar = () => {
  return (
    <Container>
      <Header>
        <MonthYearText>9월, 2023</MonthYearText>
        <ButtonContainer>
          <PillButton>&lt;</PillButton>
          <PillButton>&gt;</PillButton>
          <PillButton>오늘</PillButton>
        </ButtonContainer>
      </Header>
      <Month>
        {
          dayOfTheWeek.map((day, idx) => (
            <DayOfTheWeek key={idx}>{day}</DayOfTheWeek>
          ))
        }
        {[27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7].map((day, idx) => (
          <Day key={idx} $iscurrentmonth={idx > 4 && idx < 35} $isToday={day === 8} $selected={day === 13}>{day}</Day>
        ))}
      </Month>
    </Container>
  )
}