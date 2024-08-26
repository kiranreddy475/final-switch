// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

function logout() {
  // Clear the session (if you're using any session storage)
  sessionStorage.clear();

  // Redirect to login page
  window.location.href = "login.html";

  // Clear the history to prevent going back
  window.history.pushState(null, null, "login.html");
  window.history.pushState(null, null, "login.html");
  window.onpopstate = function () {
    window.location.href = "login.html";
  };
}
