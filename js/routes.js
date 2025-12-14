function route(event) {
  event.preventDefault();
  window.location.hash = event.target.getAttribute("href");
}

function render() {
  const path = window.location.hash.replace("#", "") || "/";
  const app = document.getElementById("app");

  app.innerHTML = pages[path] || pages["/"];
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

// Adicione este código no final do seu arquivo routes.js ou crie um novo arquivo menu.js

// Criar botão toggle para mobile
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  
  // Criar botão hamburger se não existir
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    menuToggle.setAttribute('aria-label', 'Menu');
    
    // Inserir botão após a logo
    const logo = navbar.querySelector('a');
    logo.insertAdjacentElement('afterend', menuToggle);
    
    // Toggle do menu
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Fechar menu ao clicar em um link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      const toggle = document.querySelector('.menu-toggle');
      if (toggle) {
        toggle.classList.remove('active');
      }
    });
  });
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const toggle = document.querySelector('.menu-toggle');
      if (toggle) {
        toggle.classList.remove('active');
      }
    }
  });
});
