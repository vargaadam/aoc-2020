const p1 = (input) => {
  return _getResult(input, 1, 3);
};

const p2 = (input) => {
  return (
    _getResult(input, 1, 1) *
    _getResult(input, 1, 3) *
    _getResult(input, 1, 5) *
    _getResult(input, 1, 7) *
    _getResult(input, 2, 1)
  );
};

const _getResult = (input, x, y) => {
  let treeCount = 0;
  const baseY = y;

  for (let i = x; i < input.length; i += x) {
    const element = input[i];

    y %= element.length;

    const location = element[y];

    if (location == "#") {
      treeCount++;
    }

    y += baseY;
  }

  return treeCount;
};

module.exports = { p1, p2 };
