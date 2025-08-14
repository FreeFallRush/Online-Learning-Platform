export default class Course {
  constructor({
    title,
    instructor,
    level,
    image,
    "description-brief": description,
  }) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.image = image;
    this.description = description || "No description available. ";
  }

  //Course card
  renderCard() {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHtml = `
         <img src="${this.image}" alt="${this.title}" width="300" height="300"/>
          <div class="course-info">
            <h2>${this.title}</h2>
            <p>${this.instructor}</p>
            <p class="level">${this.level}</p>
            <p class="desc">${this.description}...</p>
          </div>
           <button class="show-more" data-title="${this.title}">Show More</button>
        `;
    return card;
  }
}
