
const container = document.getElementById("contain");
var gridItems = document.getElementsByClassName("grid-item");
var numcount = 0;
var ranNum = 0;
var pix =  document.getElementById("myRange");
var output = document.getElementById("demo");
console.log(pix.value)
output.innerHTML = pix.value+"x"+pix.value;
let gridSize = pix.value;
pix.oninput = function() {
output.innerHTML = this.value+"x"+this.value;
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
};
for(let i=0; i<gridItems.length; i++){
    document.getElementById("pixel" +i).addEventListener("mouseenter", event => cool(i));
};
};

sketchsize(16,16);


function cool(e){
    console.log("correct" + (e+1));
    document.getElementById("pixel" + e).style.backgroundColor= colorpicker.value;
    document.getElementById("pixel" + e).style.border= colorpicker.value;
    
};
function notcool(e){
    console.log("indoa" +(e+1));
    document.getElementById("pixel"+e).style ="";
};
const clear = document.getElementById("option");
clear.addEventListener("click", event => cleared());
function cleared(){
    console.log("clicked");
    for(let i=0; i<gridItems.length; i++){
        document.getElementById("pixel"+i).style ="";
        
        
    }};
    const eraserConst= document.getElementById("eraser");
    eraserConst.addEventListener("click", e => eraser());
    
function eraser(){
    if(ranNum%2===1){ranNum++;randConst.className="random"}
    numcount++;
    console.log(numcount);
    if(numcount%2 ===0){eraserConst.className="eraser";
    for(let i=0; i<gridItems.length; i++){
        document.getElementById("pixel" +i).addEventListener("mouseenter", event => cool(i));
    };}
   else{document.getElementById("eraser").className ="eraser active";
   for(let i=0; i<gridItems.length; i++){
    document.getElementById("pixel" +i).addEventListener("mouseenter", event => notcool(i));
};};
};
const colorpicker = document.getElementById("colorpicker")
//const transformed = document.querySelector(transformed)
console.log(colorpicker.value)
const randConst = document.getElementById("random")
randConst.addEventListener("click", e => randomColor())
function randomColor() {
    ranNum++;
    console.log(ranNum)
    if(ranNum%2===0){randConst.className = "random";for(let i=0; i<gridItems.length; i++){
        document.getElementById("pixel" +i).addEventListener("mouseenter", event => cool(i));}}
        else{randConst.className = "random active";for(let i=0; i<gridItems.length; i++){
            document.getElementById("pixel" +i).addEventListener("mouseenter", event => rancool(i));}
};
    if(numcount%2===1){numcount++;eraserConst.className="eraser";}
    
};
function rancool(e){
   let x = Math.floor((Math.random() * 6));
   let col = ["red","blue","green","yellow","orange","purple",]

   document.getElementById("pixel"+e).style.backgroundColor= col[x]
    document.getElementById("pixel"+e).style.border = col[x];
   console.log(col[x])
}