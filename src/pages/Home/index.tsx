import { useEffect, useState } from "react";
import { Calendar } from "../../components/Calendar";
import { Item, ItemProps } from "../../components/Event";
import {
  EllipsisSelect,
  Header,
  HomeContainer,
  InfoContainer,
  LeftContainer,
  RefreshButton,
  RightContainer,
  StretchedList
} from "./styled";
import { getAssignments, getAttendances } from "api/authAPI";
import { GetAssignmentsResponse, GetAttendancesResponse } from "interfaces/API";
import { filterItems, sortItems } from "utils/DataManipulation";
import { Select } from "components/Input";
import { dateToString } from "utils/Date";
import { FallingLines } from "react-loader-spinner";

function Home() {
  const [attendanceLoading, setAttendanceLoading] = useState<boolean>(false);
  const [assignmentLoading, setAssignmentLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<ItemProps[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [type, setType] = useState<string>("all");
  const [subject, setSubject] = useState<string>("all");
  const refresh = () => {
    setAttendanceLoading(true);
    getAttendances().then((res: GetAttendancesResponse) => {
      if (!res?.data?.data) return;
      const attendances = res.data.data.map((attendance) => {
        return {
          title: attendance.subjectName,
          subTitle: attendance.lectureName,
          type: "출석",
          completed: attendance.isAttended ?? true,
          startDate: attendance.attendedDateTo,
          endDate: attendance.attendedDateFrom,
        };
      });
      setEvents((prev) => [...prev.filter(v => v.type !== "출석"), ...attendances]);
      setAttendanceLoading(false);
    });
    setAssignmentLoading(true);
    getAssignments().then((res: GetAssignmentsResponse) => {
      if (!res?.data?.data) return;
      const assignments = res.data.data.map((assignment) => {
        return {
          title: assignment.subjectName,
          subTitle: assignment.assignName,
          type: "과제",
          completed: assignment.submitDate !== "",
          startDate: dateToString(new Date(0)),
          endDate: assignment.dueDate,
        };
      });
      setEvents((prev) => [...prev.filter(v => v.type !== "과제"), ...assignments]);
      setAssignmentLoading(false);
    });
  };
  useEffect(refresh, []);

  return (
    <HomeContainer>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></Calendar>
      <InfoContainer>
        <Header>
          <LeftContainer>
            <RefreshButton onClick={refresh}>
              {
                attendanceLoading || assignmentLoading ?
                  <FallingLines width="22px" height="22px" color="#5886c7" /> :
                  <img src="images/refresh.svg" height='10px' />
              }
            </RefreshButton>
          </LeftContainer>
          <RightContainer>
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
          </RightContainer>
        </Header>
        <StretchedList>
          {filterItems(sortItems(events), selectedDate, type, subject).map(
            (event, idx) => (
              <Item
                key={idx}
                type={event.type}
                title={event.title}
                subTitle={event.subTitle}
                completed={event.completed}
                startDate={event.startDate}
                endDate={event.endDate}
              />
            )
          )}
        </StretchedList>
      </InfoContainer>
    </HomeContainer>
  );
}

export default Home;
