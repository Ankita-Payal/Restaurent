// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Menu when "Explore Now" is clicked
  const exploreBtn = document.querySelector(".explore_btn");
  const menuSection = document.querySelector(".menu");

  if (exploreBtn && menuSection) {
    exploreBtn.addEventListener("click", function () {
      menuSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Newsletter email submission (enter key or blur)
  const emailInput = document.querySelector('.news_letter input[type="email"]');
  if (emailInput) {
    emailInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        submitEmail(emailInput);
      }
    });

    emailInput.addEventListener("blur", function () {
      if (emailInput.value.trim()) {
        submitEmail(emailInput);
      }
    });
  }

  function submitEmail(inputElement) {
    const email = inputElement.value.trim();
    if (validateEmail(email)) {
      alert(`Thanks for subscribing, ${email}!`);
      inputElement.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  }

  function validateEmail(email) {
    // Simple email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Optional: Add hover effect to menu grid items (can be animated)
  const gridImages = document.querySelectorAll(".grid_image");
  gridImages.forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });

  // (Optional) Mobile menu toggle logic
  const navToggle = document.querySelector(".nav_toggle"); // you can add this icon/button in nav
  const navLinks = document.querySelector(".navigation");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
