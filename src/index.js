const { readInput } = require("./utils");
const calendar = require("./calendar");

const printMessage = (day) => {
  const { parts, filePath } = calendar[day];
  const input = readInput(filePath);

  console.log(`Day ${day}:`);
  console.log(`Task 1: ${parts[0](input)}`);
  console.log(`Task 2: ${parts[1](input)}`);
  console.log("-----------------------------");
};

(() => {
  if (process.env.DAY) {
    printMessage(process.env.DAY);
    return;
  }

  Object.keys(calendar).forEach((day) => {
    printMessage(day);
  });
})();
