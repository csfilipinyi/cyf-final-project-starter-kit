export default function LoginValidation(input) {
  let errors = {};

  if (!input.userEmail) {
    errors.userEmail = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(input.userEmail)) {
    errors.userEmail = "Email address is invalid";
  }

  if (!input.userPassword) {
    errors.userPassword = "Password id required";
  } else if (input.userPassword.length < 2) {
    errors.userPassword = "Password need to be 6 characters or more";
  }

  return errors;
}
