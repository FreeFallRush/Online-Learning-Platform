import navbar from "./modules/navbar.js";
import slider from "./modules/slider.js";
import { loadMap } from "./modules/map.js";
import { initCourses } from "./modules/courses.js";
import { renderCourseDetail } from "./modules/courseDetails.js";

document.addEventListener("DOMContentLoaded", async () => {
  navbar();
  slider();

  const map = document.getElementById("map-container");
  const gallery = document.getElementById("gallery");
  const courseDetails = document.getElementById("course-detail");

  if (map) {
    loadMap();
  }

  if (gallery) {
    await initCourses();
  } else if (courseDetails) {
    await renderCourseDetail("course-detail");
  }
});
