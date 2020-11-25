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
  async function hadleSubmit(e) {
    e.preventDefault();

    await fetch(`/api/learningobjectives`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token,
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
        <label className="input-label">Choose a Skill</label>
        <br />

        <select name="skill" onChange={handleChange} className="dropdown-skill">
          <option value="select">Select</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="git">GIT</option>
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="sql">SQL</option>
        </select>
        <br />
        <label className="input-label">Add your learning objective</label>
        <br />
        <textarea
          className="app-message__input"
          type="text"
          placeholder="add description"
          value={addDescription.description}
          onChange={handleChange}
          name="description"
        ></textarea>
        <div className="add-btn-container">
          <button className=" add-btn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
