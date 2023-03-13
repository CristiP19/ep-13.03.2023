const isValidValue = (value) => {
  return value >= 0 && value <= 100;
}

const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const inputNumber = document.getElementById('input-number');

btnMinus.addEventListener('click', () => {
  let currentValue = parseInt(inputNumber.value);
  if (currentValue > 5) {
    inputNumber.value = currentValue - 10;
  }
});

btnMinus.addEventListener('dblclick', () => {
  let currentValue = parseInt(inputNumber.value);
  if (currentValue > 5) {
    inputNumber.value = currentValue - 5;
  }
});

btnPlus.addEventListener('click', () => {
  let currentValue = parseInt(inputNumber.value);
  if (currentValue < 95) {
    inputNumber.value = currentValue + 10;
  }
});

btnPlus.addEventListener('dblclick', () => {
  let currentValue = parseInt(inputNumber.value);
  if (currentValue < 100) {
    inputNumber.value = currentValue + 5;
  }
});

inputNumber.addEventListener('input', () => {
  let currentValue = parseInt(inputNumber.value);
  if (!isValidValue(currentValue)) {
    inputNumber.value = 50;
  }
});
