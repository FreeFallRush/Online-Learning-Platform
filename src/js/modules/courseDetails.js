import { fetchCourses } from "./courseData.js";

export async function renderCourseDetail(containerId) {
  const courseTitle = localStorage.getItem("selectedCourse");

  if (!courseTitle) {
    console.error("No course selected");
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const courses = await fetchCourses();
  const course = courses.find(
    (c) => c.title.toLowerCase() === courseTitle.toLowerCase()
  );

  if (!course) {
    container.innerHTML = `<p>Course not found.</p>`;
    return;
  }

  container.innerHTML = `
    <section class="course-container">
      <h1>${course.title}</h1>
      <p><strong>Instructor:</strong> ${course.instructor}</p>
      <p><strong>Level:</strong> ${course.level}</p>
      <p><strong>Description:</strong> ${course["description-brief"]}</p>
      <p><strong>Requirements:</strong> ${course.requirements}</p>
      <div>
        <h3>What you'll learn</h3>
        <ul>
          ${course["course-promises"]
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>
      <div>
        <h3>Course Includes</h3>
        <ul>
          ${course["course-includes"]
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>
      <div>
        <h3>Why Take This Course</h3>
        <ul>
          ${course["course-motivations"]
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>
      <div>
        <h3>Target Audience</h3>
        <ul>
          ${course["course-target"].map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}
