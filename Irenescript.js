// document.addEventListener("DOMContentLoaded", function () {

//     /* For Search */

//     document.addEventListener("click", function (event) {
//       if (event.target.closest(".nav-search")) {
//         document
//           .querySelector(".search-bar")
//           .classList.add("search-bar-active");
//       } else if (event.target.closest(".search-cancel")) {
//         document
//           .querySelector(".search-bar")
//           .classList.remove("search-bar-active");
//       }
//     });
//    /* For Login  Signup =========*/
  
//       document.addEventListener("click", function (event) {
//         const forForm = document.querySelector(".form");
//         const forSignup = document.querySelector(".sign-up-form");
//         const forLogin = document.querySelector(".login-form");
        
//         /* check if clicked element has the class 'nav-user' or 'already-account' */

//         if (event.target.closest(".nav-user, .already-account")) {
//           forForm.classList.add("login-active");
//           forLogin.classList.add("login-active");
//           forForm.classList.remove("sign-up-active");
//           forSignup.classList.remove("sign-up-active");
  
//         }
        
//         /* check if clicked element has the class 'sign-up-btn' */

//         if (event.target.closest(".sign-up-btn")) {
//           forForm.classList.add("sign-up-active");
//           forSignup.classList.add("sign-up-active");
//           forForm.classList.remove("login-active");
//           forLogin.classList.remove("login-active");
//         }
        
//         /* check if clicked element has the class 'form-cancel' */

//         if (event.target.closest(".form-cancel")) {
//           forForm.classList.remove("login-active");
//           forForm.classList.remove("sign-up-active");
//           forLogin.classList.remove("login-active");
//           forSignup.classList.remove("sign-up-active");
//         }
//       });
//     });