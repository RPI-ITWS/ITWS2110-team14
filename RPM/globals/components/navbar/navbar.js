// navbar.js

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Import navbar-inner.html content
    fetch("/RPM/globals/components/navbar/navbar-inner.html")
      .then((response) => response.text())
      .then((content) => {
        this.innerHTML = `
          ${content}
        `;
      });
  }
}

window.addEventListener("load", function () {
  let checkCount = 0;

  let pathName = new URL(window.location.href).pathname;
  // Remove extras like "index.html" at the end of the url
  if (/\/[^/]+\.[^/]+$/.test(pathName)) {
    pathName = pathName.substring(0, pathName.lastIndexOf("/") + 1);
  }

  function showUserInfo() {
    let loggedIn = false;
    let exit = false;
    console.log(pathName);
    fetch("/RPM/globals/components/navbar/check_login.php")
    .then((response) => response.json())
    .then((data) => {
      loggedIn = data.loggedin;
      console.log('loggedIn: ' + loggedIn);
      if(
        pathName == "/RPM/" ||
        (pathName == "/RPM/pages/about/" && !loggedIn) ||
        pathName == "/RPM/pages/user/login/" ||
        pathName == "/RPM/pages/user/create/"
      ) {
        console.log("please exit");
        return;
      }
      
      const userInfoElement = document.querySelector("#userInfo");
      const marketplaceElement = document.querySelector("#marketplace");
      const postElement = document.querySelector("#post");
      if (userInfoElement) {
        userInfoElement.style.display = "block";
        marketplaceElement.style.display = "block";
        postElement.style.display = "block";
        clearInterval(intervalID);
      } else {
        checkCount++;
        if (checkCount >= 300) {
          console.error("Element #userInfo not found after 30 seconds.");
          clearInterval(intervalID);
        }
      }
    });
    
  }
  const intervalID = setInterval(showUserInfo, 100);

  fetch("/RPM/globals/components/navbar/check_login.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Logged in as " + data.rcs_id);
      console.log("Logged in: " + data.loggedin);
      if (data.loggedin) {
        // The user is logged in
        // Display the logged-in version of the navbar
        document.getElementById("userInfo").innerHTML =
          '<a class="navbar-brand navbar-text dropdown-toggle"' +
          'href="#"' +
          'role="button"' +
          'id="userDropdown"' +
          'data-bs-toggle="dropdown"' +
          'aria-expanded="false">' +
          data.rcs_id +
          '<i class="bi bi-caret-down-fill"></i></a>' +
          '<ul class="dropdown-menu" aria-labelledby="userDropdown">' +
          ' <li><a class="dropdown-item" href="/RPM/pages/user/profile/"' +
          " >Profile</a" +
          " ></li>" +
          '<li><a class="dropdown-item" href="/RPM/pages/user/settings/"' +
          ">Settings</a></li>" +
          '<li><a class="dropdown-item" href="/RPM/pages/user/listings/"'+
          '>Your Listings</a></li>'+
          '<li><hr class="dropdown-divider" /></li>' +
          '<li><a class="dropdown-item" href="/RPM/pages/user/logout/logout_user.php"' +
          ">Logout</a></li></ul> ";
      } else {
        // The user is not logged in
        // Display the logged-out version of the navbar
        document.getElementById("userInfo").innerHTML =
          "<a" + ' href="/RPM/pages/user/login">' + "Login</a>";
      }
    });
});

customElements.define("navbar-component", NavBar);
