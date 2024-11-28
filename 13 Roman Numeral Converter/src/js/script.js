const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', function () {
  const inputValue = numberInput.value;

  if (!inputValue) {
    output.textContent = "Please enter a valid number";
  } else if(inputValue < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if(inputValue >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = convertToRoman(inputValue);
    output.textContent = romanNumeral;
  }
});

function convertToRoman(num) {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';
  for (const [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
}
