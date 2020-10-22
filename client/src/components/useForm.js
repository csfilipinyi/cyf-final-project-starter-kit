import {useState, useEffect} from "react"
const UseForm = (validate, intialState ) =>{
const [errors, setErrors] = useState({})
const [input, setInput] = useState(intialState)
const [submit, setSubmit] = useState(false);
   
function handleChange(event) {
      let updateInput = {
        ...input,
        [event.target.name]: event.target.value,
      };
    setInput(updateInput);
    }

  function handleSubmit(event) {
      event.preventDefault();
  
      const newError=  validate(input)
         setErrors(newError)
          console.log(errors, newError)
          if(JSON.stringify(newError)==JSON.stringify({})){
         setInput(intialState);
         setSubmit(true);
          }
    }

return {handleChange, input, handleSubmit, errors, submit}
}
export default UseForm;