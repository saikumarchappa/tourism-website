import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("password").value;
  fetchData('/users/authenticate', {username: name, password: pswd}, "POST")
  .then((data) => { //cathy123, 12345
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "./User.html";
    }
    // else{
    //   window.location.href = "./User.html";
    // }
  })
  .catch((error) => {
    alert(error.message)
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("reg-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("u_name").value;
  const pswd = document.getElementById("pswd").value;
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;

  fetchData('/users/register', {username: name, password: pswd, firstName: f_name, lastName: l_name}, "POST")
  .then((data) => {
    if(!data.message) {
      window.location.href = "./login.html";
    }
    else{
      window.location.href = "./login.html";
    }
  })
  .catch((error) => {
    alert(error.message)
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}
