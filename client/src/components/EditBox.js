import React from "react";
import fakeData from "../fakeData.json";

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();
//   console.log(id);
//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default function EditBox({ skill }) {
  console.log(skill);

  //let skill = "css";
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
