const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  

  function populateProductOptions() {
    const selectElement = document.getElementById('product-name');
  
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id; 
      option.textContent = product.name; 
      selectElement.appendChild(option);
    });
  }
  
    function updateReviewCount() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1); 
    const reviewCounter = document.getElementById('review-count');
    reviewCounter.textContent = `Total reviews submitted: ${localStorage.getItem('reviewCount')}`;
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    
    populateProductOptions();
    
    if (window.location.pathname.includes('review.html')) {
      updateReviewCount();
    }
  });
  