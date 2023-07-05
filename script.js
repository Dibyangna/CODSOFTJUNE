let display = document.getElementById('display');
let input = '';
let isResultDisplayed = false;

function handleButton(value) {
    if (isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }
    display.value += value;
    input += value;
}

function clearDisplay() {
    display.value = '';
    input = '';
}

function calculate() {
    let result;
    try {
        result = eval(input);
        display.value = result;
        isResultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
    }
}
