let currentMode = 'potencia';

function setMode(mode) {
    currentMode = mode;
}

function appendNumber(number) {
    const display = document.getElementById(currentMode);
    display.value += number;
}

function clearDisplay() {
    document.getElementById('potencia').value = '';
    document.getElementById('tiempo').value = '';
    document.getElementById('resultado').textContent = '';
}

function calcularEnergia() {
    const potencia = parseFloat(document.getElementById('potencia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);

    if (isNaN(potencia) || isNaN(tiempo)) {
        document.getElementById('resultado').textContent = 'Por favor, ingrese valores válidos.';
        return;
    }

    const energia = (potencia * tiempo) / 1000;
    document.getElementById('resultado').textContent = `Energía consumida: ${energia.toFixed(2)} kWh`;
}

