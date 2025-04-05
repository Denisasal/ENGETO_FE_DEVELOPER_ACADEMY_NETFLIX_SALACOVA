// MAIN PAGE
// SET UP THE "GO UP" ICONE
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".icon") as HTMLElement | null;

  if (!icon) return;

  // Show the icon after scrolling down 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      icon.classList.add("visible");
    } else {
      icon.classList.remove("visible");
    }
  });

  // Scroll to the top when clicking the icon
  icon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
