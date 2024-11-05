const topMenu = document.getElementById("ncv-top-menu");
const toggleMenu = document.getElementById("ncv-toggle-menu");

document.addEventListener("click", (e) => {
  if (toggleMenu.contains(e.target)) {
    topMenu.classList.toggle("top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    if (topMenu.classList.contains("top-menu-expanded")) {
      topMenu.classList.remove("top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
