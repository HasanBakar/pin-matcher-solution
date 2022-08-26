function pinGenerator() {
    const random = Math.round(Math.random() * 1000000);
    const pin = random + '';
    if (pin.length === 6) {
        return pin;
    }
    return pinGenerator();
};


document.getElementById('pin_generator').addEventListener('click', function () {
    const pin = pinGenerator();
    const pinField = document.getElementById('pin_generator_field');
    pinField.value = pin;
});

document.getElementById('calculate').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed_numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {


        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('varify_pin').addEventListener('click', function () {
    const pinGeneratorField = document.getElementById('pin_generator_field');
    const pinGenerator = pinGeneratorField.value;

    const typedNumberField = document.getElementById('typed_numbers');
    const YourInputPin = typedNumberField.value;




    const success = document.getElementById('pin_success');
    const failure = document.getElementById('pin_failure');
    if (pinGenerator === YourInputPin) {
        success.style.display = 'block';
        failure.style.display = 'none';
        // success.innerText = '';
    }
    else {
        failure.style.display = 'block';
        success.style.display = 'none';
    }
})