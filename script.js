function addNumber(){
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var result = document.getElementById("result");
    result.value = val1 + val2;
}

function subtractNumber(){
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var result = document.getElementById("difference");
    result.value = val1 - val2;
}

function multiplyNumber(){
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var result = document.getElementById("product");
    result.value = val1 * val2;
}

function divideNumber(){
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var result = document.getElementById("quotient");
    result.value = val1 / val2;
}


