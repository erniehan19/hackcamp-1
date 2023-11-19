console.log("Hello World")

let myname = "HackCamp2023";
console.log(myname)

function say_hello(name) {
    console.log("Hello " + name + "!")
}

say_hello("John")
say_hello("John")
say_hello("John")

function increment() {
    score_element = document.getElementById("score");
    score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}