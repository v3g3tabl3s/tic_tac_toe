

var gridItem = document.getElementsByClassName("grid-item");
var whichPlayer = document.getElementById("which_player");
var restartBtn = document.getElementById("restart-btn");
var lastClicked;
let count = 0;
let oxArray = new Array(9);


const addClick = () => {
    for (let i = 0; i < gridItem.length; i++) {

        gridItem[i].onclick = () => {  
            xOrO(i);
            //console.log(oxArray);
            checkWin(oxArray);
    }
}
}


addClick();




const xOrO = (i) => {
    if (gridItem[i].textContent == '') {

        for (let j = 0; j < gridItem.length; j++) {
            if ((gridItem[j].textContent == "X") || (gridItem[j].textContent == "O")) {
                count++;
            }
        }
        if (count % 2 == 0) {
            gridItem[i].textContent = "X";
            whichPlayer.textContent = "Player 2, make your move";
           // removeClick(i);
            oxArray[i] = 1;

        } else {
            gridItem[i].textContent = "O";
            whichPlayer.textContent = "Player 1, make your move";
            oxArray[i] = 0;

        }

        console.log(oxArray);
        console.log(count);
        count = 0;
    } else {
        return 0;
    }



    }


const removeClick = () => {

    console.log("click removed");

    for(let i = 0;i < gridItem.length;i++){
        gridItem[i].onclick = null;
}

   // console.log(gridItem);



}

//console.table(listAllEventListeners());
const checkWin = (oxArray) => {

  //  if (oxArray.includes(undefined)) {

        if (oxArray[0] == oxArray[1] && oxArray[1] == oxArray[2]) {
            if (oxArray[1] != null) {
                console.log("winner012" + oxArray[1]);
                whoWon(oxArray[1]);
                removeClick();
            }

        }
        if (oxArray[3] == oxArray[4] && oxArray[4] == oxArray[5]) {
            if (oxArray[4] != null) {
                console.log("winner345");
                whoWon(oxArray[4]);
                removeClick();
            }
        }
        if (oxArray[6] == oxArray[7] && oxArray[7] == oxArray[8]) {
            if (oxArray[7] != null) {
                console.log("winner678");
                whoWon(oxArray[7]);
                removeClick();
            }
        }
        if (oxArray[0] == oxArray[4] && oxArray[4] == oxArray[8]) {
            if (oxArray[4] != null) {
                console.log("winner048");
                whoWon(oxArray[4]);
                removeClick();
            }
        }
        if (oxArray[0] == oxArray[3] && oxArray[3] == oxArray[6]) {
            if (oxArray[3] != null) {
                console.log("winner036");
                whoWon(oxArray[3]);
                removeClick();
            }
        }
        if (oxArray[1] == oxArray[4] && oxArray[4] == oxArray[7]) {
            if (oxArray[4] != null) {
                console.log("winner147");
                whoWon(oxArray[4]);
                removeClick();
            }
        }
        if (oxArray[2] == oxArray[5] && oxArray[5] == oxArray[8]) {
            if (oxArray[5] != null) {
                console.log("winner258");
                whoWon(oxArray[5]);
                removeClick();
            }
        }
        if (oxArray[2] == oxArray[4] && oxArray[4] == oxArray[6]) {
            if (oxArray[4] != null) {
                console.log("winner246");
                whoWon(oxArray[4]);
                removeClick();
            }
        }
        
        else if(oxArray.includes(undefined) == false){
            console.log("DRAW");
            alert("DRAW");
            removeClick();
            whichPlayer.textContent = "DRAW";

        }




}

const whoWon = (val) => {

    if(val == 1){
        whichPlayer.textContent = "Player 1 wins!"
        alert("Player 1 wins!");
    }
    else{
        whichPlayer.textContent = "Player 2 wins!"
        alert("Player 2 wins!");
    }

}


const reset = () => {
    for(i = 0; i< gridItem.length;i++){
        gridItem[i].textContent = '';
    }

    whichPlayer.textContent = "Player 1, make your move🤨";

    addClick();
}


restartBtn.onclick = () => {
    reset();
    oxArray = new Array(9);
}



const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
}

const xPlayer = (name) => {
    const {sayName} = Player(name)
    const xGiveIt = () => console.log("I'm X")
    return {sayName, xGiveIt}
}

const oPlayer = (name) =>{
    const {sayName} = Player(name)
    const ohNo = () => console.log("Oh no, Oh no")
    return {sayName, ohNo}
 }

 const player1 = xPlayer('Player1')
 const player2 = oPlayer('Player2')

 player1.sayName();
 player1.xGiveIt();
 
 player2.sayName();
 player2.ohNo();
