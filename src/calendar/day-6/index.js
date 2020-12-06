const p1 = (input) => {
  let result = 0;

  _getGroups(input).forEach((element) => {
    const letters = new Set(element.string.split(""));
    result += letters.size;
  });

  return result;
};

const p2 = (input) => {
  let result = 0;

  _getGroups(input).forEach((element) => {
    const letters = new Set(element.string.split(""));

    for (const letter of letters.values()) {
      const contains = element.string.split(letter).length - 1;

      if (contains === element.person) {
        result++;
      }
    }
  });

  return result;
};

const _getGroups = (input) => {
  return input.reduce(
    (acc, curr, i) => {
      if (input[i].length == 0) {
        acc.push({ string: curr, person: 0 });
      } else if (curr.length != 0) {
        acc[acc.length - 1] = {
          string: acc[acc.length - 1].string.concat("", curr),
          person: acc[acc.length - 1].person + 1,
        };
      }

      return acc;
    },
    [{ string: "", person: 0 }]
  );
};

module.exports = { p1, p2 };
