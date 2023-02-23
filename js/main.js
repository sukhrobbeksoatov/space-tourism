document.addEventListener("click", (evt) => {
  siteNavToggleClick(evt);
});

// Sitenav toggle click
function siteNavToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  el.classList.toggle("opened");
}
