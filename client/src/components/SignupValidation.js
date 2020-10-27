export default function SignupValidation(input){
    let errors = {};
     
      if(!input.firstName.trim()){
          errors.firstName = "name required"
      }
    //emial
    if(!input.userEmail){
        errors.userEmail = "userEmail required"
    }else if(!/\S+@\S+\.\S+/.test(input.userEmail)){
        errors.userEmail = "Email address is invalid"
    }

    if(!input.userPassword){
        errors.userPassword = "Password id required"
    }else if(input.userPassword.length <2){
        errors.userPassword = "Password need to be 6 characters or more"
    }
     if(!input.confirmPassword){
        errors.confirmPassword = "Password is required"
     }
     else if(input.confirmPassword !== input.userPassword){
        errors.confirmPassword = "Password do not match"
    }

    if(!input.cyfCity.trim()){
        errors.cyfCity = "city required"
    }

    if(!input.userClassId.trim()){
        errors.userClassId = "Please enter your class"
    }
    if(!input.userRole.trim()){
        errors.userRole = "Please select your role"
    }

return errors

}