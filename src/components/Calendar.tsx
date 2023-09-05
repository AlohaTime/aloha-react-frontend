import * as RC from "react-calendar";
import { styled } from "styled-components";
import "react-calendar/dist/Calendar.css";

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

export function Calendar(props: RC.CalendarProps) {
  return (
    <CalendarContainer>
      <RC.Calendar {...props} locale="en" />
    </CalendarContainer>
  );
}
