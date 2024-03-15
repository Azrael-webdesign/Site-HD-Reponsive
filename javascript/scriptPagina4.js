const titles = document.querySelectorAll('.title'); // Seleciona todos os elementos com a classe 'title' e armazena em uma NodeList

titles.forEach(title => { // Itera sobre cada elemento da NodeList
  title.addEventListener('click', () => { // Adiciona um evento de clique a cada título
    const gridContainer = title.nextElementSibling; // Seleciona o próximo elemento irmão do título
    gridContainer.classList.toggle('show-grid'); // Adiciona ou remove a classe 'show-grid' do elemento selecionado
  });
});
