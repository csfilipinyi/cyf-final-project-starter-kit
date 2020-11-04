import React, { useState, useEffect } from "react";
import fakeData from "../fakeData.json";
import AddForm from "./AddForm";
import { useParams } from "react-router-dom";

export default function EditBox() {
  let { id } = useParams();
  const skills = fakeData[id];
  const [deleted, setDeleted] = useState(skills);
  // const [learningObjective, setLearningObjective] = useState(skills);
  const [learningObj, setLearningObj] = useState([]);
  const [updateLO, setUpdateLO] = useState("");
  const [text, setText] = useState("");

  const token = window.localStorage.getItem("token");

  const getLearningObj = () => {
    fetch(`/api/learningobjectives/${id}`, {headers: {token}})
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setLearningObj(data);
      });
  };
  useEffect(() => {
    getLearningObj();
  }, [id]);

  const deleteLearningOb = (LearningID) => {
    fetch(`/api/learningobjectives/${LearningID}`, {
      method: "DELETE",
      headers: {
        token
      },
    }).then(() => {
      let newData = learningObj.filter((p) => p.id !== LearningID);
      setLearningObj(newData);
    });
  };

  const updateLearningObj = (newDescription, LearningID) => {
    if (newDescription) {
      fetch(`/api/learningobjectives/${LearningID}`, {
        method: "PUT",
        body: JSON.stringify({
          description: newDescription,
        }),
        headers: {
          "Content-Type": "application/json",
          token
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdateLO("");
          getLearningObj();
        });
    }
    return;
  };

  const handleEdit = (description, id) => {
    console.log("head", id);
    setUpdateLO(id);
    setText(description);
  };
  const cancelUpdate = (id) => {
    setUpdateLO("");
    getLearningObj();
  };
  console.log(learningObj);
  // const addLearningObjective = (description) => {
  //   setLearningObjective(skills.push(description));
  // };
  return (
    <div className="learning-objective-container">
      <h2 className="skill-name"></h2>
      <div>
        <ul>
          {learningObj.map(({ description, id }, index) => {
            return (
              <li className="lo-style" key={index}>
                <div className="edit-delete-buttons">
                  {console.log("here is update", updateLO, id)}

                  {updateLO == id ? (
                    <textarea
                      className="app-message__input"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    ></textarea>
                  ) : (
                    <span>
                      <div className="description">{description}</div>
                      <a
                        onClick={() => handleEdit(description, id)}
                        className="edit-btn crud"
                        id={id}
                      >
                        <img
                          className="edit-btn crud"
                          src="https://i.ibb.co/nrkVG9b/edit-1.png"
                          alt="edit"
                          border="0"
                        ></img>
                      </a>
                    </span>
                  )}
                  <span className="app-message-btn-del">
                    {updateLO == id ? (
                      <>
                        <button
                          onClick={() => updateLearningObj(text, id)}
                          className="sumbit"
                          variant="secondary"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => cancelUpdate("")}
                          className="sumbit"
                          variant="secondary"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <a
                        onClick={() => deleteLearningOb(id)}
                        className="delete-btn crud"
                      >
                        <img
                          src="https://i.ibb.co/fd1dg7H/delete-1.png"
                          alt="delete "
                          border="0"
                        ></img>
                      </a>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="add-btn-container">
          <AddForm getLearningObj={getLearningObj} />
        </div>
      </div>
    </div>
  );
}
