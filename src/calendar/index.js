const { p1: D1P1, p2: D1P2 } = require("./day-1");
const { p1: D2P1, p2: D2P2 } = require("./day-2");
const { p1: D3P1, p2: D3P2 } = require("./day-3");
const { p1: D4P1, p2: D4P2 } = require("./day-4");
const { p1: D5P1, p2: D5P2 } = require("./day-5");

module.exports = {
  1: { parts: [D1P1, D1P2], filePath: __dirname + "/day-1/d1_input" },
  2: { parts: [D2P1, D2P2], filePath: __dirname + "/day-2/d2_input" },
  3: { parts: [D3P1, D3P2], filePath: __dirname + "/day-3/d3_input" },
  4: { parts: [D4P1, D4P2], filePath: __dirname + "/day-4/d4_input" },
  5: { parts: [D5P1, D5P2], filePath: __dirname + "/day-5/d5_input" },
};
