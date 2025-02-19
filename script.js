// console.log("hello log");
// alert("hi");

function onClick(){
    alert("helllo");
}

function onInput(a, b){
    var sum = parseInt(a) + parseInt(b);
    alert(sum);
}

function sumInt(a, b){
    return parseInt(a) + parseInt(b);
}

function displayResult(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var result = sumInt(a, b);
    // onInput(a, b);
    document.getElementById("result").innerHTML = "The answer is: " + result;
    // var display = document.createElement("p");
    // display.innerHTML = "The answer is: " + result; 
}
