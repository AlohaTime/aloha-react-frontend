import * as RC from "react-calendar";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
  }
  .react-calendar__tile {
    background-color: unset !important;
    abbr {
      display: block;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      padding: 10px;
    }
  }

  .react-calendar__tile--active abbr {
    background: #d9edff;
    color: #222;
  }
  .react-calendar__tile--active.react-calendar__month-view__days__day--weekend
    abbr {
    background: #ffcece;
  }

  .react-calendar__tile--now abbr {
    background-color: #005bac;
    color: #fff;
  }
  .react-calendar__navigation__label__labelText {
    color: #222;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    color: #222;
    font-weight: bold;
    text-decoration: unset;
  }
`;


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Calendar(props: RC.CalendarProps) {
  const [date, setDate] = useState<Value>(new Date());

  const changeMonth = (delta: number): void => {
    const newDate = new Date(date?.toString() || "");
    newDate.setMonth(newDate.getMonth() + delta);
    setDate(newDate);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeMonth(1),
    onSwipedRight: () => changeMonth(-1),
    trackMouse: true
  });

  return (
    <CalendarContainer {...handlers}>
      <RC.Calendar {...props} locale="en" value={date} onChange={setDate} />
    </CalendarContainer>
  );
}