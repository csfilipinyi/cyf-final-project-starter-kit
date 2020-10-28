import React, { useState } from "react";
import fakeData from "../fakeData.json";
import AddForm from "./AddForm";

export default function EditBox({ skill }) {
  const skills = fakeData[skill];
  console.log(skills.length);
  const [deleted, setDeleted] = useState(skills);
  const [learningObjective, setLearningObjective] = useState(skills);

  const addLearningObjective = (description) => {
    setLearningObjective(skills.push(description));
  };

  const deleteLearningObjective = (objective) => {
    let index = skills.indexOf(objective);
    if (index > -1) {
      setDeleted(skills.splice(index, 1));
    }
  };

  return (
    <div className="learning-objective-container">
      <h2 className="skill-name">{skill}</h2>
      <div>
        <ul>
          {fakeData[skill].map((objective, index) => {
            return (
              <li key={index}>
                <div>{objective}</div>
                <div className="edit-delete-buttons">
                  <button
                    className="sumbit edit-btn"
                    type="submit"
                    variant="secondary"
                    size="lg"
                    p-2
                    active
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteLearningObjective(objective)}
                    className="sumbit delete-btn"
                    type="submit"
                    variant="secondary"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <AddForm addLearningObjective={addLearningObjective} />
      </div>
    </div>
  );
}
