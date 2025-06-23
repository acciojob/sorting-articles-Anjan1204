document.addEventListener("DOMContentLoaded", function () {
  const bands = [
    "Anywhere But Here",
    "The Bled",
    "Counterparts",
    "The Devil Wears Prada",
    "The Midway State",
    "Norma Jean",
    "Oh, Sleeper",
    "An Old Dog"
  ];

  const ul = document.createElement("ul");
  ul.id = "bands";

  bands.forEach(band => {
    const li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
});
