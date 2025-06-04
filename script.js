const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Strip 'a', 'an', 'the' for sorting
function stripArticle(band) {
  return band.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands
const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Add to DOM
const ul = document.getElementById("band");
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
