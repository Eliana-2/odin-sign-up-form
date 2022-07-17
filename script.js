passwords = document.querySelectorAll('input[type=password]');

function comparePasswords() {
  if(passwords[0].value !== passwords[1].value) {
    passwords.forEach((input) => {input.classList.add('error')});
  }
  else {
    passwords.forEach((input) => {input.classList.remove('error')});
  }
}

passwords.forEach((input) => {
  input.addEventListener('input', comparePasswords)
})