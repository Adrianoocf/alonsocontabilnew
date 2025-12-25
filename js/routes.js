// 1. Função para fechar o menu mobile
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

// 2. Função para inicializar o FAQ
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

function renderRoute() {
  const hash = location.hash || "#/";
  const cleanHash = hash.replace("#", "");

  // separa rota e ancora
  const [rawRoute, anchor] = cleanHash.split("#");

  // normaliza rotas
  const route = rawRoute === "" || rawRoute === "/" || rawRoute === "home"
    ? "/"
    : `/${rawRoute.replace("/", "")}`;

  const app = document.getElementById("app");

  app.innerHTML = pages[route] || pages["/"] || "<h1>404</h1>";

  closeMenu();
  initFAQ();

  // 👉 SCROLL CORRETO
  requestAnimationFrame(() => {
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // só sobe pro topo quando muda de página
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  });
}



window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);


// 4. Inicialização do Menu (Hamburger)
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Cria o botão hamburger se não existir
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Menu');
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

// 5. Fechar menu ao clicar fora dele
document.addEventListener('click', function(e) {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (navLinks && navLinks.classList.contains('active')) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  }
});

// 6. Dropdown (se você tiver)
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
  const dropdownItems = dropdown?.querySelectorAll('.dropdown-item');
  
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
    
    dropdownItems?.forEach(item => {
      item.addEventListener('click', function() {
        dropdown.classList.remove('active');
      });
    });
    
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
    
    window.addEventListener('hashchange', function() {
      dropdown.classList.remove('active');
    });
  }
});
