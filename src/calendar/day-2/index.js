const p1 = (input) => {
  const count = _getResult(
    input,
    ({ firstNumber, secondNumber, letter, text }) => {
      const letterOccurrence = text.split(letter).length - 1;

      return (
        letterOccurrence >= firstNumber && letterOccurrence <= secondNumber
      );
    }
  );

  return count;
};

const p2 = (input) => {
  const count = _getResult(
    input,
    ({ firstNumber, secondNumber, letter, text }) => {
      return (
        (text[firstNumber - 1] == letter && text[secondNumber - 1] != letter) ||
        (text[firstNumber - 1] != letter && text[secondNumber - 1] == letter)
      );
    }
  );

  return count;
};

const _getResult = (input, cb) => {
  let count = 0;

  input.forEach((element) => {
    const elementParts = element.split(" ");

    const [firstNumber, secondNumber] = elementParts[0].split("-");

    const letter = elementParts[1].slice(0, 1);

    const text = elementParts[2];

    const isCount = cb({
      firstNumber,
      secondNumber,
      letter,
      text,
    });

    if (isCount) {
      count++;
    }
  });

  return count;
};

module.exports = { p1, p2 };
