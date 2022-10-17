
const container = document.getElementById("contain");

function sketchsize(row, height){
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-height', height);
    for(let i =0; i<(row * height); i++){
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        container.appendChild(cell).className = "grid-item";
    };
};
sketchsize(16,16);
var gridItems = document.getElementsByClassName("grid-item");
for(let i=0;i<gridItems.length;i++){
    gridItems[i].setAttribute("id", "pixel"+i);
}
for(let i=0; i<gridItems.length; i++){
    document.getElementById("pixel" +i).addEventListener("mouseenter", event => cool(i));
}
function cool(e){
    console.log("correct" + (e+1));
    document.getElementById("pixel" + e).className ="transformed";
    
};
