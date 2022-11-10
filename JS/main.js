/* const startBtn = document.getElementById("startbtn");

let NSquare = 100;
let NRow = 10;
let NCol = 10;


startBtn.addEventListener("click", function () {
    
    for (i = 0; i < NSquare; i++) {
        
        const containerEl = document.querySelector(".container");
        const square = document.createElement("div");
        square.classList.add("squarestyle");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
        square.addEventListener("click",function(){
            this.classList.toggle("bg-danger")
            console.log(square.innerHTML);
        })
       
        square.style.width = `calc(100% / ${NCol})`
        square.innerHTML = `${i + 1}`
        containerEl.append(square);
        


    }





}) //esercizio senza bonus*/




/**
 * 
 * 
 * @param {num} max 
 * @returns {num}
 */
function getRndNS1(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}





















/* let NSquare = 100;
let NRow = 10;
let NCol = 10; */
const startBtn = document.getElementById("startbtn");
const selectDEl = document.querySelector("select");

const containerEl = document.querySelector(".container");
let bombs;
let NCol;
let NSquares = Math.pow(NCol, 2);
/**
 * 
 * 
 * @param {number} selCol 
 * @param {number} containerSquare 
 * @return {Element}  
 */
function creaGrid(selCol, containerSquare) {
    containerEl.innerHTML = ""
    if (selCol == "1") {
        NCol = 10;
        NSquares = Math.pow(NCol, 2);
    } else if (selCol === "2") {
        NCol = 9;
        NSquares = Math.pow(NCol, 2);
    } else if (selCol === "3") {
        NCol = 7;
        NSquares = Math.pow(NCol, 2);
    }





    for (i = 0; i < NSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("squarestyle");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
        bombs = getRandom16Array(NSquares);

        if((bombs.includes(i+1)) === true){
            square.dataset.boom = "1"
                
        }

        square.addEventListener("click", function () {

            if (this.dataset.boom === "1"){
                alert("hai perso")
            };
        
            this.classList.toggle("bg-danger");
            
            console.log(square.innerHTML);
        })

        square.style.width = `calc(100% / ${NCol})`;
        square.innerHTML = `${i + 1}`;
        containerSquare.append(square);
    }






 }




 startBtn.addEventListener("click", function () {
     const selectD = selectDEl.value;
     creaGrid(selectD, containerEl);
     
});


/**
 * 
 * @param {number} maxRandomN ;
 * @return {Array};
 */

function getRandom16Array (maxRandomN){

    let bombListArray = [];
    
    while(bombListArray.length < 16 ) {
        let bombN = getRndNS1(maxRandomN);
        if(!bombListArray.includes(bombN)){bombListArray.push(bombN)};

    } return bombListArray

}