// iniciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', '']; 
let playerTime = 0;
let symbols = ['x', 'o'];
let gameOver = false;
let winStates =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(position) { //movimento
  if(gameOver) { //se o jogo acabou
    return; //retorna
  }


  if(board[position] == '') { //se a posição estiver vazia
    board[position] = symbols[playerTime]; //insere o símbolo na posição

    gameOver = checkWin(); //verifica se o jogo acabou
    if(!gameOver) { //se o jogo não acabou
      playerTime = playerTime == 0 ? 1 : 0; // alterna o jogador
    }
  }
  
  return gameOver;
}

function checkWin() { //verifica se o jogador ganhou
  for(let i = 0; i < winStates.length; i++) { //percorre todos os estados de vitória
    let seq = winStates[i]; //pega o estado de vitória

    let pos0 = seq[0]; 
    let pos1 = seq[1];
    let pos2 = seq[2];

    if(board[pos0] == board[pos1] && 
       board[pos0] == board[pos2] &&
       board[pos0] != '') {	
      return true; //retorna true se o jogador ganhou
    }
  }
  return false; //retorna false se o jogador não ganhou
}