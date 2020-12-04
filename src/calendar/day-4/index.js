const REQUIRED_FIELDS = {
  byr: (value) => value >= 1920 && value <= 2002,
  iyr: (value) => value >= 2010 && value <= 2020,
  eyr: (value) => value >= 2020 && value <= 2030,
  hgt: (value) => {
    const unit = value.slice(-2);
    const unitValue = +value.slice(0, value.length - 2);

    if (unit === "in") {
      return unitValue >= 59 && unitValue <= 76;
    } else if (unit === "cm") {
      return unitValue >= 150 && unitValue <= 193;
    }

    return false;
  },
  hcl: (value) => value.match(/^#[a-f0-9]{6}/g),
  ecl: (value) =>
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].find(
      (color) => color === value
    ),
  pid: (value) => value.length == 9 && !isNaN(value),
};

const p1 = (input) => {
  const passports = _getPassports(input);

  const count = _validatePassportKeys(passports, (key) => {
    return Object.keys(REQUIRED_FIELDS).includes(key);
  });

  return count;
};

const p2 = (input) => {
  const passports = _getPassports(input);

  const count = _validatePassportKeys(passports, (key, value) => {
    return (
      Object.keys(REQUIRED_FIELDS).includes(key) && REQUIRED_FIELDS[key](value)
    );
  });

  return count;
};

const _validatePassportKeys = (passports, validate) => {
  let count = 0;

  passports.forEach((passport) => {
    const fields = passport.split(" ");
    let included = 0;
    fields.forEach((field) => {
      const [key, value] = field.split(":");

      const isValid = validate(key, value);

      if (isValid) {
        included++;
      }
    });

    if (included === Object.keys(REQUIRED_FIELDS).length) {
      count++;
    }
  });

  return count;
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
