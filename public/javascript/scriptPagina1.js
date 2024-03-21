// Animação utilizando a biblioteca GSAP (GreenSock Animation Platform) para elementos específicos quando a página é rolada
// Cada animação é definida com um seletor CSS que identifica o elemento a ser animado e um conjunto de propriedades a serem animadas

// Animação para o elemento com id "m1"
gsap.from("#m1", {
  // Ativação da animação quando o elemento entra na viewport durante o scroll
  scrollTrigger: {
    // Define o efeito de "scrub" que permite sincronizar a animação com o scroll
    scrub: true
  },
  // Animação movendo o elemento para cima (eixo y) 100 pixels
  y: 100,
})

// Animação para o elemento com id "m2"
gsap.from("#m2", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para cima (eixo y) 50 pixels
  y: 50,
})

// Animação para o elemento com id "t2"
gsap.from("#t2", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para a esquerda (eixo x) 50 pixels
  x: -50,
})

// Animação para o elemento com id "t1"
gsap.from("#t1", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para a direita (eixo x) 50 pixels
  x: 50,
})

// Animação para o elemento com id "man"
gsap.from("#man", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para a esquerda (eixo x) 250 pixels
  x: -250,
})

// Animação para o elemento com id "plants"
gsap.from("#plants", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para a esquerda (eixo x) 50 pixels
  x: -50,
})

// Animação para o elemento com id "text"
gsap.from("#text", {
  scrollTrigger: {
    scrub: true
  },
  // Animação movendo o elemento para a direita (eixo x) 300 pixels
  x: 300,
})
