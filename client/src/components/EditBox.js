import React from "react";
import fakeData from "../fakeData.json";

export default function EditBox({ skill }) {
  console.log(skill);
  return (
    <div className="learning-objective-container">
      <h2>{skill}</h2>
      <ul>
        {fakeData[skill].map((objective, index) => {
          return (
            <li key={index}>
              {objective}
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
