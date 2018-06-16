// https://blog.tompawlak.org/generate-random-values-nodejs-javascript

var prompt = require('prompt');

prompt.start();

var length = {
  name: 'length',
  message: 'amount?',
  validator: /[1-9]\d*|0\d+/,
  warning: 'Must respond only numbers',
  default: '230'
};

prompt.get(length, function(err, result) {
  if (err == null) {
    console.log(result);
  };
});

// var numbers = new Array(length);
// for (var i = 0; i < numbers.length; i++) {
//     numbers[i] = randomIntInc(-1000,1000) * 10
// }

// for (var i = 0; i < length; i++) {
//   let number = numbers[i];
//   let numberString = number.toString()
//   console.log(numberString)
// }


function random (low, high) {
  return Math.random() * (high - low) + low;
}

function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

