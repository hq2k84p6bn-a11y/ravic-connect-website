document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Botão "Entrar" redireciona para dashboard
  const loginBtn = document.querySelector(".rc-btn[type='button']");
  if (loginBtn && loginBtn.textContent.includes("Entrar")) {
    loginBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }

  // Botão "Ver dashboard demo" também redireciona
  const demoBtn = document.querySelector(".rc-btn--ghost");
  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }

  // Form de email no CTA
  const ctaForm = document.querySelector(".rc-cta__form");
  if (ctaForm) {
    ctaForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = ctaForm.querySelector('input[type="email"]');
      if (input && input.value) {
        alert(`Obrigado! Acesso solicitado para: ${input.value}`);
        input.value = "";
      }
    });
  }

  // Menu mobile (toggle)
  const header = document.querySelector(".rc-header");
  const nav = document.querySelector(".rc-nav");

  if (window.innerWidth < 768) {
    const menuToggle = document.createElement("button");
    menuToggle.className = "rc-menu-toggle";
    menuToggle.innerHTML = "☰";
    menuToggle.setAttribute("aria-label", "Menu");

    header.querySelector(".rc-header__content").appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("rc-nav--open");
    });

    // Fechar menu ao clicar em link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("rc-nav--open");
      });
    });
  }
});

// Destaque de seção ao rolar (opcional)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".rc-section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7) {
      section.style.opacity = "1";
    }
  });
});
