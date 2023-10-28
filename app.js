let mybutton = document.querySelector(".button");
mybutton.addEventListener("click", myClick);

function myClick() {
    let name = prompt("Hello! What is your name?")
    if (name === ""||null) {
        name = "there";
    }
    let ans = prompt(`Hello ${name}. What is your favourite weather?`);
    let myImage = document.querySelector("#image");
    
    if (ans.toLowerCase() === "sunny") {
        myImage.src = "./asset/sunny.gif";
    }
    else if (ans.toLowerCase() === "rainy") {
        myImage.src = "./asset/rainy.gif";
    }
    else {
        alert("This weather is not in our library");
    }
    
}