// elements

// Destination
const elDestImg = document.querySelector("[data-dest-img]");
const elDestHeading = document.querySelector("[data-dest-heading]");
const elDestDescription = document.querySelector("[data-dest-desc]");
const elDestDistance = document.querySelector("[data-dest-distance]");
const elDestTime = document.querySelector("[data-dest-time]");

// Crew
const elCrewHeading = document.querySelector("[data-crew-heading]");
const elCrewName = document.querySelector("[data-crew-name]");
const elCrewDesc = document.querySelector("[data-crew-desc]");
const elCrewImg = document.querySelector("[data-crew-img]");

// Technology
const elTechnologyImg = document.querySelector(".launch-technology__img");

// event delegation
document.addEventListener("click", (evt) => {
  siteNavToggleClick(evt);
  destinationItemClick(evt);
  crewPaginationItemClick(evt);
  technologyNavListItemClick(evt);
});

// Sitenav toggle click
function siteNavToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  el.classList.toggle("opened");
}

// Destination item click
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
      elDestImg.alt = planet.name;
      elDestImg.srcset = `${planet.images.png} 1x, ${planet.images.png2x} 2x`;
      elDestHeading.textContent = planet.name;
      elDestDescription.textContent = planet.description;
      elDestDistance.textContent = planet.distance;
      elDestTime.textContent = planet.travel;
    }
  });
}

// crew pagination item click
function crewPaginationItemClick(evt) {
  const el = evt.target.closest("[data-crew-pagination]");

  if (!el) return;

  const els = document.querySelectorAll(
    "[data-crew-pagination].pagination-list__item--active"
  );
  els.forEach((el) => el.classList.remove("pagination-list__item--active"));
  el.classList.add("pagination-list__item--active");

  data.crew.forEach((crew) => {
    if (el.dataset.crewPagination === crew.name) {
      elCrewHeading.textContent = crew.role;
      elCrewName.textContent = crew.name;
      elCrewDesc.textContent = crew.bio;
      elCrewImg.src = crew.images.png;
      elCrewImg.srcset = `${crew.images.png} 1x, ${crew.images.png2x} 2x`;
      elCrewImg.alt = crew.name;
    }
  });
}

// Technology navlist item click
function technologyNavListItemClick(evt) {
  const el = evt.target.closest("[data-technology-list-item]");

  if (!el) return;

  const els = document.querySelectorAll(
    "[data-technology-list-item].navlist-technology__item--active"
  );

  els.forEach((el) => el.classList.remove("navlist-technology__item--active"));

  el.classList.add("navlist-technology__item--active");

  data.technology.forEach((technology) => {
    if (el.dataset.technologyListItem === technology.name) {
      if (window.innerWidth < 992) {
        elTechnologyImg.src = technology.images.landscape;
        elTechnologyImg.srcset = `${technology.images.landscape} 1x, ${technology.images.landscape2x} 2x`;
        elTechnologyImg.dataset.launchImg = technology.name;
      } else {
        elTechnologyImg.src = technology.images.portrait;
        elTechnologyImg.srcset = `${technology.images.portrait} 1x, ${technology.images.portrait2x} 2x`;
        elTechnologyImg.dataset.launchImg = technology.name;
      }
    }
  });
}

window.addEventListener("resize", () => {
  data.technology.forEach((technology) => {
    if (elTechnologyImg.dataset.launchImg === technology.name) {
      if (window.innerWidth < 992) {
        elTechnologyImg.src = technology.images.landscape;
        elTechnologyImg.srcset = `${technology.images.landscape} 1x, ${technology.images.landscape2x} 2x`;
      } else {
        elTechnologyImg.src = technology.images.portrait;
        elTechnologyImg.srcset = `${technology.images.portrait} 1x, ${technology.images.portrait2x} 2x`;
      }
    }
  });
});
