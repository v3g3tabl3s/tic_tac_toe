

var gridItem = document.getElementsByClassName("grid-item");
var lastClicked;
let count = 0;
let oxArray = new Array(9);


const xOrO = (i) => {
    if (gridItem[i].textContent == '') {

        for (let j = 0; j < gridItem.length; j++) {
            if ((gridItem[j].textContent == "X") || (gridItem[j].textContent == "O")) {
                count++;
            }
        }
        if (count % 2 == 0) {
            gridItem[i].textContent = "X";
            oxArray[i] = 0;

        } else {
            gridItem[i].textContent = "O";
            oxArray[i] = 1;

        }

        console.log(oxArray);
        console.log(count);
        count = 0;
    } else {
        return 0;
    }



    }

const checkWin = (oxArray) => {

    if (oxArray.includes(undefined)) {

        if (oxArray[0] == oxArray[1] && oxArray[1] == oxArray[2]) {
            if (oxArray[1] != null) {
                console.log("winner012");
            }

        }
        if (oxArray[3] == oxArray[4] && oxArray[4] == oxArray[5]) {
            if (oxArray[4] != null) {
                console.log("winner345");
            }
        }
        if (oxArray[6] == oxArray[7] && oxArray[7] == oxArray[8]) {
            if (oxArray[7] != null) {
                console.log("winner678");
            }
        }
        if (oxArray[0] == oxArray[4] && oxArray[4] == oxArray[8]) {
            if (oxArray[4] != null) {
                console.log("winner048");
            }
        }
        if (oxArray[0] == oxArray[3] && oxArray[3] == oxArray[6]) {
            if (oxArray[3] != null) {
                console.log("winner036");
            }
        }
        if (oxArray[1] == oxArray[4] && oxArray[4] == oxArray[7]) {
            if (oxArray[4] != null) {
                console.log("winner147");
            }
        }
        if (oxArray[2] == oxArray[5] && oxArray[5] == oxArray[8]) {
            if (oxArray[5] != null) {
                console.log("winner258");
            }
        }
        if (oxArray[2] == oxArray[4] && oxArray[4] == oxArray[6]) {
            if (oxArray[4] != null) {
                console.log("winner246");
            }
        }
    }
    else{
        console.log("DRAW");
    }
    





}

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener("click", () => {  
        xOrO(i);
        console.log(oxArray);
        checkWin(oxArray);
}

    )
}
console.log(oxArray);

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
