//JS code for roman numeral conversion
const form = document.getElementById('form');//form element
const convertButton = document.getElementById('convert-btn');//convert button
const output = document.getElementById('output');//output div for displaying result

//function to convert decimal number to roman numeral
const convertToRoman = num => {
  const ref = [
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
    ['I', 1]
  ];
  const result = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });

  return result.join('');
};

//function to validate input number
const isValid = (str, int) => {
  let alertText = '';

  if (!str || str.match(/[e.]/g)) {
    alertText = 'Please enter a valid number.';
  } else if (int < 1) {
    alertText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    alertText = 'Please enter a number less than or equal to 3999.';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = alertText;
  output.classList.add('alert');

  return false;
};

//function to clear output and reset styling
const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

//event listener for form submission
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent default form submission behaviour
  updateUI();// update UI with conversion result
});

//event listener for convert button click
convertButton.addEventListener('click', () => {
  updateUI(); // update UI with conversion result
});

//function to update UI with conversion result
const updateUI = () => {
  const numStr = document.getElementById('number').value; //get input number as string
  const int = parseInt(numStr, 10); //convert input string to integer

  output.classList.remove('hidden'); // remove 'hidden' class to display output div

  clearOutput(); // clear previous output and reset styling

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int); // display converter roman numeral in output div
  }
};
