import React, { useState, useEffect } from "react";
import dataTesting from "../dataTesting.json";
import BoxDisplay from "../components/BoxDisplay";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MentorsView() {
  const [studentList, setStudentList] = useState([]);

  let history = useHistory();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    console.log(token);
    if (!token) {
      history.push("/");
    }
    fetch(`/api/verify`, { headers: { token } })
      .then((res) => {
        if (res.status !== 200) {
          history.push("/");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("role", data.role);
        if (data == "not authorized" || data.role == "Student") {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`/api/students`, { headers: { token } })
      .then((res) => res.json())
      .then((data) => {
        setStudentList(data);
      });
  }, []);

  let studentName = "";

  const studentId = useQuery().get("studentId");
  if (studentId && studentList) {
    const student = studentList.filter(
      (student) => student.user_id == studentId
    )[0];

    if (student) {
      studentName = `${student.first_name} ${student.last_name}`;
    }
  }

  return (
    <div className="mentorsview-page">
      <h1>Welcome Mentor</h1>

      <Header />

      <div className="skills-container">
        <div className="mentorsview-header-container">
          <h2 className="mentor-greet">Students</h2>
          <a href="/mentorsedit" className="signup-link">
            Edit Learning Objectives
          </a>
        </div>
        {studentId && (
          <div className="skills-container">
            <BoxDisplay studentId={studentId} studentName={studentName} />

            <ul>
              {studentList.map(({ user_id, first_name, last_name }) => {
                return (
                  <li key={user_id} className="students-name">
                    <Link
                      to={`./MentorsView?studentId=${user_id}`}
                      className="name-list"
                    >
                      {`${first_name} ${last_name}`}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MentorsView;
