// scripts/getdates.js

// Set the current year dynamically in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date dynamically in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
