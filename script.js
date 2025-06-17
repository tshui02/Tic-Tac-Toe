let xMove = true;

function move(buttonNum){
  if(xMove){
    document.getElementById(buttonNum).style.backgroundColor = "Red";
    document.getElementById(buttonNum).innerHTML = "X";
    xMove = false;
  }else{
    document.getElementById(buttonNum).style.backgroundColor = "Blue";
    document.getElementById(buttonNum).innerHTML = "O";
    xMove = true;
  }
}

function clearBoard(){
  for(let i=0; i<9;i++){
    document.getElementById(i).style.backgroundColor = "White";
    document.getElementById(i).innerHTML = "";
  }
}

function checkWin(){
  
}
