let menu = document.getElementById('button')
let nav = document.querySelector('.menu')

menu.addEventListener ("click", () => 
nav.classList.toggle("active"))

var rem1 = document.getElementById('rem1');
var rem2 = document.getElementById('rem2');
var rem3 = document.getElementById('rem3');
var rem4 = document.getElementById('rem4');

rem1.addEventListener("click", () => 
nav.classList.toggle("active"));

rem2.addEventListener("click", () => 
nav.classList.toggle("active"));

rem3.addEventListener("click", () => 
nav.classList.toggle("active"));

rem4.addEventListener("click", () => 
nav.classList.toggle("active"));