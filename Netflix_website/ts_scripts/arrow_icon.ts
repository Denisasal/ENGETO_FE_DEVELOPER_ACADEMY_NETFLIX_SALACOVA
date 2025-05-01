// MAIN PAGE
// SET UP THE ICON
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector<HTMLElement>(".icon");
  if (!icon) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      icon.classList.add("visibleIcon");
    } else {
      icon.classList.remove("visibleIcon");
    }
  });

  icon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
