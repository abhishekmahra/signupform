const fname = document.getElementById("username");
const email = document.getElementById("mail");
const pwd = document.getElementById("pass");
const formAlert = document.getElementById("alert");
const gen = document.getElementById("gen");
const form = document.getElementById("submit");

gen.addEventListener("click", getPassword);

function handleSubmit() {
    if (password.value == "" || firstname.value == "" || email.value == ""){
        formAlert.style.display = "block";
        formAlert.innerHTML = "All fields are required";
        return false;
    }
    else if (validatePassword(pwd.value, username.value) == false) {
    return false;
    }
    return true;
}

function getPassword() {
  pwd.value = generatePassword();
}

/*toggel password*/
function pwdToggle(){
  if(pwd.type == "text")
    pwd.type = "password";
  else
  pwd.type = "text";
}

/* To Generate the password*/
function generatePassword() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "%!@#$^&*-+=|\\(){}:\"';,?";
  let password = "";

  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    let lowerCaseLetter = alphabet.charAt(Math.random() * 26).toLowerCase();
    let upperCaseLetter = alphabet.charAt(Math.random() * 26).toUpperCase();
    let specialChar = symbols.charAt(Math.random() * symbols.length);

    password += randomNumber + lowerCaseLetter + upperCaseLetter + specialChar;
  }
  return shuffle(password);
}

/* To shuffle the password string*/
function shuffle(str) {
  let arr = str.split("");
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = Math.floor(Math.random() * n);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}

/* To Validate the password*/
function validatePassword(password,username) {
  if (password.includes(username)) {
    formAlert.style.display = "block";
    formAlert.innerHTML = "Password must not include username";
    return false;
  } else if (
    !/\d/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[%!@#$^&*-+=|\\(){}:\"';,?]/.test(password)
  ) {
    formAlert.style.display = "block";
    formAlert.innerHTML = "Password must be a mix of letters, numbers, and special symbols";
    return false;
  } else return true;
}