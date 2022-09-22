window.addEventListener("scroll", function () {
  const stickyNavbar = this.document.getElementById("navbar");
  stickyNavbar.classList.toggle("sticky", this.window.scrollY > 0);
});

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
