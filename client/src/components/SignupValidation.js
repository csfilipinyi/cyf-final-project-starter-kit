export default function SignupValidation(input){
    let errors = {};
     
      if(!input.firstName.trim()){
          errors.firstName = "name required"
      }
    //emial
    if(!input.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Email address is invalid"
    }

    if(!input.password){
        errors.password = "Password id required"
    }else if(input.password.length <2){
        errors.password = "Password need to be 6 characters or more"
    }
     if(!input.confirmPassword){
        errors.confirmPassword = "Password is required"
     }
     else if(input.confirmPassword !== input.password){
        errors.confirmPassword = "Password do not match"
    }

    if(!input.city.trim()){
        errors.city = "city required"
    }

    if(!input.classId.trim()){
        errors.classId = "Please enter your class"
    }
    if(!input.role.trim()){
        errors.role = "Please select your role"
    }

return errors

}