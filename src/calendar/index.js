const { p1: D1P1, p2: D1P2 } = require("./day-1");
const { p1: D2P1, p2: D2P2 } = require("./day-2");

module.exports = {
  1: { parts: [D1P1, D1P2], filePath: __dirname + "/day-1/d1_input" },
  2: { parts: [D2P1, D2P2], filePath: __dirname + "/day-2/d2_input" },
};
