export async function fetchCourses() {
  try {
    const response = await fetch("data/coursesData.json");
    return await response.json();
  } catch (error) {
    console.error("Failed to load courses data:", error);
    return [];
  }
}
