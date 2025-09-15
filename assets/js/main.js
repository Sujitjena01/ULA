
  // Ensure accordion headers are tabbable and can be activated with Enter/Space
  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });


  //Header Profile toggle
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  // Toggle on chevron click
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function () {
    dropdown.classList.remove("open");
  });

  // Close dropdown on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dropdown.classList.remove("open");
      toggleBtn.focus(); // optional: return focus to button
    }
  });
});

