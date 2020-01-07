const myForm = document.getElementById("myForm");
const userName = document.getElementById("username");
const surName = document.getElementById("surname");
const email = document.getElementById("email");

const password = document.getElementById("password");

myForm.addEventListener("submit", e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from inputs
  const usernameValue = userName.value.trim();
  const surnameValue = surName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorFor(userName);
  } else {
    setSuccessFor(userName);
  }
  if (surnameValue === "") {
    setErrorFor(surName);
  } else {
    setSuccessFor(surName);
  }

  if (emailValue === "") {
    setErrorFor(email);
    changeEmail();
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
    changeEmail();
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password);
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function changeEmail() {
  const placeholder = document.getElementById("email");
  placeholder.placeholder = "email@example.com";
  placeholder.className = "form-control email error";
}
