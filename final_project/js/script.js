document.addEventListener("DOMContentLoaded", () => {
    // Display current year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
  
    // Dynamic quote generation on Home page
    const quotes = [
      "Photography is the story I fail to put into words.",
      "A picture is worth a thousand words.",
      "Capturing moments, one click at a time."
    ];
    const quoteButton = document.getElementById("quoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");
  
    if (quoteButton) {
      quoteButton.addEventListener("click", () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
      });
    }
  
    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
      });
    }
  });
  