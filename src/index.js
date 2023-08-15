module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  



if ( number < 20 ) {
  if (number === 0) {
      return 'zero';
  } else if (number < 10) {
      return ones[number];
  } else if (number > 10 && number < 20) {
      return teens[number % 10];
  } 
} else if (number >= 20 && number < 100) {
    if (number % 10 === 0) {
      return tens[number/10];
  } else if (number < 100 && number % 10 != 0) {
      return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
  }
} else if (number >= 100 && number <= 999) {
  if (number % 100 === 0) {
    return `${ones[Math.floor(number / 100)]} hundred`;
  } else if (number % 10 > 10) {
    return `${ones[Math.floor(number / 100)]} hundred ${ones[number % 100]}`;
  } else if (number % 100 > 10 && number % 100 < 20) {
    return `${ones[Math.floor(number / 100)]} hundred ${teens[number % 10]}`;
  } else {
    return `${ones[Math.floor(number / 100)]} hundred ${tens[Math.floor(number / 10) % 10]} ${ones[number % 10]}`;
  }
}
};







