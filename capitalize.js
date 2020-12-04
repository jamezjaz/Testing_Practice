// A function that takes a string and returns it with the first character capitalized

const capitalize = (string) => {
    const capitalLetter = string.charAt(0).toUpperCase();
    const smallLetters = string.slice(1);
    const CapitalizedString = capitalLetter + smallLetters;
    return CapitalizedString;
  };
  
  module.exports = capitalize;
  module.exports = capitalize;