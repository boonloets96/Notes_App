const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes(){ //function for load data from the local storage
    notesContainer.innerHTML = localStorage.getItem("notes"); //get data to "notes" and writing html to "notesContainer"
}
showNotes(); //called the function

function updateStorage(){ 
    localStorage.setItem("notes", notesContainer.innerHTML); //insert data or delete data
}

createBtn.addEventListener("click", ()=>{  
    let inputBox = document.createElement("p"); //create "p" tag html element at inputBox
    let img = document.createElement("img"); //create "img" tag html element at img
    inputBox.className = "input-box"; //create class in html name "input-box"
    inputBox.setAttribute("contenteditable", "true"); //set html attribute : "contenteditable" value: "true"
    img.src = "images/delete.png"; //create img tag and set src to "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img); //defined inputBox variable into notesContainer variable and defined img variable into inputBox variable
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){ //condition check if e.target tag name is IMG
        e.target.parentElement.remove(); //As remove parent element (parent element is p class name "input-box")
        updateStorage() //called function
    } else if(e.target.tagName) { //else condition check if e.target is not "IMG"
        notes = document.querySelectorAll(".input-box"); 
        notes.forEach(nt => { //loop data from notes variable keep into "nt" parameter
            nt.onkeyup = function(){ 
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

