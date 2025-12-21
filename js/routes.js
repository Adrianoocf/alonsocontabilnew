// 1. Função de Navegação
function route(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  window.location.hash = href;
}

// 2. Função para fechar o menu mobile
function closeMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (navLinks && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
  if (menuToggle && menuToggle.classList.contains('active')) {
    menuToggle.classList.remove('active');
  }
}

// 3. Função para inicializar o FAQ (garante que o clique funcione)
function initFAQ() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      
      // Fecha outros itens
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
      });

      faqItem.classList.toggle('active');
    });
  });
}

// 4. Função Principal de Renderização
function render() {
  const path = window.location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");

  if (app) {
    app.innerHTML = pages[path] || pages["/"];
  }

  // --- Ações após renderizar ---
  closeMenu(); // 👈 Fecha o menu sempre que mudar de rota
  initFAQ();   // 👈 Reativa os cliques do FAQ na nova página
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 5. Inicialização do Menu (Hamburger)
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Cria o botão hamburger se não existir
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const logo = navbar.querySelector('a');
    logo.insertAdjacentElement('afterend', menuToggle);
    
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
});

// 6. Fechar menu ao clicar fora dele
document.addEventListener('click', function(e) {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Verifica se o menu está aberto
  if (navLinks && navLinks.classList.contains('active')) {
    // Se clicou fora do menu E fora do botão
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  }
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('active');
  });
});

// Eventos de mudança de rota
window.addEventListener("hashchange", render);
window.addEventListener("load", render);