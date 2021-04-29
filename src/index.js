const btn = document.querySelector(".mobile-menu-btn");
const sidebar = document.querySelector(".sidebar");
const toggleOff = document.querySelector(".menu-toggle-off");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

toggleOff.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-0");
});
