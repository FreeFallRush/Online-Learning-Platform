import navbar from "./modules/navbar.js";
import slider from "./modules/slider.js";
import { loadMap } from "./modules/map.js";

document.addEventListener("DOMContentLoaded", async () => {
  navbar();
  slider();

  const map = document.getElementById("map-container");

  if (map) {
    loadMap();
  }
});
