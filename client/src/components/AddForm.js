import React, {useState} from 'react'

export default function AddForm(props) {
  const initialDescription = {
    learingDescription: ""
}
const [description, setDescription] = useState(initialDescription)
function handleChange(event) {
    let updateInput = {
      ...description,
      [event.target.name]: event.target.value,
    };
    setDescription(updateInput)
  }
function hadleSubmit(e){
    e.preventDefault();
    if (!description.learingDescription) return
    props.addLearningObjective(description.learingDescription)
    console.log(description.learingDescription)
    setDescription(initialDescription)
}

    return (
        <div>
            <form onSubmit={hadleSubmit}>
                <input type="text" placeholder="add here" value={description.learingDescription} onChange={handleChange} name="learingDescription"/>
                <div className="add-btn-container">
          <button className="sumbit add-btn" type="submit" variant="secondary">
            ADD
          </button>
        </div>
            </form>
        </div>
    )
}
