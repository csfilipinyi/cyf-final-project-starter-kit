import React from "react";
import fakeData from "../fakeData.json";

export default function EditBox({ skill }) {
  console.log(skill);
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
        <div className="add-btn-container">
          <button className="sumbit add-btn" type="submit" variant="secondary">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
