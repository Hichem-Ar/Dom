document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const result = document.getElementById('result');

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate <= 0) {
        result.textContent = "Please enter valid numbers!";
        result.style.color = "red";
    } else {
        const converted = (amount * rate).toFixed(2);
        result.textContent = `${amount} USD = ${converted} EUR`;
        result.style.color = "green";
    }
});
