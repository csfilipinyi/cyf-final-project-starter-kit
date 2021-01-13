import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FcOk, FcCancel, FcExpired } from "react-icons/fc";

const StudentAttendance = ({ classId, sessionId, BackToStudentList }) => {
  const [studentAttendance, setStudentAttendance] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACK_END_URL}/users/${classId}/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStudentAttendance(data);
        
          });
  }, [classId, sessionId]);
  console.log(studentAttendance);
  return (
    <div className="session-list">
      <button className="button" onClick={BackToStudentList}>
        BackToStudentList
      </button>

      <div>
        <Table className="table">
          <thead>
            <tr>
              <th>students</th>
              <th>Status</th>
              <th>Attendance Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {studentAttendance.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  {item.attendance_date ? (
                    item.late ? (
                      <FcExpired />
                    ) : (
                      <FcOk />
                    )
                  ) : (
                    <FcCancel />
                  )}
                </td>
                <td>{item.attendance_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default StudentAttendance;
