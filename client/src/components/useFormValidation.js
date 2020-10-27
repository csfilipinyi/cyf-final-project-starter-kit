import { useState, useEffect } from "react";


function useFormValidation(validate, intialState)  {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState(intialState);
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    let updateInput = {
      ...input,
      [event.target.name]: event.target.value,
    };
    setInput(updateInput)
    setIsValid(false)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newError = validate(input, isValid);
    setErrors(newError);
    console.log(errors, newError);
    if (JSON.stringify(newError) == JSON.stringify({})) {
      //setInput(intialState);
      setIsValid(true);
    }
  }

  return { handleChange, input, handleSubmit, errors, isValid };
};
export default useFormValidation;
