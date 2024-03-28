const titles = document.querySelectorAll('.title'); // Seleciona todos os elementos com a classe 'title' e armazena em uma NodeList

titles.forEach(title => { // Itera sobre cada elemento da NodeList
  title.addEventListener('click', () => { // Adiciona um evento de clique a cada título
    const gridContainer = title.nextElementSibling; // Seleciona o próximo elemento irmão do título
    gridContainer.classList.toggle('show-grid'); // Adiciona ou remove a classe 'show-grid' do elemento selecionado
  });
});
function toggleContent(id) {
  var content = document.getElementById('content' + id);
  // Verifica se o conteúdo está visível
  if (content.style.display === 'block') {
    // Se estiver visível, oculta o conteúdo
    content.style.display = 'none';
  } else {
    // Se estiver oculto, mostra o conteúdo
    content.style.display = 'block';
  }
}