// on body tag 
function startGame() {
    // 1 establish default 1st turn 
    document.turn = "👽";
    // 2 display this message and switch it based on who's turn it is 
    setMessage(document.turn + " is up next!")
}
// 3 where that message gets displayed?
function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// if the selected sqaure is blank, switch the turn like normal 
// if its used display new message and do not switch turn 
function nextMove(square) {
    if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("This square is used, try another! ಠ_ಠ")
    }
}

// after each selection is made
//check for winner 
// display most up to date message
function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("You win  " + document.turn + "  good job! (•‿•) ")
    } else if (document.turn == "👽") {
        document.turn = "🚀";
        setMessage("It's currently " + document.turn + " 's turn!  ☚")
    } else {
        document.turn = "👽";
        setMessage("It's currently " + document.turn + " 's turn!  ☚")
    }
}

// how winner is checked for 
// if any combo is true return result 
function checkForWinner(move) {
    var result = false;

    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

// how the check row is recided if true or false 
function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}
//display winner message 
// winning combos based on each "td" id ex s3 = s + 3 
function getBox(number) {
    return document.getElementById("s" + number).innerText;
}
