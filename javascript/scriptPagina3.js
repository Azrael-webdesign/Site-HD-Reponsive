const deg = 6; // Define um valor de rotação para cada unidade de tempo (6 graus por unidade de tempo)
const hr = document.querySelector('#hr'); // Seleciona o ponteiro das horas no documento HTML
const mn = document.querySelector('#mn'); // Seleciona o ponteiro dos minutos no documento HTML
const sc = document.querySelector('#sc'); // Seleciona o ponteiro dos segundos no documento HTML

setInterval(() => { // Define um intervalo de tempo para atualizar os ponteiros

     let day = new Date(); // Cria um objeto de data para obter a hora atual
     let hh = day.getHours() * 30; // Calcula o ângulo de rotação para as horas
     let mm = day.getMinutes() * deg; // Calcula o ângulo de rotação para os minutos
     let ss = day.getSeconds() * deg; // Calcula o ângulo de rotação para os segundos

     hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`; // Aplica a rotação ao ponteiro das horas, incluindo a contribuição dos minutos
     mn.style.transform = `rotateZ(${mm}deg)`; // Aplica a rotação ao ponteiro dos minutos
     sc.style.transform = `rotateZ(${ss}deg)`; // Aplica a rotação ao ponteiro dos segundos

})
