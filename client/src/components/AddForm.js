import React, { useState, useEffect } from "react";

export default function AddForm({ getLearningObj }) {
    const token = window.localStorage.getItem("token");
  const initialDescription = {
    skill: "",
    description: "",
  };
  const [addDescription, setAddDescription] = useState(initialDescription);
  function handleChange(event) {
    let updateInput = {
      ...addDescription,
      [event.target.name]: event.target.value,
    };
    setAddDescription(updateInput);
    console.log(updateInput);
  }
  function hadleSubmit(e) {
    e.preventDefault();

    fetch(`/api/learningobjectives`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token
      },
      body: JSON.stringify({
        skill: addDescription.skill,
        description: addDescription.description,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setAddDescription(initialDescription);
    getLearningObj();
  }

  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <label>Skill</label>
        <br />
        <input
          type="text"
          placeholder="Type skill"
          value={addDescription.skill}
          onChange={handleChange}
          name="skill"
        />
        <br />
        <label>Add your learning objective</label>
        <br />
        <input
          type="text"
          placeholder="add description"
          value={addDescription.description}
          onChange={handleChange}
          name="description"
        />
        <div className="add-btn-container">
          <button className="sumbit add-btn" type="submit" variant="secondary">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
