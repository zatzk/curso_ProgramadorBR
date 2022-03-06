document.getElementById("btn-reset").addEventListener("click", resetGame); //adiciona o evento de click no botão reset
document.addEventListener("DOMContentLoaded", () => { //quando o DOM estiver carregado
  let squares = document.querySelectorAll(".square"); //pega todos os elementos do tipo square
  squares.forEach(square => {  //percorre todos os elementos
    square.addEventListener('click', handleClick); //adiciona o evento de click
  }); 
});


function handleClick(event) { //evento de click
  let square = event.target; //pega o elemento que foi clicado
  let position = square.id; //pega a posição do elemento clicado
  
  if(handleMove(position)) { //se o movimento for válido
    setTimeout(() => { //espera um tempo para atualizar o tabuleiro
      alert("Jogador " + (playerTime + 1) + " ganhou!"); //alerta o vencedor
    }, 10); //tempo de espera
  }

  updateSquare(position); //atualiza o tabuleiro
}
function updateSquare(position) { //atualiza o tabuleiro
  let square = document.getElementById(position.toString()); //pega o elemento que foi clicado
  let symbol = board[position]; //pega o símbolo do elemento clicado
  square.innerHTML = `<div class=${symbol}></div>`; //insere o símbolo no elemento clicado

}
function resetGame() { //reseta o jogo
  board = ['', '', '', '', '', '', '', '', '']; 
  playerTime = 0; 
  gameOver = false;
  updateBoard(); //atualiza o tabuleiro
}
function updateBoard() { //atualiza o tabuleiro
  let squares = document.querySelectorAll(".square"); //pega todos os elementos do tipo square
  squares.forEach(square => {   //percorre todos os elementos
    square.innerHTML = ''; //limpa o elemento
  }); 
}