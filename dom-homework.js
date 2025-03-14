let h1 = document.createElement("h1")
let p = document.createElement("p")
let ul = document.createElement("ul")
let l1 = document.createElement("li")
let l2 = document.createElement("li")
let l3 = document.createElement("li")
let mydiv = document.getElementById("myDiv") // creates all elements
let x = 0 
let button = document.createElement("button")


elements = [h1, p, ul]
lists = [l1, l2, l3]
for (let i = 0; i < elements.length; i++){
    mydiv.appendChild(elements[i]) // appends them to mydiv
}

for (let i = 0; i < lists.length; i++){
    ul.appendChild(lists[i]) // appends to ul
}
document.body.appendChild(button)

h1.innerText = "Welcome to DOM homework" // assigns html text to lis
p.innerText = "This is your first DOM homework assignment"
l1.innerText = "Make sure to do homework"
l2.innerText = "Make sure to do homework or else"
l3.innerText = "Study"
button.innerText = "Add New List Item"

h1.setAttribute("class", "highlight")

button.addEventListener("click", function(){ // does extra text and random color
    let randomColor = "#"+Math.floor(Math.random() * 16777215).toString(16);
    let lx = document.createElement("li")
    ul.appendChild(lx)
    lx.textContent = "New List Item " + x
    lx.style.color = randomColor
    x += 1
})

mydiv.addEventListener("click",function(){
    let randomColor = "#"+Math.floor(Math.random() * 16777215).toString(16); // make background random color
    mydiv.style.backgroundColor = randomColor
})