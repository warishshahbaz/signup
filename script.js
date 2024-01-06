const email_err = document.getElementById("emailError");
const passErr = document.getElementById("smallPass");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const good_to_go = document.getElementById("status");

function handleChangeEmail(e) {
  email_err.style.display = "block";
  good_to_go.style.display = "none";
  const reg = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

  if (reg.test(e.target.value)) {
    email_err.style.display = "none";
  } else {
    email_err.style.display = "block";
  }
}
function handleChangePass(e) {
  passErr.style.display = "block";
  good_to_go.style.display = "none";
  if (e.target.value.length > 8) {
    passErr.style.display = "none";
  } else {
    passErr.style.display = "block";
  }
}
email.addEventListener("input", handleChangeEmail);
pass.addEventListener("input", handleChangePass);

function handleSubmit() {
  if (email_err.style.display == "none" && passErr.style.display === "none") {
    alert("Sign Up Success!");
    good_to_go.style.display = "block";
  } else {
    good_to_go.style.display = "none";
  }
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
}
