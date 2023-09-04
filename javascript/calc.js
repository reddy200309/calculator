function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculatePercentage() {
    const resultField = document.getElementById('result');
    const currentValue = parseFloat(resultField.value);
    resultField.value = (currentValue / 100).toString();
}

function clearLastInput() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
