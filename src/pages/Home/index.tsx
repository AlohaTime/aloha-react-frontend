import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar";
import { Item, ItemProps } from "../../components/Event";
import { HomeContainer, StretchedList } from "./styled";
import { getAssignments, getAttendances } from "api/authAPI";
import { Assignment, Attendance } from "interfaces/API";

function Home() {
  const [events, setEvents] = useState<ItemProps[]>([]);

  useEffect(() => {
    getAttendances().then((res) => {
      if (!res?.data) return;
      const attendances = res.data.map((attendance: Attendance) => {
        return {
          title: attendance.subjectName,
          subTitle: attendance.lectureName,
          type: "출석",
          completed: attendance.isAttended,
          date: attendance.attendedDateFrom,
        };
      });
      setEvents(prev => [...prev, ...attendances]);
    });
    getAssignments().then((res) => {
      if (!res?.data) return;
      const assignments = res.data.map((assignment: Assignment) => {
        return {
          title: assignment.subjectName,
          subTitle: assignment.assignName,
          type: "과제",
          completed: assignment.submitDate !== "",
          date: assignment.dueDate,
        };
      });
      setEvents(prev => [...prev, ...assignments]);
    });
  }, []);

  return (
    <HomeContainer>
      <Calendar></Calendar>
      <StretchedList>
        {events.map((event, idx) => (
          <Item
            key={idx}
            type={event.type}
            title={event.title}
            subTitle={event.subTitle}
            completed={event.completed}
            date={event.date}
          />
        ))}
      </StretchedList>
    </HomeContainer>
  );
}

export default Home;
