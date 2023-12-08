const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const logo = document.querySelector(".change__logo"); // Corrected selector

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    changeLogo("dark"); // Add this line to change logo on page load if theme is dark
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    changeLogo("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    changeLogo("light");
  }
}

function changeLogo(theme) {
  if (theme === "dark") {
    logo.src = "./imgs/logo__bgblack.png";
  } else {
    // Change this to the path for the light theme logo
    logo.src = "./imgs/logo__bgwhite.png";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function getEle(ele) {
  return document.querySelector(ele);
}

function getEleAll(ele) {
  return document.querySelectorAll(ele);
}

getEle(".nav-menu").onclick = () => {
  const overlay = getEle(".overlay__menu");
  const menu = getEle(".header__nav");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
};



const btnFooters = document.querySelectorAll(".btn-footer");
const footerLinks = document.querySelectorAll(".footer__link");
const icons = document.querySelectorAll(".fa-angle-down");

btnFooters.forEach((btnFooter, index) => {
  btnFooter.onclick = function () {
    const currentFooterLink = footerLinks[index];
    const currentIcon = icons[index];

    // Close all other footer__link elements
    footerLinks.forEach((link, i) => {
      if (i !== index && link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });

    // Toggle active class for the clicked footer__link
    currentFooterLink.classList.toggle("active");

    // Rotate icons
    icons.forEach((icon, i) => {
      if (i === index) {
        icon.classList.toggle("active");
      } else {
        icon.classList.remove("active");
      }
    });
  };
});

getEle("#btn__product").onclick = () => {
  const menuProduct = getEle(".menu__product");
  const iconNav = getEle(".fa-chevron-down");

  iconNav.classList.toggle("active");
  menuProduct.classList.toggle("active");
};

// btntotop
mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnPopup1 = document.querySelector(".btnLogin-popup-1");
const btnClose = document.querySelector(".icon-close");
const btnMenu = document.getElementById("btn-menu");
const popUpMenu = document.querySelector(".popup-menu");
const closeMenu = document.querySelector(".icon-close-menu");
const overlay = getEle(".overlay__menu");
if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    closeMenu.classList.add("active-close");
  });
}

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    btnMenu.classList.add("active-hidden");
    closeMenu.classList.remove("display-bars");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    popUpMenu.classList.remove("active-menu");
    btnMenu.classList.remove("active-hidden");
    closeMenu.classList.remove("active-close");
    closeMenu.classList.add("display-bars");
  });
}

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    popUpMenu.classList.add("active-menu");
  });
}

// if(btnMenu) {
//     btnMenu.addEventListener('click', ()=> {
//         popUpMenu.classList.remove('active-menu');
//     })
// }

if (btnPopup) {
  btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
    
    overlay.classList.add("active");
    const menu = getEle(".header__nav");
    menu.classList.remove("active");
  });
}

if (btnPopup1) {
  btnPopup1.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
    
    overlay.classList.add("active");
    const menu = getEle(".header__nav");
    menu.classList.remove("active");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    overlay.classList.remove("active");
    const menu = getEle(".header__nav");
    menu.classList.remove("active");
  });
}

if (registerLink) {
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
}

if (loginLink) {
  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });
}

getEle(".overlay__menu").onclick = () => {
  const menu = getEle(".header__nav");
  getEle(".overlay__menu.active").classList.remove("active");
  wrapper.classList.remove("active-popup");
    menu.classList.remove("active");
};