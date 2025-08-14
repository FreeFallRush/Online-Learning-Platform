# Online-Learning-Platform

---> [view project](https://freefallrush.github.io/Online-Learning-Platform/) <----

This project was made according to EPAM requirments, as a capstone project after Front-End training (Initially made on GitLab):

🔹Goal:
Your task is to create a web application using HTML, CSS, and JavaScript to practice your core web development skills. You are required to avoid using JavaScript frameworks (e.g., React, Angular) or CSS frameworks (e.g., Bootstrap). The task is quite complex and may take approximately 20 hours.

🔹Online Learning Platform:
Create a web application for an online learning platform that allows users to browse and enroll in courses. The platform should include course information such as titles, instructors, difficulty levels, and topics, along with photos. Highlight user interactions by adding features like a course list, search functionality, and tools for exploring the course catalog. The landing page should feel visually organized with responsive layouts, a gallery for presenting course-related images, and intuitive navigation. Use interactive elements such as pagination, sorting, and filtering to help users explore course data efficiently.

The stages you will go through as you complete the project - as well as the requirements for each stage – are described below. Carefully review all the theoretical information for each stage before starting the project.

1. Set up the project

   Start by creating a Git repository in autocode.git.epam.com. Click the "Start" button to clone a predefined template into your project space. Then, complete the following steps to set up your project:
   🔹 Clone a repository locally. Inside the cloned repository, initialize a new project using npm. Make sure the package.json file is created correctly. If you don't know how to initialize a project, you can follow the instructions provided here.
   🔹 In your project folder, create a .gitignore file and add node_modules to it to prevent this directory from being tracked in your Git repository.
   🔹 Add Sass into your project and implement a "compile" script to the package.json file to handle the compilation of all .scss files into .css files. If you’re unfamiliar with how to compile .scss files into .css, please refer to the guide.
   🔹 Add a description to a README.md file. It should contain clear instructions on how to set up and run your project, including prerequisites (e.g., npm install and Sass compilation process).

2. Web Application Development

   The second stage involves building your web application. Follow the general requirements below to structure your HTML, CSS, and JavaScript code effectively. The application should use HTML, CSS, and JavaScript to create a dynamic and user-friendly experience.

# HTML & CSS part:

• Create semantic HTML markup using tags like header, footer, article, nav, ul, li, etc., for structured content organization.
• Implement styles using Sass: utilize mixins, variables, and Sass inheritance to simplify and organize styles.
• Apply Flexbox and/or CSS Grid layouts to arrange elements effectively.
• The “Home” page should contain an image slider and a navigation menu:
o Implement a submenu in the main menu using proper tags (nav, ul, li, a).
o Ensure the menu block stretches across the available space (responsive design). If necessary, menu can be displayed on different devices in different ways.
• Ensure the web application is responsive: use media queries to adjust layout and styles so that the design works on all devices and avoids horizontal scrolling when resizing the browser window.

# JavaScript part:

• Implement a "Gallery" page that displays a set of cards featuring courses or properties (depending on the selected project option). Each card should display an image with 300 x 300 px dimensions along with all relevant information provided in the data (JSON) file. Handle varying original image sizes by ensuring proper scaling or cropping.
• Add client-side pagination to display data page-by-page (maximum of 10 elements per page). Include navigation controls for users to access other pages. Additionally, implement asynchronous loading for elements that are initially hidden. These elements should load dynamically when the user clicks a “Show more” button.
• Add functionality to enable sorting and filtering of data on designated pages.
• Provide functionality to search information across the data provided.
• Include a "Contacts" page with a map indicating a specific location. Use JavaScript to integrate a map service like Google Maps or OpenStreetMap.

# Final notes:

• Ensure your web application combines HTML, CSS, and JavaScript smoothly for a functional and engaging user experience.
• Test your application on multiple browsers and devices to ensure it works properly and looks good everywhere.
• Write clean, well-organized code that is easy to maintain and reuse.

3. Project Compilation, Verification & Submission

Once your project is complete, take the following steps to ensure quality and submit it for evaluation:
Quality control:
• Add linters: Set up ESLint for JavaScript and Stylelint for Sass/CSS to maintain consistent code quality and style.
• Linting script: Add a "lint" script to your package.json to check both .js and .scss files for issues. Fix any problems detected.

---

- Moved index.html from src folder for live preview here

---

# 📘 Appendix – Online Learning Platform - Capstone project for EPAM Front-End Training

Appendix is a responsive and interactive online learning platform designed as a front-end capstone project. It offers users the ability to browse, search, and filter courses with dynamic content using vanilla JavaScript with ES Modules, modular SCSS, and a component-based structure.

## ---> [view project](https://freefallrush.github.io/Online-Learning-Platform/) <----

## 🚀 Features

- 🖥️ Fully responsive layout for all screen sizes
- 🔍 Search, filter, and sort courses
- 📄 Course detail pages rendered dynamically
- 🎨 SCSS compiled to CSS
- ✅ Code linting with ESLint and Stylelint

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** – [Download & install](https://nodejs.org/)
- **Sass** – for compiling SCSS into CSS
- **ESLint** – for JavaScript linting
- **Stylelint** – for SCSS/CSS linting

Installation

Clone the repository:

     git clone https://autocode.git.epam.com/mihaela_caldare/capstone-project-template.git

Navigate to the project folder:

     cd capstone-project-template

Install all dependencies:

     npm install

Sass – for compiling SCSS into CSS
Install globally:

     npm install -g sass

ESLint – for JavaScript linting
Install globally (optional, if not using project-local version):

     npm install -g eslint

Stylelint – for SCSS/CSS linting
Install globally (optional):

     npm install -g stylelint

🧵 SCSS Compilation

To compile SCSS into CSS manually:

     npm run compile:sass

To automatically watch and recompile on file changes:

     npm run watch:sass

🧹 Linting Code

To check for code issues and enforce consistent style:

     npm run lint

This runs both ESLint (for JavaScript) and Stylelint (for SCSS)

📡 Running the Project

This is a static front-end project, so there is no build system or backend involved. You can run the project locally in two main ways:
🔹 Option 1: Using VS Code + Live Server (Recommended)

     Open the project folder in VS Code.

     Install the Live Server extension.

     Open src/index.html.

     Click the “Go Live” button at the bottom of VS Code to launch the site in your browser.

🔹 Option 2: Using npx serve

If you prefer using the terminal:

     npx serve src

This will serve files from the src folder at http://localhost:3000 (or another available port).

🖼️ Assets and Attribution

All images used in this project are sourced from Unsplash and are free to use under their license.
📄 License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it for your own projects.
🙌 Acknowledgments

Project developed as part of the Capstone assignment.

Thanks to the creators of open-source tools like Sass, ESLint, Stylelint, and Unsplash.
