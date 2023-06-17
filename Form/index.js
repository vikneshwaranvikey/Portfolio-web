/*
let user = document.querySelector(".username");
console.log(user.value);

document.querySelector(".btn").addEventListener("click", function () {
  console.log(user.value);
});
*/
/*
let user = document.querySelector(".username");
console.log(user.value);

let wrng = document.querySelector(".warning-message");

var runMe = function () {
  console.log(user.value);
  if (user.value.length < 3) {
    user.style.backgroundColor = "red";
    wrng.textContent = "length is too low";
  } else if (user.value.length >= 5) {
    user.style.backgroundColor = "green";
    wrng.textContent = "password is strong";
  }
};

document.querySelector(".butt").addEventListener("click", runMe);
*/
let wrng = document.querySelector(".warning-message");

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("userpassword").value;
  if (username == "vikey" && password == "123") {
    wrng.style.backgroundColor = "green";
    console.log((wrng.textContent = "login succesfully"));
    return false;
  } else {
    wrng.style.backgroundColor = "red";
    console.log((wrng.textContent = "login failed"));
  }
}
