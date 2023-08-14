function ChangMoney() {
    let result = 0;
    let number = document.getElementById("number").value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    if (from === "USD" && to === "VND") {
        result = number * 23000;
    } else if (from === "VND" && to === "USD") {
        result = number / 23000;
    } else {
        result = number;
    }
    document.getElementById('result').innerHTML = "Result: " + result
}