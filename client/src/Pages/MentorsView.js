import React, { useState, useEffect } from "react";
import StudentResultsContainer from "../components/StudentResultsContainer";
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
  console.log(studentList);
  const studentId = useQuery().get("studentId");
  if (studentId && studentList) {
    const student = studentList.filter(
      (student) => student.user_id == studentId
    )[0];

    if (student) {
      studentName = `${student.first_name} ${student.last_name}`;
    }
  }
  console.log(studentList);

  // let editLoImg =  <img
  //         className="edit-btn crud"
  //         src="https://i.ibb.co/nrkVG9b/edit-1.png"
  //         alt="edit"
  //         border="0"
  //       ></img>
  const editLearningObjectives = (
    <a href="/mentorsedit" className="signup-link">
      Edit Learning Objectives
    </a>
  );
  let logout = (
    <a href="/">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/159/159707.svg"
        alt="logout"
        className="logout-img"
      ></img>
    </a>
  );

  return (
    <div className="mentorsview-page">
      <Header editLearningObjectives={editLearningObjectives} logout={logout} />
      <h1 className="welcome-msg">
        Welcome {window.localStorage.getItem("name")}
      </h1>
      <div className="main-container-mentorView">
        <div className="studentName-Container">
          {/* <ul>
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
          </ul> */}

          <h2 className="mentor-greet">Students List:</h2>
          <ul className="student-list">
            {studentList.map(({ user_id, first_name, last_name }) => {
              return (
                <li key={user_id} className="students-name ">
                  <Link
                    to={`./MentorsView?studentId=${user_id}`}
                    className="name-list"
                  >
                    <div>{`${first_name} ${last_name}`}</div>
                    <div>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {studentId && (
          <div className="box-display-component">
            <StudentResultsContainer
              studentId={studentId}
              studentName={studentName}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default MentorsView;
