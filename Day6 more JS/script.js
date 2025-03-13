//select elements...

let paragraph = document.getElementById("text");
let colorButton = document.getElementById("colorButton");
let addTextButton = document.getElementById("addTextButton");
let removeTextButton = document.getElementById("removeTextButton");

let extraTextContainer = document.getElementById("extra-texts");

//function to generate a random color...
function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

//Change text color on button click

colorButton.addEventListener("click", function(){
    paragraph.style.color = getRandomColor();
})

//Mouse over event...
colorButton.addEventListener("mouseover", function(){
    paragraph.style.backgroundColor = 'lightgray';
})

//double-click event...
colorButton.addEventListener('dblclick', function(){
    paragraph.style.backgroundColor="transparent";
})

//add a new paragraph
addTextButton.addEventListener("click", function(){
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically added paragraph";
    newParagraph.style.color = getRandomColor();
    extraTextContainer.appendChild(newParagraph);

})

//remove last added paragraph...
removeTextButton.addEventListener("click", function(){
    let lastParagraph = extraTextContainer.lastElementChild;
    if(lastParagraph){
        extraTextContainer.removeChild(lastParagraph);
    }
})