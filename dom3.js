// console.log("king")

// let boxes  = document.getElementsByClassName("box")  // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// boxes[2].style.backgroundColor = "red" // it changes the background color of the third box to red
 
// document.getElementById("blue").style.backgroundColor = "blue" // it changes the background color of the box with id "blue" to blue


// or i can go with querySelector and querySelectorAll

let boxes2 = document.querySelectorAll(".box") // NodeList(5) [div.box, div.box, div.box, div.box, div.box]

boxes2[1].style.backgroundColor = "green" // it changes the background color of the second box to green

document.querySelector("#blue").style.backgroundColor = "yellow" // it changes the background color of the box with id "blue" to yellow