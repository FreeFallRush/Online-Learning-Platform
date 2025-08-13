export default function navbar() {
  const burger = document.getElementById("burger-icon");
  const navLinks = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");
  const submenu = document.querySelector(".submenu");

  //Check if elements exist
  if (!burger || !navLinks || !dropdown) return;

  // Show/hide the mobile menu when burger is clicked
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Mobile Show/Hide the submenu when is clicked
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      submenu.classList.toggle("open");
    }
  });

  //Mobile- Stop submenu from closing if a submenu link is clicked
  const submenuLinks = document.querySelectorAll(".submenu a");
  submenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  // Mobile - Close submenu if clicking outside of it
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      submenu.classList.remove("open");
    }
  });
}
