var WordCount = function(string) {
  var wordCount = {};
  var wordArray = string.replace(/\n/g, " ").split(" ");

  wordArray.forEach(function(word) {
    if (word in wordCount) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
};

module.exports = WordCount;
