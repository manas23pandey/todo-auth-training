function validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/P4ssw0rd!@#$%^&*()_+/



  
    if (!values.email) {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email format is invalid";
    }
  
    if (!values.password) {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password format is invalid";
    }
  
    return errors;
  }
  
  export default validation;
  