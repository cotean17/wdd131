document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


// Handle the hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
// Function to display temples
function displayTemples(filteredTemples) {
  const container = document.getElementById('temple-container');
  container.innerHTML = ''; // Clear existing content
  filteredTemples.forEach(temple => {
    const templeCard = `
      <div class="temple-card">
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      </div>`;
    container.innerHTML += templeCard;
  });
}

// Filter for temples dedicated before 1900
function filterOldTemples() {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
}

// Filter for temples dedicated after 2000
function filterNewTemples() {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
}

// Filter for temples larger than 90000 sq ft
function filterLargeTemples() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

// Filter for temples smaller than 10000 sq ft
function filterSmallTemples() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

// Show all temples (reset view)
function showAllTemples() {
  displayTemples(temples);
}
document.addEventListener('DOMContentLoaded', () => {
  // Display all temples by default
  showAllTemples();

  // Add event listeners to filter options
  document.getElementById('old-temples').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    filterOldTemples();
  });

  document.getElementById('new-temples').addEventListener('click', (event) => {
    event.preventDefault();
    filterNewTemples();
  });

  document.getElementById('large-temples').addEventListener('click', (event) => {
    event.preventDefault();
    filterLargeTemples();
  });

  document.getElementById('small-temples').addEventListener('click', (event) => {
    event.preventDefault();
    filterSmallTemples();
  });

  document.getElementById('home-temples').addEventListener('click', (event) => {
    event.preventDefault();
    showAllTemples();
  });
});

// Toggle visibility of the navigation menu when the hamburger button is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile Temple",
    location: "Santiago, Chile",
    dedicated: "1981, May, 30",
    area: 20831,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7572.jpg"
  },
  {
    templeName: "Concepción Chile Temple",
    location: "Concepción, Chile",
    dedicated: "2018, October, 28",
    area: 23095,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-1199.jpg"
  },
  {
    templeName: "Antofagasta Chile",
    location: "Antofagasta, Chile",
    dedicated: "2020, November, 27",
    area: 23000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608.jpg"
  },
  
];
