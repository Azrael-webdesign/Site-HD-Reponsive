// Atribui referências aos elementos HTML relevantes a variáveis usando seus IDs
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');
const header = document.querySelector('header');

// Adiciona um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', function() {

  // Obtém o valor do deslocamento vertical da janela (quanto a página foi rolada)
  let value = window.scrollY;
  
  // Move os elementos em resposta ao deslocamento vertical, criando um efeito de paralaxe

  // Move o elemento de estrelas para a esquerda em 25% da taxa de rolagem
  stars.style.left = value * 0.25 + 'px';
  // Move o elemento da lua para cima em 105% da taxa de rolagem
  moon.style.top = value * 1.05 + 'px';
  // Move as montanhas de fundo para cima em 50% da taxa de rolagem
  mountains_behind.style.top = value * 0.5 + 'px';
  // Mantém as montanhas da frente fixas
  mountains_front.style.top = value * 0 + 'px';
  // Altera a margem direita do texto proporcionalmente ao valor do deslocamento vertical
  text.style.marginRight = value * 4 + 'px';
  // Altera a margem superior do texto proporcionalmente ao valor do deslocamento vertical
  text.style.marginTop = value * 1.5 + 'px';
  // Altera a margem superior do botão proporcionalmente ao valor do deslocamento vertical
  btn.style.marginTop = value * 1.5 + 'px';
  // Move o cabeçalho para cima em 50% da taxa de rolagem
  header.style.top = value * 0.5 + 'px';
});
