function returnText(){
    let input1 = document.getElementById("userInput1").value
    localStorage.setItem("userInput1", input1);
    let input2 = document.getElementById("userInput2").value
    localStorage.setItem("userInput2", input2);
    let input3 = document.getElementById("userInput3").value
    localStorage.setItem("userInput3", input3);
    let input4 = document.getElementById("userInput4").value
    localStorage.setItem("userInput4", input4);

}

function nombresInput(){
    opcion0.textContent = localStorage.getItem("userInput1");
    opcion1.textContent = localStorage.getItem("userInput2");
    opcion2.textContent = localStorage.getItem("userInput3");
    opcion3.textContent = localStorage.getItem("userInput4");
    playerTitle1.textContent = localStorage.getItem("userInput1");
    playerTitle2.textContent = localStorage.getItem("userInput2");
    playerTitle3.textContent = localStorage.getItem("userInput3");
    playerTitle4.textContent = localStorage.getItem("userInput4");
}
function carton3x3(){
    window.open("carton3x3.html");
    window.close(window.self);
}

let bingoClicks = 0;
function bingo(){
    bingoClicks++;
    const displayElement0 = document.getElementById("contador-turno");
    displayElement0.textContent = `Van por el turno: ${bingoClicks}`;
    if (bingoClicks >= 24){
        alert("Se llegó al límite de 25 cantos")
        document.querySelector(".cantarNumero").disabled = true;
    }
    const randomNumber = Math.floor(Math.random() * 51) +1;
    const displayElement = document.getElementById("random-number-display");
    displayElement.textContent = `Random Number: ${randomNumber}`;
    const tablonElements = document.querySelectorAll(".tablon");
    for (const tablon of tablonElements){
        const gridBoxes = tablon.querySelectorAll(".box");
        for (const box of gridBoxes) {
            const boxValue = parseInt(box.textContent, 10);
            if (boxValue === randomNumber){
                box.style.backgroundColor = "green";
            }
        }
    }
    event.preventDefault();

}

function restart(){
    const button = document.querySelector(".cantarNumero");
    bingoClicks = 0;
    button.disabled = false;
    document.getElementById("random-number-display").textContent = "";
    document.getElementById("contador-turno").textContent = "Van por el turno: 0";
    const allBoxes = document.querySelectorAll(".box");
    for (const box of allBoxes) {
        box.style.backgroundColor = "";
    }
    event.preventDefault();
}

mySelect.addEventListener("change", visibilidad);
function visibilidad() {
    if (mySelect.value == "jugador0"){
        playerTitle1.setAttribute("style", "display: grid")
        tablon0.setAttribute("style", "display: grid")
        playerTitle2.setAttribute("style", "display: none")
        tablon1.setAttribute("style", "display: none")
        playerTitle3.setAttribute("style", "display: none")
        tablon2.setAttribute("style", "display: none")
        playerTitle4.setAttribute("style", "display: none")
        tablon3.setAttribute("style", "display: none")
    } else if (mySelect.value == "jugador1"){
        playerTitle1.setAttribute("style", "display: none")
        tablon0.setAttribute("style", "display: none")
        playerTitle2.setAttribute("style", "display: grid")
        tablon1.setAttribute("style", "display: grid")
        playerTitle3.setAttribute("style", "display: none")
        tablon2.setAttribute("style", "display: none")
        playerTitle4.setAttribute("style", "display: none")
        tablon3.setAttribute("style", "display: none")
    } else if (mySelect.value == "jugador2"){
        playerTitle1.setAttribute("style", "display: none")
        tablon0.setAttribute("style", "display: none")
        playerTitle2.setAttribute("style", "display: none")
        tablon1.setAttribute("style", "display: none") 
        playerTitle3.setAttribute("style", "display: grid")
        tablon2.setAttribute("style", "display: grid")
        playerTitle4.setAttribute("style", "display: none")
        tablon3.setAttribute("style", "display: none")
    } else if (mySelect.value == "jugador3"){
        playerTitle1.setAttribute("style", "display: none")
        tablon0.setAttribute("style", "display: none")
        playerTitle2.setAttribute("style", "display: none")
        tablon1.setAttribute("style", "display: none")
        playerTitle3.setAttribute("style", "display: none")
        tablon2.setAttribute("style", "display: none")
        playerTitle4.setAttribute("style", "display: grid")
        tablon3.setAttribute("style", "display: grid")
    } else {
        playerTitle1.setAttribute("style", "display: grid")
        tablon0.setAttribute("style", "display: grid")
        playerTitle2.setAttribute("style", "display: grid")
        tablon1.setAttribute("style", "display: grid")
        playerTitle3.setAttribute("style", "display: grid")
        tablon2.setAttribute("style", "display: grid")
        playerTitle4.setAttribute("style", "display: grid")
        tablon3.setAttribute("style", "display: grid")
    }
}
// function controlTablonVisibility(selectId, tablonClass){
//     const tablonSelect = document.getElementById(selectId);
//     const tablonElements = document.querySelectorAll(`.${tablonClass}`);
//     selectElement.addEventListener("change", function3);{
//         function function3(){
//         const selectedIndex = parseInt(this.value);
//         for (const tablon of tablonElements) {
//             tablon.style.display = tablon.id === `${tablonClass}${selectedIndex}` ? "grid" : "none";
//     }}
//     }
// }
// const selectElement = document.getElementById("mySelect");
// const tablonElements = document.querySelectorAll(".tablon");
// selectElement.addEventListener("change", function3);

// function function3(){
//     const selectedIndex = parseInt(this.value);
//     for (const tablon of tablonElements){
//         tablon.style.display = tablon.id === `tablon${selectedIndex}` ? "grid" : "none";
//     }
// }

let score = 0;
function checkScore(){
    const tablonElements = document.querySelectorAll(".tablon")
    for (const tablon of tablonElements){
        const gridBoxes = tablon.querySelectorAll(".box");
        for (const box of gridBoxes) {
            if (box.style.backgroundColor == "green" && tablon.getElementById("tablon0")){
                score++;
                const scoreSpan = document.getElementById("player1-score");
                scoreSpan.innerText = score;
             }
        }
    }
}

function home(){
    window.open("index.html");
    window.close(window.self);
}

//function crearMatriz(){
    //const grid = document.getElementById('grid');
        //for (let i = 0; i < 3; i++) {
            //for (let j = 0; j < 3; j++) {
                //const cell = document.createElement('div');
                //cell.textContent = Math.floor(Math.random() * 51);
                //grid.appendChild(cell);
  //}
//}

//}

function fillBoxesWithRandomNumbers() {
    const boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].textContent = Math.floor(Math.random() * 51) +1; 
    }
  }
function carton4x4(){
    window.open("carton4x4.html");
    window.close(window.self);
}

function bingo4(){
    bingoClicks++;
    const displayElement0 = document.getElementById("contador-turno");
    displayElement0.textContent = `Van por el turno: ${bingoClicks}`;
    if (bingoClicks >= 24){
        alert("Se llegó al límite de 25 cantos")
        document.querySelector(".cantarNumero").disabled = true;
    }
    const randomNumber = Math.floor(Math.random() * 51)+1;
    const displayElement = document.getElementById("random-number-display");
    displayElement.textContent = `El Número es: ${randomNumber}`;
    const tablonElements = document.querySelectorAll(".tablon4");
    for (const tablon of tablonElements){
        const gridBoxes = tablon.querySelectorAll(".box");
        for (const box of gridBoxes) {
            const boxValue = parseInt(box.textContent, 10);
            if (boxValue === randomNumber){
                box.style.backgroundColor = "green";
            }
        }
    }
    event.preventDefault();

}

// const selectElement4 = document.getElementById("mySelect4");
// const tablonElements4 = document.querySelectorAll(".tablon4");
// selectElement.addEventListener("change", function4);

// function function4(){
//     const selectedIndex4 = parseInt(this.value);
//     for (const tablon of tablonElements){
//         tablon.style.display = tablon.id === `tablon${selectedIndex4}` ? "grid" : "none";
//     }
// }

function carton5x5(){
    window.open("carton5x5.html");
    window.close(window.self);
}

function bingo5(){
    bingoClicks++;
    const displayElement0 = document.getElementById("contador-turno");
    displayElement0.textContent = `Van por el turno: ${bingoClicks}`;
    if (bingoClicks >= 24){
        alert("Se llegó al límite de 25 cantos")
        document.querySelector(".cantarNumero").disabled = true;
    }
    const randomNumber = Math.floor(Math.random() * 51)+1;
    const displayElement = document.getElementById("random-number-display");
    displayElement.textContent = `El Número es: ${randomNumber}`;
    const tablonElements = document.querySelectorAll(".tablon5");
    for (const tablon of tablonElements){
        const gridBoxes = tablon.querySelectorAll(".box");
        for (const box of gridBoxes) {
            const boxValue = parseInt(box.textContent, 10);
            if (boxValue === randomNumber){
                box.style.backgroundColor = "green";
            }
        }
    }
    event.preventDefault();

}

// const selectElement5 = document.getElementById("mySelect5");
// const tablonElements5 = document.querySelectorAll(".tablon5");
// selectElement5.onchange = function(){
    // const selectedIndex5 = parseInt(this.value);
    // for (let i = 0; i < tablonElements5.length; i++){
        // tablonElements5[i].style.display = i === selectedIndex5 ? "grid" : "none";
    // }
// }




// form.addEventListener("Añadir al Juego", (e) => {
//     e.preventDefault();
//     const fd = new FormData(form);
//     const obj = Object.fromEntries(fd);

//     const json = JSON.stringify(obj);
//     localStorage.setItem('form', json);
