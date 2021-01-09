import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FcOk, FcCancel } from "react-icons/fc";

const StudentAttendance = ({ classId, sessionId, BackToStudentList }) => {
  const [studentAttendance, setStudentAttendance] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/users/${classId}/${sessionId}`)
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
        {studentAttendance.map((item) => (
          <Table className="table">
            <tr>
              <td>{item.name}</td>
              <td>{item.attendance ? <FcOk /> : <FcCancel />}</td>
            </tr>
          </Table>
        ))}
      </div>
    </div>
  );
};
export default StudentAttendance;
