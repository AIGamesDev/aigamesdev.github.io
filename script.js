// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if elements exist before adding event listeners
  const navbarToggler = document.querySelector("#navbar-toggler");
  const navbarLinks = document.querySelector("#navbar-links");
  const navbar = document.querySelector(".navbar");

  if (navbarToggler && navbarLinks) {
    navbarToggler.addEventListener("click", () => {
      navbarLinks.classList.toggle("open");
    });
  }

  if (navbar) {
    function changeNavbarColor() {
      const scrollThreshold = window.innerWidth < 768 ? 500 : 800;
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", changeNavbarColor);
  }
});