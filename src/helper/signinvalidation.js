export function validateSignin (input) {

    if (!input.email  || input.email.trim() === '' || input.email.length < 3 ) {
      return { isValidated: false, error: 'Please a valid email address' };
    }
  
        if (!input.password || input.password.trim() === '' || input.password.length < 8 || input.password.length > 25) {
          return { isValidated: false, error: "Your password should have atleast 8 world's 1 small-case letter, 1 capital letter, 1 digit, 1 special" };
        }
  
        return { isValidated: true, error: '' };
  }
  
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
      );
  };