const p1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const element = +input[i];
      const element2 = +input[j];

      if (element + element2 === 2020) {
        return element * element2;
      }
    }
  }
};

const p2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        const element = +input[i];
        const element2 = +input[j];
        const element3 = +input[k];

        if (element + element2 + element3 === 2020) {
          return element * element2 * element3;
        }
      }
    }
  }
};

module.exports = {
  p1,
  p2,
};
