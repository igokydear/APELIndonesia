window.addEventListener("scroll", function () {
  const stickyNavbar = this.document.getElementById("navbar");
  stickyNavbar.classList.toggle("sticky", this.window.scrollY > 0);
});
