// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("active");
  });
});

// Contact form (placeholder)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
