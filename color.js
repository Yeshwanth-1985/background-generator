var _ = require('lodash');
var arr = [1,2,3,4,5,6,7,8];
console.log('edited: ', _.without(arr, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

function generate() {
body.style.background= "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
css.textContent = color1.value + " to " + color2.value;
}
/*
color1.addEventListener("input", generate);

color2.addEventListener("input", generate);*/