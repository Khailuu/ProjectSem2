let apiUser = "http://localhost:3000/user";

//login
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const bntLogin = document.querySelector("#login__signInButton");
const toast__err = document.querySelector(".message__err");
const toast__suc = document.querySelector(".message__suc");
const close = document.querySelector("#close__mess");
// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  getUser().then((data) => {
    const user = data.find(
      (user) =>
        user.username == username.value && user.password == password.value
    );
    if (user) {
      toast__suc.classList.add("active");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      toast__err.classList.add("active");
      setTimeout(() => {
        toast__err.classList.remove("active");
      }, 3000);
    }
  });
});



close.onclick = ()=> {
  toast__err.classList.remove("active")
}