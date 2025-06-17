let xMove = true;
let gameOverState = false;

function move(buttonNum){
  if(gameOverState){
    alert("Game Over");
  }
  //only move if the tile is blank
  else if(document.getElementById(buttonNum).innerText==''){
    //alternate between X move and O move
    if(xMove){
      document.getElementById(buttonNum).style.backgroundColor = "Red";
      document.getElementById(buttonNum).innerHTML = "X";
      xMove = false;
    }else{
      document.getElementById(buttonNum).style.backgroundColor = "Blue";
      document.getElementById(buttonNum).innerHTML = "O";
      xMove = true;
    }
    //after move, see if there is a win
    checkWin();
  }
}

function clearBoard(){
  //reset tiles
  for(let i=0; i<9;i++){
    document.getElementById(i).style.backgroundColor = "White";
    document.getElementById(i).innerHTML = "";
  }
  //reset state
  gameOverState=false;
}

function checkWin(){
  for(let i=0; i<3; i++){
    //check if rows/columns are the same letter
    if(compareThree(i,i+3,i+6)||compareThree((3*i),(3*i+1),(3*i+2))){
      alert("Game Over");
      gameOverState=true;
    }
  }
  //check diagonals
  if(compareThree(0,4,8)){
    alert("Game Over");
    gameOverState=true;
  }
}

function compareThree(a,b,c){
  //check if a, b, c are blank
  if(document.getElementById(a).innerText == '' || document.getElementById(b).innerText == '' || document.getElementById(c).innerText == ''){
    return false;
  }
  //check if a is the same as b and c
  if(document.getElementById(a).innerText === document.getElementById(b).innerText
  && document.getElementById(b).innerText === document.getElementById(c).innerText){
    return true;
  }
}
