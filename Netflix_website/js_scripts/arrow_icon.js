// MAIN PAGE
// SET UP THE ICONE
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.querySelector(".icon");
  if (!icon) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      icon.classList.add("visibleIcon");
    } else {
      icon.classList.remove("visibleIcon");
    }
  });

  icon.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
