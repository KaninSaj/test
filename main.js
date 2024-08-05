function countNum(){
    number = document.getElementById('number1').value
    result = document.getElementById('result');
    
    sum = parseFloat(number) / 27.17 ;
    result.innerHTML = sum.toFixed(2) + " SGD"
}
