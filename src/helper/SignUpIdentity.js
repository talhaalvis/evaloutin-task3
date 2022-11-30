export function validateSignup (input) {

    if (!input.firstName || input.firstName.trim() === "" ) {
        return { isValidated: false, error: 'Enter First Name' };
      }
  
      if (!input.middleName || input.middleName.trim() === '' || input.middleName.length < 3) {
        return { isValidated: false, error: 'Enter Middle Name Correctly' };
      }
  
      if (!input.lastName || input.lastName.trim() === '' || input.lastName.length < 3 ) {
        return { isValidated: false, error: 'Enter Last Name Correctly' };
      }
  
      if (!input.gender || input.gender.trim() === '' || validPassword (input.gender.length) < 8 || input.gender.length > 25) {
        return { isValidated: false, error: 'Select YOur Gender' };
      }
  
      // if (!input.dateOfBirth || input.dateOfBirth.trim() === '' ) {
      //   return { isValidated: false, error: 'Select Date of Birth' };
      // }
  
    //   if (input.confirmPassword !== input.password) {
    //     return { isValidated: false, error: 'Passwords do not match' };
    //   }
  
      if (!input.country || input.country.trim() === '' || input.country.length < 3) {
        return { isValidated: false, error: 'Please select a country' };
      }
      if (!input.state || input.state.trim() === '' || input.state.length < 3) {
        return { isValidated: false, error: 'Please  select state' };
      }
      if (!input.city || input.city.trim() === '' || input.city.length < 3) {
        return { isValidated: false, error: 'Please select city' };
      }
      if (!input. addressLine1 || input. addressLine1.trim() === '' || input. addressLine1.length < 3) {
        return { isValidated: false, error: 'Please select Adreess' };
      }
      if (!input.ZIP || input.ZIP.trim() === '' || input.ZIP.length < 3) {
        return { isValidated: false, error: 'Enter ZIP Code' };
      }
      
  
      // if (!input.mobileNumber || input.mobileNumber.trim() === '' || !validateMobileNumber(input.mobileNumber)) {
      //   return { isValidated: false, error: 'Please enter a valid mobile number' };
      // }
  
    //   if (!input.referralLink || input.referralLink.trim() === '' || !validateUrl(input.referralLink.trim())) {
    //     return { isValidated: false, error: 'Please enter a valid referral url' };
    //   }

  
      return { isValidated: true, error: '' };
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

  // function validateMobileNumber(value) {
  //   return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value);
  // }
  
  function validPassword(value){
    return "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
  }


  // Developer@224