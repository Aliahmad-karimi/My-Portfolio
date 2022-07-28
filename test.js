//validation of form.
const contForm = document.querySelector('form');
const emailForm = document.getElementById('email');
const vError = document.querySelector('.error')

function checkEmail(input) {
  const low = input.toLowerCase();

  if(input !== low){
    vError.innerText = 'Please submit your Email in lower case letters with @ sign.';
    vError.className = 'alert error';
    return false;
  }
  if(input === low){
    vError.innerText = 'Submitted Succesfully';
    vError.className = 'alert success';
    return true;
  }
};
