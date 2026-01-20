document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Destacar link ativo na barra superior ao rolar
  const sections = document.querySelectorAll(
    "#guias, #faq, #seguranca, #lgpd, #troubleshooting, #suporte"
  );
  const navLinks = document.querySelectorAll(".rc-docs-nav a");

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");
      if (href === id) {
        link.classList.add("rc-docs-nav--active");
      } else {
        link.classList.remove("rc-docs-nav--active");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: 0.3,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
