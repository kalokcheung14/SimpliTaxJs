function addToInput(value) {
    const numberInput = document.getElementById('numberInput');
    const textContent = numberInput.textContent;

    // There should only be one floating point in the price
    if (value === '.' && textContent.includes('.')) return;
    // Limit the maximum length of the number to avoid UI break
    if (textContent.length > 7) return;

    // If input is 0 then it should be replaced upon new input
    // otherwise it should be accumulated
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
    // Calculate the price after applying Ontario GST/HST, which is 13%
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

    // Calculate the total price
    const finalPrice = (numberInput ? calcTax(parseFloat(numberInput)) : 0)

    // Calculate the final payment after applying different tipping percentages
    numberDisplay.textContent = finalPrice.toFixed(2);
    numberTip1.textContent = (finalPrice + numberInput * 0.15).toFixed(2);
    numberTip2.textContent = (finalPrice + numberInput * 0.18).toFixed(2);
    numberTip3.textContent = (finalPrice + numberInput * 0.20).toFixed(2);
}
