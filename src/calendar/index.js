const fs = require("fs");
const path = require("path");

const days = fs
  .readdirSync(__dirname)
  .filter((file) => path.extname(file).toLowerCase() !== ".js")
  .reduce((acc, day) => {
    const dirPath = path.join(__dirname, day);
    const filePath = path.join(dirPath, "input");

    const { p1, p2 } = require(dirPath);

    acc[day] = {
      parts: [p1, p2],
      filePath,
    };

    return acc;
  }, {});

module.exports = days;
