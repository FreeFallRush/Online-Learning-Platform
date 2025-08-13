export default function navbar() {
  const burger = document.getElementById("burger-icon");
  const navLinks = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");
  const submenu = document.querySelector(".submenu");

  if (!burger || !navLinks || !dropdown) return;

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
