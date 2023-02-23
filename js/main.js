// elements
const elDestImg = document.querySelector("[data-dest-img]");
const elDestHeading = document.querySelector("[data-dest-heading]");
const elDestDescription = document.querySelector("[data-dest-desc]");
const elDestDistance = document.querySelector("[data-dest-distance]");
const elDestTime = document.querySelector("[data-dest-time]");

// event delegation
document.addEventListener("click", (evt) => {
  siteNavToggleClick(evt);
  destinationItemClick(evt);
});

// Sitenav toggle click
function siteNavToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  el.classList.toggle("opened");
}

function destinationItemClick(evt) {
  const el = evt.target.closest("[data-dest-item]");

  if (!el) return;

  el.classList.add("info-destination__item--active");

  const els = document.querySelectorAll(
    `[data-dest-item].info-destination__item--active`
  );
  els.forEach((el) => el.classList.remove("info-destination__item--active"));
  el.classList.add("info-destination__item--active");

  data.destinations.forEach((planet) => {
    if (el.innerText.toLowerCase() === planet.name.toLowerCase()) {
      elDestImg.src = planet.images.png;
      elDestImg.srcset = `${planet.images.png} 1x, ${planet.images.png2x} 2x`;
      elDestHeading.textContent = planet.name;
      elDestDescription.textContent = planet.description;
      elDestDistance.textContent = planet.distance;
      elDestTime.textContent = planet.travel;
    }
  });
}
