'use-strict';

const printForecast = (arr) => {
  let finalString = '';
  for (let i = 0; i < arr.length; i++) {
    finalString += ` ${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(finalString);
};

printForecast([17, 21, 23]);
