const validators = {
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

const passportValidator = (passports, isValidateValue = false) => {
  return passports.filter((passport) => {
    const fields = passport.split(" ");
    let included = 0;

    fields.forEach((field) => {
      const [key, value] = field.split(":");

      let isValidKey = Object.keys(validators).includes(key);
      let isValidValue = true;

      if (isValidateValue && isValidKey) {
        isValidValue = validators[key](value);
      }

      if (isValidKey && isValidValue) {
        included++;
      }
    });

    return included === Object.keys(validators).length;
  });
};

module.exports = passportValidator;
