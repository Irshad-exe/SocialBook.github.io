var settingsmenu = document.querySelector(".settings-menu");
var darktheme = document.getElementById("themetoggle");

function settingsMenuToggle() {
  settingsmenu.classList.toggle(".settings-menu-height");
}
darktheme.onclick = function () {
  darktheme.classList.toggle(".themetoggle-on");
  document.body.classList.toggle(".dark-theme");
 
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  }
   else
   {
    localStorage.setItem("theme", "light");
  }
}




if (localStorage.getItem("theme") == "light") {
  darktheme.classList.remove(".themetoggle-on");
  document.body.classList.remove(".dark-theme");
}
 else if (localStorage.getItem("theme") == "dark") {
  darktheme.classList.add(".themetoggle-on");
  document.body.classList.add(".dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
