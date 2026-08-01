// Small entrance animation for hero content
document.addEventListener("DOMContentLoaded", () => {
  const heroEls = document.querySelectorAll(".hero .eyebrow, .hero h1, .hero p.lead, .hero-ctas, .orb-wrap");
  heroEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .6s ease, transform .6s ease";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 150 * i);
  });

  // Buttons: simple click feedback
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.96)";
      setTimeout(() => (btn.style.transform = ""), 120);
    });
  });
});