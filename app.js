// https://blog.tompawlak.org/generate-random-values-nodejs-javascript

var prompt = require('prompt');

var lengthPrompt = {
  name: 'length',
  type: 'integer',
  message: 'amount?',
  validator: /[1-9]\d*|0\d+/,
  warning: 'Must respond only numbers',
  default: '230'
};

var lowPrompt = {
  name: 'low',
  type: 'integer',
  message: 'low?',
  validator: /^[\-\+]\s*\d+\s*$/,
  warning: 'Must respond only numbers with + or -',
  default: '-10000'
};

var highPrompt = {
  name: 'high',
  type: 'integer',
  message: 'high?',
  validator: /^[\-\+]\s*\d+\s*$/,
  warning: 'Must respond only numbers with + or -',
  default: '+10000'
};

var length = 0;
var low = 0;
var high = 0;

prompt.start();

prompt.get([lengthPrompt, lowPrompt, highPrompt], function(err, result) {
  if (err == null) {
    length = result.length;
    low = result.low;
    high = result.high;
    generateRandom(length, low, high);
    // console.log('Input received:');
    // console.log(JSON.stringify(result, null, 2));
  };
});

function generateRandom (length, low, high) {
  var numbers = new Array(length);
  
  for (var i = 0; i < numbers.length; i++) {
    let randomValue = randomIntInc(low / 10, high / 10) * 10;
    numbers[i] = randomValue;
  }
  
  for (var i = 0; i < length; i++) {
    let number = numbers[i];
    let numberString = number.toString()
    console.log(numberString)
  }
}

function random (low, high) {
  return Math.random() * (high - low) + low;
}

function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

