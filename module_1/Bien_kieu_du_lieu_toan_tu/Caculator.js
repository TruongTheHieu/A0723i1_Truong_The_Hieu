function add() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    result = a+b;
    document.getElementById("result").innerHTML = result;
}
function sub() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    result = a-b;
    document.getElementById("result").innerHTML = result;

}
function Multi() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    result = a * b;
    document.getElementById("result").innerHTML = result;
}
function Divi() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    result = a / b;
    document.getElementById("result").innerHTML = result;

}