import {useState, useEffect} from "react"
const useForm = (validate, intialState ) =>{
  
    const [errors, setErrors] = useState({})
   // const [values, setValues] = useState(intialState)
   const [input, setInput] = useState(intialState)
   const [submit, setSubmit] = useState(false);
   
//  function handleChange(e){
//     let update ={
//                ...values,
//                [e.target.name]: e.target.value
//               }
//     setValues(update)
//   console.log(update)
//   }

function handleChange(event) {
      let updateInput = {
        ...input,
        [event.target.name]: event.target.value,
      };
      // console.log(event.target.name);
      // console.log(event.target.value);
      // console.log(updateInput);
      setInput(updateInput);
    }

//   function handleSubmit (e){
//     e.preventDefault()
//    const newError=  validate(values)
//    setErrors(newError)
//     console.log(errors, newError)
//     if(JSON.stringify(newError)==JSON.stringify({})){
//       setValues(intialState)
  
//     }
//   }
  
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
export default useForm;