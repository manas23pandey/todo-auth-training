function validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!values.name) {
      errors.name = "Name cannot be empty";
    } else {
      errors.name = "";
    }
  
    if (!values.email) {
      errors.email = "Email cannot be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email format is invalid";
    } else {
      errors.email = "";
    }
  
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password format is invalid";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default validation;
  