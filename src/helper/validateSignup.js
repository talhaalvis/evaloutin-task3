export function validateSignup (userData) {

    if (!userData.FirstName || userData.FirstName.trim() === '' || userData.FirstName.length < 3) {
        return { isValidated: false, error: 'Full name should contain at least 3 characters' };
      }
  
      if (!userData.id || userData.id.trim() === '' || userData.id.length < 3) {
        return { isValidated: false, error: 'Username should contain at least 3 characters' };
      }
      if (userData.id.length>6 ) {
        return { isValidated: false, error: 'Username should contain only 6 characters' };
      }
  
      if (!userData.Email || userData.Email.trim() === '' || userData.Email.length < 3 ) {
        return { isValidated: false, error: 'Please a valid email address' };
      }
  
      if (!userData.password || userData.password.trim() === '' || validPassword (userData.password.length) < 8 || userData.password.length > 25) {
        return { isValidated: false, error: 'Your password should have atleast 1 small-case letter, 1 capital letter, 1 digit, 1 special' };
      }
  
      if (!userData.confirmPassword || userData.confirmPassword.trim() === '' || userData.confirmPassword.length < 3) {
        return { isValidated: false, error: 'Please Enter a valid confirm password' };
      }
  
      if (userData.confirmPassword !== userData.password) {
        return { isValidated: false, error: 'Passwords do not match' };
      }
  
      if (!userData.Country || userData.Country.trim() === '' || userData.Country.length < 3) {
        return { isValidated: false, error: 'Please select a country' };
      }
  
      // if (!userData.mobileNumber || userData.mobileNumber.trim() === '' || !validateMobileNumber(userData.mobileNumber)) {
      //   return { isValidated: false, error: 'Please enter a valid mobile number' };
      // }
  
    //   if (!userData.referralLink || userData.referralLink.trim() === '' || !validateUrl(userData.referralLink.trim())) {
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