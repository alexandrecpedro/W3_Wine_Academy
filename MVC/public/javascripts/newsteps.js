var Form1 = document.getElementById("Form1")
var Form2 = document.getElementById("Form2")
var Form3 = document.getElementById("Form3")
var Form4 = document.getElementById("Form4")

var Next1 = document.getElementById("Next1")
var Next2 = document.getElementById("Next2")
var Next3 = document.getElementById("Next3")

var Back1 = document.getElementById("Back1")
var Back2 = document.getElementById("Back2")
var Back3 = document.getElementById("Back3")

var menu1 = document.getElementById("menu1")
var menu2 = document.getElementById("menu2")
var menu3 = document.getElementById("menu3")
var menu4 = document.getElementById("menu4")

Next1.onclick = function() {
  Form1.style.left= "-750px"
  Form2.style.left= "50px"
  menu1.classList.remove("active")
  menu2.classList.add("active")

}

Back1.onclick = function() {
  Form1.style.left= "40px"
  Form2.style.left= "750px"
  menu1.classList.add("active")
  menu2.classList.remove("active")
}

Next2.onclick = function() {
  Form2.style.left= "-750px"
  Form3.style.left= "50px"
  menu3.classList.add("active")
  menu2.classList.remove("active")
}

Back2.onclick = function() {
  Form2.style.left= "50px"
  Form3.style.left= "750px"
  menu3.classList.remove("active")
  menu2.classList.add("active")
}

Next3.onclick = function() {
  Form3.style.left= "-750px"
  Form4.style.left= "50px"
  menu3.classList.remove("active")
  menu4.classList.add("active")
}

Back3.onclick = function() {
  Form3.style.left= "50px"
  Form4.style.left= "750px"
  menu3.classList.add("active")
  menu4.classList.remove("active")
}
