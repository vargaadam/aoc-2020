const passportValidator = require("./validator");

const p1 = (input) => {
  const passports = _getPassports(input);

  const validPassports = passportValidator(passports);

  return validPassports.length;
};

const p2 = (input) => {
  const passports = _getPassports(input);

  const validPassports = passportValidator(passports, true);

  return validPassports.length;
};

const _getPassports = (input) => {
  return input.reduce((acc, curr, i) => {
    if (acc.length === 0 || input[i].length == 0) {
      acc.push(curr);
    } else if (curr.length != 0) {
      acc[acc.length - 1] = acc[acc.length - 1].concat(" ", curr).trim();
    }

    return acc;
  }, []);
};

module.exports = { p1, p2 };
