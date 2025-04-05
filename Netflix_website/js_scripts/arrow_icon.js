// MAIN PAGE
// SET UP THE "GO UP" ICONE
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.querySelector(".icon");
  if (!icon) return;

  window.addEventListener("scroll", function () {
    // Check scroll position
    if (window.scrollY > 200) {
      icon.classList.add("visible"); // Add the "visible" class to show the icon
    } else {
      icon.classList.remove("visible"); // Remove the "visible" class to hide it
    }
  });

  // Scroll to the top when clicking the icon
  icon.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
