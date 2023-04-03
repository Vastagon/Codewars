function getCount(str) {
  var cleanString = str.replace(/[qwrtypsdfghkjlzxcvbnm ]/g, "");
  return cleanString.length;
}
