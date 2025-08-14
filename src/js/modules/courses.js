import { fetchCourses } from "./courseData.js";
import Course from "./course.js";

export async function initCourses() {
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("searchInput");
  const sortOptions = document.getElementById("sortOptions");
  const filterOptions = document.getElementById("filterOptions");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");

  let allCourses = await fetchCourses();
  let currentCourses = [...allCourses];
  let currentPage = 1;
  let itemsPerPage = 10;

  const updateGallery = () => {
    // Search
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterOptions.value;
    const sortValue = sortOptions.value;

    let filtered = currentCourses.filter((course) => {
      let matchesSearch = course.title.toLowerCase().includes(searchValue);
      let matchesLevel = filterValue === "all" || course.level === filterValue;
      return matchesSearch && matchesLevel;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (sortValue === "title-asc") return a.title.localeCompare(b.title);
      if (sortValue === "title-desc") return b.title.localeCompare(a.title);
      if (sortValue === "instructor-asc")
        return a.instructor.localeCompare(b.instructor);
      if (sortValue === "instructor-desc")
        return b.instructor.localeCompare(a.instructor);
    });

    // Pagination
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedCourses = filtered.slice(start, start + itemsPerPage);

    // Clear the gallery and render new courses
    gallery.innerHTML = "";
    paginatedCourses.forEach((courseData) => {
      const course = new Course(courseData);
      const courseCard = course.renderCard();

      // Add event listener to "Show More" button
      const showMoreButton = courseCard.querySelector(".show-more");
      showMoreButton.addEventListener("click", () => {
        // Save selected title in localStorage
        localStorage.setItem("selectedCourse", courseData.title);
        // Redirect to course page
        window.location.href = "courseDetails.html";
      });

      gallery.appendChild(courseCard);
    });

    // Update page info
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    // Enable/Disable buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  };

  // Event listeners for filtering, sorting, and pagination
  searchInput.addEventListener("input", () => {
    currentPage = 1;
    updateGallery();
  });

  sortOptions.addEventListener("change", () => {
    currentPage = 1;
    updateGallery();
  });

  filterOptions.addEventListener("change", () => {
    currentPage = 1;
    updateGallery();
  });

  prevBtn.addEventListener("click", () => {
    currentPage--;
    updateGallery();
  });

  nextBtn.addEventListener("click", () => {
    currentPage++;
    updateGallery();
  });

  updateGallery();
}
