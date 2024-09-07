// Simulación de tasas de cambio
const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88 },
    GBP: { USD: 1.34, EUR: 1.14, GBP: 1 }
};

// Selección de elementos del DOM
const form = document.getElementById('currency-form');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultDiv = document.getElementById('result');

// Función para convertir moneda
function convertCurrency(amount, from, to) {
    const rate = exchangeRates[from][to];
    return amount * rate;
}

// Evento de envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que la página se recargue

    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Validar que el monto sea un número
    if (isNaN(amount)) {
        resultDiv.textContent = 'Please enter a valid amount';
        return;
    }

    // Realizar la conversión
    const convertedAmount = convertCurrency(amount, from, to);

    // Mostrar el resultado
    resultDiv.textContent = `${amount} ${from} is equal to ${convertedAmount.toFixed(2)} ${to}`;
});

