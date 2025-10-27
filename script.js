/* ============================================================
   GLOBAL NAVIGATION: Hamburger Menu Toggle
   ============================================================ */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ============================================================
   RESEARCH PAGE: Abstract Accordion Toggle (Fixed)
   ============================================================ */
function toggleAbstract(btnEl) {
  const card  = btnEl.closest(".publication-card");
  const panel = card.querySelector(".abstract-panel");
  const icon  = btnEl.querySelector("i");
  const label = btnEl.querySelector("span");
  const isOpen = panel.classList.contains("open");

  // Close any others
  document.querySelectorAll(".abstract-panel.open").forEach(p => {
    if (p !== panel) {
      p.classList.remove("open");
      const b = p.closest(".publication-card").querySelector(".abstract-btn");
      b.querySelector("i").classList.replace("ph-minus", "ph-plus");
      b.querySelector("span").textContent = "Abstract";
    }
  });

  // Toggle current
  panel.classList.toggle("open", !isOpen);
  icon.classList.toggle("ph-minus", !isOpen);
  icon.classList.toggle("ph-plus", isOpen);
  label.textContent = isOpen ? "Abstract" : "Hide Abstract";

}


// Ensure start collapsed (classes only; no inline styles)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.abstract-panel').forEach(p => p.classList.remove('open'));
});

/* ============================================================
   INITIALIZATION: Ensure panels start collapsed on load
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".abstract-panel").forEach((panel) => {
    panel.classList.remove("open");
    panel.style.maxHeight = "0";
    panel.style.opacity = "0";
    panel.style.paddingTop = "0";
    panel.style.paddingBottom = "0";
  });
});
