(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const toggleLabel = navToggle?.querySelector(".sr-only");

  const closeMenu = () => {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (toggleLabel) toggleLabel.textContent = "Open navigation";
  };

  navToggle?.addEventListener("click", () => {
    const shouldOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    navMenu?.classList.toggle("is-open", shouldOpen);
    document.body.classList.toggle("nav-open", shouldOpen);
    if (toggleLabel) toggleLabel.textContent = shouldOpen ? "Close navigation" : "Open navigation";
  });

  navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      navToggle?.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu?.classList.contains("is-open")) return;
    if (!navMenu.contains(event.target) && !navToggle?.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) closeMenu();
  });

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18 || document.body.classList.contains("resume-page"));
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const projectCards = Array.from(document.querySelectorAll("[data-category]"));
  const filterStatus = document.querySelector("[data-filter-status]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter || "all";
      let visibleCount = 0;

      filterButtons.forEach((candidate) => {
        const isSelected = candidate === button;
        candidate.classList.toggle("is-active", isSelected);
        candidate.setAttribute("aria-pressed", String(isSelected));
      });

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
      });

      if (filterStatus) {
        const label = button.textContent.trim();
        filterStatus.textContent = selectedFilter === "all"
          ? `Showing all ${visibleCount} projects`
          : `Showing ${visibleCount} ${label} project${visibleCount === 1 ? "" : "s"}`;
      }
    });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if (!reduceMotion && "IntersectionObserver" in window && revealItems.length) {
    document.body.classList.add("motion-ready");
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -35px" });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const sectionLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
  const sections = sectionLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-28% 0px -62%", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll("[data-year]").forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
})();
