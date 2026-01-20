document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".rc-nav-item");
  const sections = document.querySelectorAll(".rc-section-dash");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-section");

      // Atualiza estado do menu
      navItems.forEach((btn) => btn.classList.remove("rc-nav-item--active"));
      item.classList.add("rc-nav-item--active");

      // Mostra/esconde seções
      sections.forEach((section) => {
        const id = section.id.replace("section-", "");
        if (id === target) {
          section.classList.add("rc-section-dash--active");
        } else {
          section.classList.remove("rc-section-dash--active");
        }
      });

      // Atualiza título principal conforme a seção
      const title = document.querySelector(".rc-topbar__title h1");
      const subtitle = document.querySelector(".rc-topbar__title p");

      switch (target) {
        case "overview":
          title.textContent = "Dashboard";
          subtitle.textContent = "Visão geral da sua conta Ravic Connect.";
          break;
        case "score":
          title.textContent = "Score Ravic";
          subtitle.textContent = "Acompanhe os detalhes do Score Ravic por vaga e candidato.";
          break;
        case "profile":
          title.textContent = "Perfil";
          subtitle.textContent = "Gerencie seus dados profissionais e preferências.";
          break;
        case "opportunities":
          title.textContent = "Oportunidades";
          subtitle.textContent = "Organize e acompanhe todas as suas vagas.";
          break;
        case "chat":
          title.textContent = "Chat";
          subtitle.textContent = "Converse com candidatos e membros da sua equipe.";
          break;
        case "analytics":
          title.textContent = "Analytics";
          subtitle.textContent = "Veja métricas e indicadores de recrutamento.";
          break;
        case "settings":
          title.textContent = "Configurações";
          subtitle.textContent = "Personalize notificações, privacidade e integrações.";
          break;
      }
    });
  });
});
