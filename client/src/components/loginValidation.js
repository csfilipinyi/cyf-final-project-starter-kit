export default function LoginValidation(input){
    let errors = {};

   
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
     
return errors

}