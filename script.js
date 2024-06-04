function addToInput(value) {
    const numberInput = document.getElementById('numberInput');
    if (value === '.' && numberInput.textContent.includes('.')) return;
    if (numberInput.textContent === '0.00' || numberInput.textContent === '0') {
        numberInput.textContent = value;
    } else {
        numberInput.textContent += value;
    }
    updateNumberDisplay();
}

function clearInput() {
    const numberInput = document.getElementById('numberInput');
    numberInput.textContent = '0.00';
    updateNumberDisplay();
}

function calcTax(pretax) {
    if (isNaN(pretax)) {
        return 0;
    } else {
        return pretax * 1.13;
    }
}

function updateNumberDisplay() {
    const numberInput = document.getElementById('numberInput').textContent;
    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.textContent = (numberInput ? calcTax(parseFloat(numberInput)) : 0).toFixed(2);
}
