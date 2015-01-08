//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var lastChar = input.charAt(input.length-1);

  if(input.trim().length === 0) {
    return 'Fine. Be that way!';
  } else if (hasAlphabets(input) && isShouting(input)) {
    return 'Whoa, chill out!';
  } else if (lastChar == '?') {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }

  function hasAlphabets(string) {
    return /[a-zA-Z]/i.test(string);
  }

  function isShouting(string) {
    return string === string.toUpperCase();
  }
};

module.exports = Bob;
