var isPalindrome = function(s) {
  var cleaned = s.replace(/\W/g, "");
  var reversedAndCleaned = cleaned
    .split("")
    .reverse()
    .join("");

  return cleaned.toLowerCase() == reversedAndCleaned.toLowerCase();
};
