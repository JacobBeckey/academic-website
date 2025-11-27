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
   RESEARCH / RESOURCES: Abstract / Details Accordion Toggle
   ============================================================ */
function toggleAbstract(btnEl) {
  const card  = btnEl.closest(".publication-card");
  if (!card) return;

  const panel = card.querySelector(".abstract-panel");
  if (!panel) return;

  const isOpen = panel.classList.contains("open");

  // Close any other open panels + reset their buttons
  document.querySelectorAll(".abstract-panel.open").forEach((p) => {
    if (p === panel) return;

    p.classList.remove("open");

    const parentCard = p.closest(".publication-card");
    if (!parentCard) return;

    const otherBtn =
      parentCard.querySelector(".learnmore-btn") ||
      parentCard.querySelector(".abstract-btn");

    if (!otherBtn) return;

    const otherIcon  = otherBtn.querySelector("i");
    const otherLabel = otherBtn.querySelector("span");

    otherBtn.classList.remove("open");
    if (otherIcon) {
      otherIcon.classList.remove("ph-minus");
      otherIcon.classList.add("ph-plus");
    }
    if (otherLabel) {
      otherLabel.textContent = otherBtn.classList.contains("learnmore-btn")
        ? "Learn More"
        : "Abstract";
    }
  });

  // Toggle current panel
  panel.classList.toggle("open", !isOpen);

  const icon  = btnEl.querySelector("i");
  const label = btnEl.querySelector("span");

  btnEl.classList.toggle("open", !isOpen);

  if (!isOpen) {
    // Opening
    if (icon) {
      icon.classList.remove("ph-plus");
      icon.classList.add("ph-minus");
    }
    if (label) {
      label.textContent = btnEl.classList.contains("learnmore-btn")
        ? "Hide Details"
        : "Hide Abstract";
    }
  } else {
    // Closing
    if (icon) {
      icon.classList.remove("ph-minus");
      icon.classList.add("ph-plus");
    }
    if (label) {
      label.textContent = btnEl.classList.contains("learnmore-btn")
        ? "Learn More"
        : "Abstract";
    }
  }
}

/* ============================================================
   INITIALIZATION: Ensure panels + buttons start collapsed
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // All panels closed
  document.querySelectorAll(".abstract-panel").forEach((panel) => {
    panel.classList.remove("open");
  });

  // Reset all toggle buttons (research + resources)
  document
    .querySelectorAll(".abstract-btn, .learnmore-btn")
    .forEach((btn) => {
      const icon  = btn.querySelector("i");
      const label = btn.querySelector("span");

      btn.classList.remove("open");

      if (icon) {
        icon.classList.remove("ph-minus");
        icon.classList.add("ph-plus");
      }
      if (label) {
        label.textContent = btn.classList.contains("learnmore-btn")
          ? "Learn More"
          : "Abstract";
      }
    });
});
