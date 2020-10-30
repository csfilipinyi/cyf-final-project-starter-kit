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
  const [text, setText] = useState('')
  

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

  const deleteLearningOb = (LearningID)=> {
    
        fetch(`/api/learningobjectives/${LearningID}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(()=> {
        let newData=  learningObj.filter((p)=> p.id !== LearningID)
        setLearningObj(newData)
            })
           }

  const updateLearningObj = (description, LearningID) => {
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


  const handleEdit = (e)=>{
    console.log("head", e.target.id)
    setUpdateLO(e.target.id)
  }
  // const cancelUpdate = (id) =>
  //   new Promise((resolve) => {
  //     resolve(id);
  //   }).then(() => {
  //     setUpdateLO("");
  //     getLearningObj();
  //   });

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
                  {console.log("here is update", updateLO, id)}
                 
                  {updateLO == id ? (
              <input
                className="app-message__input"
                onChange={e => setText(e.target.value)}
                
              ></input>
            ) : (
              <span>{description} 
                    <button 
                    onClick={handleEdit}
                    className="sumbit edit-btn"
                    variant="secondary"
                    size="lg"
                    id={id}
                    p-2
                    active
                  >
                    Edit
                    </button></span>
            )}
                  <span className="app-message-btn-del">
                    {updateLO == id ? (
                      <>
                        <button onClick={(e) => console.log(description,e, id)}>
                          Update
                        </button>
                        <button onClick={() => cancelUpdate("")}>Cancel</button>
                      </>
                    ) : (
                      <button
                        onClick={() => deleteLearningOb(id)}
                        className="sumbit delete-btn"
                       
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
