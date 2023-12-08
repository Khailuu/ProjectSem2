const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");
const logo = document.querySelector('.change__logo'); // Corrected selector

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

getEle(".overlay__menu").onclick = () => {
  const menu = getEle(".header__nav");
  menu.classList.toggle("active");
  getEle(".overlay__menu.active").classList.remove("active");
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
