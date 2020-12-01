const fs = require("fs");

const readInput = (inputPath) => {
  const data = fs.readFileSync(inputPath, "utf8");
  return data.split("\n");
};

module.exports = {
  readInput,
};
