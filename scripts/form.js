// Footer: Current Year and Last Modified Date
const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

const today = new Date();
currentYearElement.textContent = today.getFullYear();
lastModifiedElement.textContent = document.lastModified;

// Product Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate Product Options in Select Field
function populateProductOptions() {
    const selectElement = document.getElementById('product-name');
    
    // Add placeholder option
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a Product...';
    placeholder.disabled = true;
    placeholder.selected = true;
    selectElement.appendChild(placeholder);

    // Populate with products
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use product ID as value
        option.textContent = product.name; // Display product name
        selectElement.appendChild(option);
    });
}

// Update Review Count Using localStorage
function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0; // Ensure it’s a number

    reviewCount += 1; // Increment count
    localStorage.setItem('reviewCount', reviewCount); // Save to localStorage

    const reviewCounter = document.getElementById('review-count');
    if (reviewCounter) {
        reviewCounter.textContent = `Total reviews submitted: ${reviewCount}`;
    }
}

// DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();

    // Only update review count if on the confirmation page
    if (window.location.pathname.includes('review.html')) {
        updateReviewCount();
    }
});
