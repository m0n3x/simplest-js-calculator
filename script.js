
let operationButtons = document.getElementsByClassName('operation-buttons');

let inputNumber1 = document.getElementById('number1');
let inputNumber2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = +inputNumber1.value;
    var number2 = +inputNumber2.value;
    
    if(operationCode === '+') {
        var result = number1 + number2;
    } else if(operationCode === '-') {
        var result = number1 - number2;
    } else if(operationCode === '*') {
        var result = number1 * number2;
    } else if(operationCode === '/') {
        var result = number1 / number2;
    } else { 
        alert('operation is unknown'); 
    }
    alert(result);
    
}



function addCommonEventListener(i) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}
for (let i=0; i < operationButtons.length; i++) {
    addCommonEventListener(i)
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}



//не работает, разобраться почему