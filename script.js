const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const updateActiveLink = () => {
  const currentSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 180 && rect.bottom >= 180;
  });

  navLinks.forEach((link) => {
    const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
};

updateActiveLink();
window.addEventListener("scroll", updateActiveLink, { passive: true });
