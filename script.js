// ============================================
// FADE-IN AO ROLAR A PÁGINA
// ============================================

// 1. Pega todos os elementos com a classe "reveal"
const elementos = document.querySelectorAll('.reveal');

// 2. Cria um observador que fica de olho nos elementos
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    // Se o elemento entrou na tela
    if (entrada.isIntersecting) {
      // Adiciona a classe "active" → dispara a animação CSS
      entrada.target.classList.add('active');

      // Para de observar esse elemento (só anima uma vez)
      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.15 // Dispara quando 15% do elemento estiver visível
});

// 3. Manda o observador ficar de olho em cada elemento
elementos.forEach((el) => observador.observe(el));