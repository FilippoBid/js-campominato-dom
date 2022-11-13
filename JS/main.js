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
let boomRadius = '0';
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



    let bombs;
    // iserisco ogni elemneto in un array e lo seleziono con la variabile i che increment a
    // const numberdSquareArray = [];


    














    for (i = 0; i < NSquares; i++) {

        let square = document.createElement("div");
        square.classList.add("squarestyle");
          square.classList.add("btn");
        square.classList.add("text-center");
        square.classList.add("vertical-align");
        
        bombs = getRandom16Array(NSquares);
        square.dataset.boom = "0"
        if ((bombs.includes(i + 1)) === true) {
            square.dataset.boom = "1"
            
        }
        
        square.addEventListener("click", function () {

            let bombCounter= "0";

            if (this.dataset.boom === "1") {
                this.classList.add("bg-danger");
                alert("hai perso")
            } else {
                this.classList.add("bg-success");
                //sopra 
                console.log(document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]);
                console.log(document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+1))+(NCol*2)]);
                /* console.log(NCol);
                console.log(i); */
                //elemento sopra
                if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).classList.add("bg-success");
                    removeEventListener("click", (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]))

                        
                }else if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //elemento sopra-sx
                if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+2)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+2)]).classList.add("bg-success");
                    removeEventListener("click", (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+2)]))

                        
                }else if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //elemento sopra-dx
                if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol)]).classList.add("bg-success");
                    removeEventListener("click", (document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]))

                        
                }else if ((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }

                //verifica elemento sinsistra
                if (this.previousElementSibling.dataset.boom === "0"){
                    
                    this.previousElementSibling.classList.add("bg-success");
                    removeEventListener("click", this.previousElementSibling)

                        
                }else if (this.previousElementSibling.dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //verifica elemento destra
                if (this.nextElementSibling.dataset.boom === "0"){
                    
                    this.nextElementSibling.classList.add("bg-success");
                    removeEventListener("click", this.nextElementSibling)

                        
                }else if (this.nextElementSibling.dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //elemento sotto 
                if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+1))+(NCol*2)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+1))+(NCol*2)]).classList.add("bg-success");
                    removeEventListener("click", [(this.innerHTML-(NCol+1))+(NCol*2)])

                        
                }else if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+1))+(NCol*2)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //elemento sotto sx
                if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol))+(NCol*2)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol))+(NCol*2)]).classList.add("bg-success");
                    removeEventListener("click", [(this.innerHTML-(NCol+1))+(NCol*2)])

                        
                }else if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol))+(NCol*2)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                //elemento sotto dx
                if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+2))+(NCol*2)]).dataset.boom === "0") {
                    
                    (document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+2))+(NCol*2)]).classList.add("bg-success");
                    removeEventListener("click", [(this.innerHTML-(NCol+2))+(NCol*2)])

                        
                }else if ((document.querySelectorAll(".squarestyle")[(this.innerHTML-(NCol+2))+(NCol*2)]).dataset.boom === "1"){
                    //((document.querySelectorAll(".squarestyle")[this.innerHTML-(NCol+1)]).innerHTML = `<i class="fa-solid fa-bomb color-danger"></i>`)
                    parseInt(bombCounter++)
                }
                this.innerHTML= `<i class="fa-solid fa-bomb color-danger">${bombCounter}</i> `
                
                
                
            };



            
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

function getRandom16Array(maxRandomN) {

    let bombListArray = [];

    while (bombListArray.length < 16) {
        let bombN = getRndNS1(maxRandomN);
        if (!bombListArray.includes(bombN)) { bombListArray.push(bombN) };

    } return bombListArray

}