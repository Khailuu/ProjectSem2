let apiUserSignUp = "http://localhost:3000/user";
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");
const toast__err = document.querySelector(".message__err");
const toast__suc = document.querySelector(".message__suc");

// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (username.value == "" || password.value == "") {
    alert("Please enter your username and password");
  } else {
    const user = {
      username: username.value,
      password: password.value,
    };
    fetch(apiUserSignUp)
      .then((res) => res.json())
      .then((data) => {
        if (data.some((user) => user.username === username.value)) {
          alert("Username already exists. Please choose a different one.");
        } else {
          fetch(apiUserSignUp, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast__suc.classList.add("active");
            //   setTimeout(() => {
            //     window.location.href = "index.html";
            //   }, 3000); 
            })
            .catch((error) => {
              console.error("Error during signup:", error);
              // Handle errors, show an error message or do something else
            });
        }
      });
  }
});
