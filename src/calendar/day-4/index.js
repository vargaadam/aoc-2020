const validatorts = require("./validators");

const p1 = (input) => {
  const passports = _getPassports(input);

  const count = _validatePassportKeys(passports, (key) => {
    return Object.keys(validatorts).includes(key);
  });

  return count;
};

const p2 = (input) => {
  const passports = _getPassports(input);

  const count = _validatePassportKeys(passports, (key, value) => {
    return Object.keys(validatorts).includes(key) && validatorts[key](value);
  });

  return count;
};

const _validatePassportKeys = (passports, validate) => {
  return passports.filter((passport) => {
    const fields = passport.split(" ");
    let included = 0;

    fields.forEach((field) => {
      const [key, value] = field.split(":");

      const isValid = validate(key, value);

      if (isValid) {
        included++;
      }
    });

    return included === Object.keys(validatorts).length;
  }).length;
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
