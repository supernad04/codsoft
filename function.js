console.log("JS is connected");

let display = document.getElementById('display');

const appendToDisplay = (value) => {
  display.value += value;
};

//clear the display
const clearDisplay = () => {
  display.value = '';
};

// Remove the last character
const clearLastChar = () =>  {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1); 
}

//change the sign
const changeSign = () => {
  let currentValue = display.value;
  if (currentValue !== '' && currentValue !== '0') {
    display.value = currentValue.startsWith('-') ? currentValue.slice(1) : '-' + currentValue;
  }
};

//calculate the input values
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
};

