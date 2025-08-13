export function loadMap() {
  const mapContainer = document.getElementById("map-container");

  if (mapContainer) {
    const iframe = document.createElement("iframe");

    iframe.src =
      "https://www.openstreetmap.org/export/embed.html?bbox=26.097%2C44.431%2C26.107%2C44.437&layer=mapnik&marker=44.434%2C26.102";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.style.border = "1px solid #ccc";
    iframe.loading = "lazy";
    iframe.title = "Appendix Location";

    mapContainer.appendChild(iframe);
  }
}
