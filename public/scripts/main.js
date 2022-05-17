// const nav = document.querySelector('nav');
// if(getCurrentUser()) {
//   nav.innerHTML = `
//     <ul>
//       <li><a href="bmi.html">Calculate</a></li>
//       <li><a href="profile.html">Profile</a></li>
//       <li><a id="logout">Logout</a></li>
//     </ul>
//   `;
// } else {
//   nav.innerHTML = `
//     <ul>
//       <li><a href="bmi.html">Calculate</a></li>
//       <li><a href="login.html">Login</a></li>
//       <li><a href="register.html">Sign Up</a></li>
//     </ul>
//   `
// }

// http://localhost:3000
// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  console.log('http://localhost:8080/'+`${route}`);
  const response = await fetch('http://localhost:8080'+`${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
  localStorage.removeItem('cart')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}
