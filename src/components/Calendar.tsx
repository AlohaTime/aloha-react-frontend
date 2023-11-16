import { styled } from "styled-components";
import { useEffect, useRef } from "react";
import { PillButton } from "./Input";
import { compareDate, getCalendarDate, toMonthYear } from "utils/Date";
import { ROUTES_PATH_SETTING } from "constants/Routes";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/Input";
import { useItem } from "hooks/Item";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 70%;
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

const ScrollContainer = styled.div`
  display: flex;
  max-width: 100%;
  aspect-ratio: 1/1;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 30px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  min-width: 100%;
  scroll-snap-align: start;
`;

const DayOfTheWeekContainer = styled.div`
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
export const DayNotice = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
export const DayNoticeIcon = styled.div<{ color: string }>`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

interface DayCalendarProps {
  viewDate: Date;
  setViewDate: (date: Date) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

const DayOfTheWeek = () => {
  return (
    <>
      {dayOfTheWeek.map((day, idx) => (
        <DayOfTheWeekContainer key={idx}>{day}</DayOfTheWeekContainer>
      ))}
    </>
  );
};

const DayCalendar = ({
  viewDate,
  setViewDate,
  selectedDate,
  setSelectedDate,
}: DayCalendarProps) => {
  const today = new Date();
  const { type, subject } = useInput();
  const { getFilterdItems } = useItem();
  return (
    <>
      {getCalendarDate(viewDate).map((date, idx) => {
        const isCurrentMonth = date.getMonth() === viewDate.getMonth();
        const isToday = !compareDate(date, today);
        const isSelected = !compareDate(date, selectedDate);
        let hasAttendance = false;
        let hasAssignment = false;
        let hasQuiz = false;
        getFilterdItems({ date, type, subject }).forEach((item) => {
          if (!item.completed && item.type === "출석") hasAttendance = true;
          if (!item.completed && item.type === "과제") hasAssignment = true;
          if (!item.completed && item.type === "퀴즈") hasQuiz = true;
        });
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
            {date.getDate()}
            <DayNotice>
              <>
                {hasAttendance && <DayNoticeIcon color="#FF97AE" />}
                {hasQuiz && <DayNoticeIcon color="#F8D47A" />}
                {hasAssignment && <DayNoticeIcon color="#C3F07B" />}
              </>
            </DayNotice>
          </Day>
        );
      })}
    </>
  );
};

export const Calendar = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { selectedDate, setSelectedDate, viewDate, setViewDate } = useInput();

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      if (scrollLeft === 0)
        setViewDate(
          (pre) => new Date(new Date(pre).setMonth(pre.getMonth() - 1))
        );

      if (scrollLeft + containerWidth === scrollWidth)
        setViewDate(
          (pre) => new Date(new Date(pre).setMonth(pre.getMonth() + 1))
        );
    }
  };

  const navigateToSetting = () => {
    navigate(ROUTES_PATH_SETTING);
  };

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - containerWidth) / 2;
    }
  }, [viewDate]);

  return (
    <Container>
      <Header>
        <MonthYearText>{toMonthYear(viewDate)}</MonthYearText>
        <ButtonContainer>
          <PillButton onClick={prevViewDate}>&lt;</PillButton>
          <PillButton onClick={nextViewDate}>&gt;</PillButton>
          <PillButton onClick={todayViewDate}>오늘</PillButton>
          <PillButton onClick={navigateToSetting} style={{ height: 27 }}>
            <img src="images/gear.svg" alt="setting button" />
          </PillButton>
        </ButtonContainer>
      </Header>
      <ScrollContainer ref={scrollRef} onScroll={handleScroll}>
        <Month>
          <DayOfTheWeek />
          <DayCalendar
            viewDate={
              new Date(new Date(viewDate).setMonth(viewDate.getMonth() - 1))
            }
            setViewDate={() => { }}
            selectedDate={selectedDate}
            setSelectedDate={() => { }}
          />
        </Month>
        <Month>
          <DayOfTheWeek />
          <DayCalendar
            viewDate={viewDate}
            setViewDate={setViewDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Month>
        <Month>
          <DayOfTheWeek />
          <DayCalendar
            viewDate={
              new Date(new Date(viewDate).setMonth(viewDate.getMonth() + 1))
            }
            setViewDate={() => { }}
            selectedDate={selectedDate}
            setSelectedDate={() => { }}
          />
        </Month>
      </ScrollContainer>
    </Container>
  );
};
