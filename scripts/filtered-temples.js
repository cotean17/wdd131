const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();

const modified = document.querySelector("#lastModified");
modified.innerHTML ="Last modified: "+ document.lastModified;

const menuBtn = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuBtn.addEventListener('click', function() {
    navigation.classList.toggle('show')
    menuBtn.classList.toggle('show')
})

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
      "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7571.jpg"
    },
    {
      empleName: "Concepción Chile Temple",
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

  function templeTemplate(temple) {
    return `<section class="card card-body">
        <h3>${temple.templeName}</h3>
        <p>LOCATION: ${temple.location}</p>
        <p>DEDICATED: ${temple.dedicated}</p>
        <p>AREA: ${temple.area} sq ft</p>
        <picture>
            <img src="${temple.imageUrl}" width="400" height="250" alt="${temple.templeName}" loading="lazy">
        </picture>
    </section>`
  };

  
const templesElement = document.getElementById('temples')
const titleElement = document.getElementById('templeTitle')

function displayTemples(temples, filter) {
    
   filterTitle(temples, filter)

    activeNav(filter)
    
    const templesHtml = temples.map(templeTemplate);
    templesElement.innerHTML = ''
    templesElement.innerHTML = templesHtml.join('')
}

function filterTitle (temples, filter) {
    switch (filter) {
        case 'oldFilter':
            titleElement.innerHTML = `Temples built before 1900 - (${temples.length})`
            break
        case 'newFilter':
            titleElement.innerHTML = `Temples built after 2000 - (${temples.length})`
            break
        case 'largeFilter':
            titleElement.innerHTML = `Temples larger than 90,000 sq ft - (${temples.length})`
            break
        case 'smallFilter':
            titleElement.innerHTML = `Temples smaller than 10,000 sq ft - (${temples.length})`
            break
        default:
            titleElement.innerHTML = ` Temples - (${temples.length})`
    }
}

function activeNav(activeId) {
    const navIds = ['allTemples', 'oldFilter', 'newFilter', 'largeFilter', 'smallFilter'];

    document.getElementById(activeId).classList.add('active');
    
    filteredIds = navIds.filter((id) => id != activeId)
    
    filteredIds.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
}

displayTemples(temples, 'allTemples')

const homeNavBtn = document.getElementById('allTemples');
const oldNavBtn = document.getElementById('oldFilter');
const newNavBtn = document.getElementById('newFilter');
const largeNavBtn = document.getElementById('largeFilter');
const smallNavBtn = document.getElementById('smallFilter');

homeNavBtn.addEventListener('click', function() {
    displayTemples(temples,'allTemples')
});

oldNavBtn.addEventListener('click', function() {
    const oldTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0,4)) < 1900 );
    displayTemples(oldTemples, 'oldFilter')
});

newNavBtn.addEventListener('click', function() {
    const newTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0,4)) > 2000 );
    displayTemples(newTemples, 'newFilter')
});

largeNavBtn.addEventListener('click', function() {
    const largeTemples = temples.filter((temple) => temple.area > 90000 );
    displayTemples(largeTemples, 'largeFilter')
});

smallNavBtn.addEventListener('click', function() {
    const smallTemples = temples.filter((temple) => temple.area < 10000 );
    displayTemples(smallTemples, 'smallFilter')
});