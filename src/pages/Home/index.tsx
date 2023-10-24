import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar";
import { Item, ItemProps } from "../../components/Event";
import {
  EllipsisSelect,
  Header,
  HomeContainer,
  InfoContainer,
  StretchedList,
} from "./styled";
import { getAssignments, getAttendances } from "api/authAPI";
import { Assignment, Attendance } from "interfaces/API";
import { filterItems, sortItems } from "utils/DataManipulation";
import { Select } from "components/Input";

function Home() {
  const [events, setEvents] = useState<ItemProps[]>([]);
  const [type, setType] = useState<string>("all");
  const [subject, setSubject] = useState<string>("all");

  useEffect(() => {
    getAttendances().then((res) => {
      if (!res?.data) return;
      const attendances = res.data.map((attendance: Attendance) => {
        return {
          title: attendance.subjectName,
          subTitle: attendance.lectureName,
          type: "출석",
          completed: attendance.isAttended ?? true,
          date: attendance.attendedDateFrom,
        };
      });
      setEvents((prev) => [...prev, ...attendances]);
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
      setEvents((prev) => [...prev, ...assignments]);
    });
  }, []);

  return (
    <HomeContainer>
      <Calendar></Calendar>
      <InfoContainer>
        <Header>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
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
            {[...new Set(events.map((event) => event.title))].map(
              (title, idx) => {
                return (
                  <option key={idx} value={title}>
                    {title.split("[")[0]}
                  </option>
                );
              }
            )}
          </EllipsisSelect>
        </Header>
        <StretchedList>
          {filterItems(sortItems(events), type, subject).map((event, idx) => (
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
      </InfoContainer>
    </HomeContainer>
  );
}

export default Home;
