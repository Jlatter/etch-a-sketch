
const container = document.getElementById("contain");
var gridItems = document.getElementsByClassName("grid-item");

var pix =  document.getElementById("myRange");
var output = document.getElementById("demo");
console.log(pix.value)
output.innerHTML = pix.value;
let gridSize = pix.value;
pix.oninput = function() {
output.innerHTML = this.value;
clearGrid();
sketchsize(parseInt(this.value),parseInt(this.value));
};
function clearGrid(){
     while(gridItems.length > 0){
        gridItems[0].parentNode.removeChild(gridItems[0]);
    };
};
//make grid
function sketchsize(row, height){
container.style.setProperty('--grid-row', row);
container.style.setProperty('--grid-height', height);
for(let i =0; i<(row * height); i++){
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
};
for(let i=0;i<gridItems.length;i++){
    gridItems[i].setAttribute("id", "pixel"+i);
}
for(let i=0; i<gridItems.length; i++){
    document.getElementById("pixel" +i).addEventListener("mouseenter", event => cool(i));
};
};

sketchsize(16,16);


function cool(e){
    console.log("correct" + (e+1));
    document.getElementById("pixel" + e).className ="grid-item transformed";
    
};
const clear = document.getElementById("option");
clear.addEventListener("click", event => cleared());
function cleared(){
    console.log("clicked");
    for(let i=0; i<gridItems.length; i++){
        document.getElementById("pixel"+i).classList.remove("transformed");
        
    }};
function eraser(){
    document.getElementById("eraser").className ="eraser active"
}