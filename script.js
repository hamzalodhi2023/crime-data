// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  // Login form submission
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (
        e.target.querySelector("input[name='user']").value !== "data-digpsz" &&
        e.target.querySelector("input[name='password']").value !==
          "$data@digpsz"
      ) {
        alert("Invalid credentials");
        return;
      }

      if (
        e.target.querySelector("input[name='user']").value === "data-digpsz" &&
        e.target.querySelector("input[name='password']").value ===
          "$data@digpsz"
      ) {
        // Redirect to the dashboard
        window.location.href = "/html/home.html";
      }
    });
  }

  // Sign out button
  const signOutBtn = document.querySelector(".sign-out-btn");
  if (signOutBtn) {
    signOutBtn.addEventListener("click", function () {
      // Add your sign out logic here
      window.location.href = "/index.html";
    });
  }

  // Add hover effect to cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    });
  });
});

// Handle window resize
window.addEventListener("resize", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (window.innerWidth > 768) {
    if (navToggle) navToggle.remove();
    if (sidebar) sidebar.classList.remove("active");
  } else if (!document.querySelector(".nav-toggle")) {
    const navToggle = document.createElement("button");
    navToggle.className = "nav-toggle";
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(navToggle);
  }
});
