function addToInput(value) {
    const numberInput = document.getElementById('numberInput');
    const textContent = numberInput.textContent;

    if (value === '.' && textContent.includes('.')) return;
    if (textContent.length > 7) return;

    if (textContent === '0.00' || textContent === '0') {
        numberInput.textContent = value;
    } else {
        numberInput.textContent += value;
    }
    updateNumberDisplay();
}

function clearInput() {
    const numberInput = document.getElementById('numberInput');
    numberInput.textContent = '0';
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
    const numberTip1 = document.getElementById('numberTip1');
    const numberTip2 = document.getElementById('numberTip2');
    const numberTip3 = document.getElementById('numberTip3');

    const finalPrice = (numberInput ? calcTax(parseFloat(numberInput)) : 0)

    numberDisplay.textContent = finalPrice.toFixed(2);
    numberTip1.textContent = (finalPrice * 1.15).toFixed(2);
    numberTip2.textContent = (finalPrice * 1.18).toFixed(2);
    numberTip3.textContent = (finalPrice * 1.20).toFixed(2);
}
