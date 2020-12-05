const findPassportID = require("./passport");

const p1 = (input) => {
  const passports = input.map(findPassportID);
  return Math.max(...passports);
};

const p2 = (input) => {
  const passports = input.map(findPassportID);

  const setOFPassports = new Set(passports);

  for (const rightNeighborSeatID of setOFPassports.values()) {
    const mySeatID = rightNeighborSeatID - 1;
    const lefNeighborSeatID = rightNeighborSeatID - 2;

    if (
      !setOFPassports.has(mySeatID) &&
      setOFPassports.has(lefNeighborSeatID)
    ) {
      return mySeatID;
    }
  }
};

module.exports = { p1, p2 };
