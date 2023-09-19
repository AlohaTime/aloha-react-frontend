import { styled } from "styled-components";
import { useState } from "react";
import { PillButton } from "./Input";
import { getCalendarDate, toMonthYear } from "utils/Date";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 30px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const MonthYearText = styled.h1`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  justify-content: space-between;
  row-gap: 20px;
  width: 100%;
`;

const DayOfTheWeek = styled.div`
  color: #666;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
const Day = styled.div<{
  $iscurrentmonth: boolean;
  $isToday: boolean;
  $selected: boolean;
}>`
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
      return "#fff";
    }
    if (props.$iscurrentmonth || props.$selected) {
      return "#333";
    }
    return "#999";
  }};
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$isToday) {
      return "#5886c7";
    }
    if (props.$selected) {
      return "#D9EDFF";
    }
    return "transparent";
  }};
`;

interface DayCalendarProps {
  viewDate: Date;
  setViewDate: (date: Date) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

const DayCalendar = ({
  viewDate,
  setViewDate,
  selectedDate,
  setSelectedDate,
}: DayCalendarProps) => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  return (
    <>
      {getCalendarDate(viewDate).map((date, idx) => {
        const month = date.getMonth();
        const day = date.getDate();
        const isCurrentMonth = month === viewDate.getMonth();
        const isToday = month === todayMonth && day === todayDate;
        const isSelected =
          month === selectedDate.getMonth() && day === selectedDate.getDate();
        return (
          <Day
            key={idx}
            $iscurrentmonth={isCurrentMonth}
            $isToday={isToday}
            $selected={isSelected}
            onClick={() => {
              setSelectedDate(new Date(date));
              if (!isCurrentMonth) {
                setViewDate(new Date(date));
              }
            }}
          >
            {day}
          </Day>
        );
      })}
    </>
  );
};

export const Calendar = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevViewDate = () => {
    setViewDate((prev) => {
      const prevMonthDate = new Date(prev);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextViewDate = () => {
    setViewDate((prev) => {
      const nextMonthDate = new Date(prev);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const todayViewDate = () => {
    const today = new Date();
    setViewDate(today);
    setSelectedDate(today);
  };

  return (
    <Container>
      <Header>
        <MonthYearText>{toMonthYear(viewDate)}</MonthYearText>
        <ButtonContainer>
          <PillButton onClick={prevViewDate}>&lt;</PillButton>
          <PillButton onClick={nextViewDate}>&gt;</PillButton>
          <PillButton onClick={todayViewDate}>오늘</PillButton>
        </ButtonContainer>
      </Header>
      <Month>
        {dayOfTheWeek.map((day, idx) => (
          <DayOfTheWeek key={idx}>{day}</DayOfTheWeek>
        ))}
        <DayCalendar
          viewDate={viewDate}
          setViewDate={setViewDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Month>
    </Container>
  );
};
