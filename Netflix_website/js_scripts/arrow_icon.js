// MAIN PAGE
// SET UP THE "GO UP" ICONE
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.querySelector(".icon");
  if (!icon) return;
  // Show the icon after scrolling down 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      icon.classList.add(".icon.visible");
    } else {
      icon.classList.remove(".icon.visible");
    }
  });
  // Scroll to the top when clicking the icon
  icon.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
