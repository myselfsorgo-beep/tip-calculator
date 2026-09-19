const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const calcBtn = document.getElementById("calcBtn");
const tipResult = document.getElementById("tipResult");

calcBtn.addEventListener("click", function () {
    const tipPercentValue = Number(tipPercent.value);
    const billAmountValue = Number(billAmount.value);

    let result;

    
    result = billAmountValue * (tipPercentValue/100);
    tipResult.textContent = result;
});