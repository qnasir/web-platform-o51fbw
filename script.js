// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.
var container=document.getElementById("container").style.backgroundColor='green'

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".
document.querySelector("#header").innerText = "These are the DOM Methods"

// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
var ClassName=document.getElementsByClassName("dom-methods")
for (i=0; i<ClassName.length; i++) {
  ClassName[i].style.color='red'
}

// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
var QueryAll=document.querySelectorAll(".dom-methods")
for (i=0; i<ClassName.length; i++) {
  QueryAll[i].style.fontSize='20px'
} 

// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
const div = document.createElement("div")
const body = document.body
body.append(div)
div.textContent = "Division"

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
div.setAttribute("id", "main")
console.log(div.getAttribute("id"))

// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
main.innerHTML = "This is a division"

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.
var main1 = document.getElementById("main")
var p = document.createElement("p")
main1.append(p)
p.innerText = "This is a paragraph text"

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
var footer=document.getElementById("dom-footer")
footer.classList.remove("footer")
footer.classList.add("dom-method-footer")

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
p.style.color = "red"

// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.
var copyright = document.querySelector(".copyright")
copyright.remove()
