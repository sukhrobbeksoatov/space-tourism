// Load event
window.addEventListener("load", () => {
  data.technology.forEach((technology) => {
    if (elTechnologyImg.dataset.launchImg === technology.name) {
      if (window.innerWidth < 992) {
        elTechnologyImg.src = technology.images.landscape;
        elTechnologyImg.srcset = `${technology.images.landscape} 1x, ${technology.images.landscape2x} 2x`;
        return;
      } else {
        elTechnologyImg.src = technology.images.portrait;
        elTechnologyImg.srcset = `${technology.images.portrait} 1x, ${technology.images.portrait2x} 2x`;
        return;
      }
    }
  });
});

// Resize event
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
