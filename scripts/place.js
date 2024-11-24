// Display current year and last modified date in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Static weather data (for now, as we are using static values)
const temperature = 15; // Celsius
const windSpeed = 5; // km/h

// Function to calculate windchill based on temperature and wind speed
function calculateWindChill(temp, windSpeed) {
    // Check if the windchill calculation conditions are met
    if (temp <= 10 && windSpeed > 4.8) {
        // Windchill formula for Celsius
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return 'N/A'; // If the conditions are not met
}

// Display the windchill calculation in the weather section
document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
