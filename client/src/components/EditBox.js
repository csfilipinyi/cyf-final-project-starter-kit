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
 

  const getLearningObj = () => {
    fetch(`/api/learningobjectives/${id}`)
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

  // const deleteLearningOb = (LearningID)=> {
  //   console.log(LearningID)
  //       fetch(`/api/learningobjectives/${LearningID}`, {
  //           method: "DELETE",
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //           .then(res => res.json())
  //           .then((data) =>data);

  //       }

  const updateLearningObj = (description, LearningID) => {
    console.log(description);
    if (description) {
      fetch(`/api/learningobjectives/${LearningID}`, {
        method: "PUT",
        body: JSON.stringify({
          description,
        }),
        headers: {
          "Content-Type": "application/json",
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

  const cancelUpdate = (id) =>
    new Promise((resolve) => {
      resolve(id);
    }).then(() => {
      setUpdateLO("");
      getLearningObj();
    });

  const addLearningObjective = (description) => {
    setLearningObjective(skills.push(description));
  };
  return (
    <div className="learning-objective-container">
      <h2 className="skill-name">{id}</h2>
      <div>
        <ul>
          {learningObj.map(({ description, id }, index) => {
            return (
              <li key={index}>
                <div className="edit-delete-buttons">
                  
                 
                  {updateLO === index ? (
              <input
                className="app-message__input"
                onChange={e => setUpdateLO(e.target.value)}
                value={learningObj.description}
              ></input>
            ) : (
              <span>{description} 
                    <button 
                    className="sumbit edit-btn"
                    type="submit"
                    variant="secondary"
                    size="lg"
                    p-2
                    active
                  >
                    Edit
                    </button></span>
            )}
                  <span className="app-message-btn-del">
                    {updateLO === id ? (
                      <>
                        <button onClick={() => updateLearningObj(id)}>
                          Update
                        </button>
                        <button onClick={() => cancelUpdate("")}>Cancel</button>
                      </>
                    ) : (
                      <button
                        onClick={() => deleteLearningOb(id)}
                        className="sumbit delete-btn"
                        type="submit"
                        variant="secondary"
                      >
                        Delete
                      </button>
                    )}
                  </span>

                  
                 
                </div>
              </li>
            );
          })}
        </ul>
        <div className="add-btn-container">
          <button className="sumbit add-btn" type="submit" variant="secondary">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
