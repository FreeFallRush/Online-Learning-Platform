export default function slider() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  // Show the slide at the given index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });

    // Highlight the active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Move to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // When a dot is clicked, show the corresponding slide
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Show the first slide when the page loads
  showSlide(currentIndex);
}
