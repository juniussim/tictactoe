// do we always need the function init
function init () {
  console.log("website is loaded");

  var clearBoardButton = document.getElementById("clearBoardButton");
  // this is an array (might not want to write the var here)
  var grid = document.getElementsByClassName("grid");

// This section is for clearing Board

  function clearBoard() {
    console.log("board is cleared");
    for (i=0; i<grid.length; i++) {
        grid[i].innerHTML="";
        grid[i].style.background="white";
    }
    newMessage.innerHTML="Click on board to start!";
  }
  clearBoardButton.addEventListener("click", clearBoard, false);

// This section is for playerClicks

  var playerTurn = true;
  var newMessage = document.getElementById("message");

  // instead of using this.innerHTML, you can also use event.target

  function playerClick() {
      if (this.innerHTML === "" && playerTurn) {
        this.style.background = "#F38181";
        this.innerHTML=("X");
        playerTurn = false;
        newMessage.innerHTML = "Player O, it is your turn.";
        // you can set check winner after 5 turns 
        getWinner();
      }
      else if (this.innerHTML === "" && !playerTurn) {
        this.innerHTML=("O");
        this.style.background = "#81F384";
        playerTurn = true;
        newMessage.innerHTML = "Player X, it is your turn.";
        getWinner();
      }
  };

  // try not to put a callback function here (currently we are linking it externally)

  for (i=0; i<grid.length; i++) {
    grid[i].addEventListener("click", playerClick, false);
  }

// This section is for getWinner
// you can put a disable eventlistener to remove the click events once the game is over
// set a var gameover = true/false
m
  function getWinner() {
    if ( thereIsAWinner() || itIsATie() ) {
      console.log("End of Game!");
       if (thereIsAWinner() ) {
         console.log("There is a winner!");
          if ( playerXWins() ) {
            console.log("Player X Wins!");
            newMessage.innerHTML = "Player X is the Winner!";
          } else {
            console.log("Player O Wins!");
            newMessage.innerHTML = "Player O is the Winner!";
          }
       } else {
         console.log("It's a tie!");
         newMessage.innerHTML = "I hate it when it's a Tie"
       }
    } else {
      console.log("No winner yet, continue playing...");
    }
  };

  function thereIsAWinner() {
    if ( playerXWins() || playerOWins() ) {
      return true;
    } else {
      return false;
    }
  };

  function itIsATie() {
    if ( tieGame() ) {
      return true;
    } else {
      return false;
    }
  };

  // Player X Wins

  function playerXWins() {
    if ( xWinsHorizontal() | xWinsVertical() | xWinsDiagonal() ) {
      return true;
    } else {
      return false;
    }
  };

  function xWinsHorizontal() {
    if ( (grid[0].innerHTML === "X" && grid[1].innerHTML === "X" && grid[2].innerHTML ==="X") ||
         (grid[3].innerHTML === "X" && grid[4].innerHTML === "X" && grid[5].innerHTML ==="X") ||
         (grid[6].innerHTML === "X" && grid[7].innerHTML === "X" && grid[8].innerHTML ==="X") ) {
     return true;
   } else {
     return false;
   }
 };

 function xWinsVertical() {
   if ( (grid[0].innerHTML === "X" && grid[3].innerHTML === "X" && grid[6].innerHTML ==="X") ||
        (grid[1].innerHTML === "X" && grid[4].innerHTML === "X" && grid[7].innerHTML ==="X") ||
        (grid[2].innerHTML === "X" && grid[5].innerHTML === "X" && grid[8].innerHTML ==="X") ) {
    return true;
   } else {
     return false;
   }
};

  function xWinsDiagonal() {
    if ( (grid[0].innerHTML === "X" && grid[4].innerHTML === "X" && grid[8].innerHTML ==="X") ||
         (grid[2].innerHTML === "X" && grid[4].innerHTML === "X" && grid[6].innerHTML ==="X") ) {
     return true;
    } else {
      return false;
    }
  };

  // Player O Wins

  function playerOWins() {
    if ( oWinsHorizontal() | oWinsVertical() | oWinsDiagonal() ) {
      return true;
    } else {
      return false;
    }
  };

  function oWinsHorizontal() {
    if ( (grid[0].innerHTML === "O" && grid[1].innerHTML === "O" && grid[2].innerHTML ==="O") ||
         (grid[3].innerHTML === "O" && grid[4].innerHTML === "O" && grid[5].innerHTML ==="O") ||
         (grid[6].innerHTML === "O" && grid[7].innerHTML === "O" && grid[8].innerHTML ==="O") ) {
     return true;
    } else {
     return false;
    }
  };

  function oWinsVertical() {
    if ( (grid[0].innerHTML === "O" && grid[3].innerHTML === "O" && grid[6].innerHTML ==="O") ||
        (grid[1].innerHTML === "O" && grid[4].innerHTML === "O" && grid[7].innerHTML ==="O") ||
        (grid[2].innerHTML === "O" && grid[5].innerHTML === "O" && grid[8].innerHTML ==="O") ) {
    return true;
    } else {
     return false;
    }
  };

  function oWinsDiagonal() {
    if ( (grid[0].innerHTML === "O" && grid[4].innerHTML === "O" && grid[8].innerHTML ==="O") ||
       (grid[2].innerHTML === "O" && grid[4].innerHTML === "O" && grid[6].innerHTML ==="O") ) {
    return true;
    } else {
    return false;
    }
  };

  // tieGame

  function tieGame() {
    if ( grid[0].innerHTML !== "" && grid[1].innerHTML !== "" && grid[2].innerHTML !== "" &&
         grid[3].innerHTML !== "" && grid[4].innerHTML !== "" && grid[5].innerHTML !== "" &&
         grid[6].innerHTML !== "" && grid[7].innerHTML !== "" && grid[8].innerHTML !== "" ) {
    return true;
    } else {
      return false;
    }
  };

} // end of init function

init();


  // function playerClick() {
  //   if (playerTurn) {
  //     // this.appendChild(player)
  //     this.innerHTML=("X");
  //     playerTurn = false;
  //   } else {
  //     this.innerHTML=("O");
  //     playerTurn = true;
  //   }
  // };

  // for (i=0; i<grid.length; i++) {
  //   grid[i].addEventListener("click", playerClick, false);
  // }

  // function playerClick() {
  //     // console.log("playerclick working man")
  //     grid[0].appendChild(playerX);
  //     grid[1].appendChild(playerX);
  // };

  // grid[0].addEventListener("click", playerClick, false);
  // grid[1].addEventListener("click", playerClick, false);

    // if (i%2 === 0) {
    //   function playerClick() {
    //     grid[i].appendChild(playerX);
    //   }
    // }
    // else {
    //   function playerClick() {
    //     grid[i].appendChild(playerY);
    //   }
