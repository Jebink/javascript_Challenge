//challenge 1  age in days
//clickme
function ageIndays() {
    var birthyear = prompt("what year were you born?")
    var Indays = (2020 - birthyear) * 365
    var h1 = document.createElement("h1")
    var textanswer = document.createTextNode("you are "+ Indays + " days old")
    h1.setAttribute("id", "ageIndays")
    h1.appendChild(textanswer)
    document.getElementById("result").appendChild(h1)
}
//reset
function reset() {
    document.getElementById("ageIndays").remove();
}

//challenge 2 cat generator

