// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // 1. Explore Now Button Click
    const exploreBtn = document.querySelector(".explore_btn");
    exploreBtn.addEventListener("click", () => {
        alert("Thanks for exploring! Scroll down to view our menu 🍽️");
        document.querySelector(".menu").scrollIntoView({ behavior: "smooth" });
    });

    // 2. Newsletter Email Validation
    const emailInput = document.querySelector(".news_letter input[type='email']");
    emailInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            validateEmail();
        }
    });

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert("✅ Thank you for subscribing!");
            emailInput.value = "";
        } else {
            alert("❌ Please enter a valid email address.");
        }
    }

    // 3. Menu Item Hover Effects
    const gridImages = document.querySelectorAll(".grid_image");
    gridImages.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.05)";
            image.style.transition = "transform 0.3s ease";
        });
        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    });

    // 4. Footer Icons Feedback
    const icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            alert("Follow us on social media 🔗");
        });
    });
});
