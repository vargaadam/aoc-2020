const calendar = require("./calendar");

(() => {
  const { readInput } = require("./utils");

  Object.keys(calendar).forEach((day) => {
    const { parts, filePath } = calendar[day];
    const input = readInput(filePath);

    console.log(`Day ${day}:`);
    console.log(`Task 1: ${parts[0](input)}`);
    console.log(`Task 2: ${parts[1](input)}`);
    console.log("-----------------------------");
  });
})();
