import validator from "validator"


const SignUpValidator = (fields) => {
  let errors = []
  const requiredFields = [ "name", "email", "password", "confirmPassword" ]
  console.log(fields)
  
  for(i in requiredFields){
    if(!fields.hasOwnProperty(requiredFields[i])){
      const errorObj = { field: requiredFields[i], message: "DACUEBA" }
      errors.push(errorObj)
    }
  }
  console.log(errors)
  if(errors.length > 0)
    return errors;  
}

export default SignUpValidator
