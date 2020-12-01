const { expect } = require("chai");

const { p1, p2 } = require(".");

const input = [1721, 979, 366, 299, 675, 1456];

describe("Day1", () => {
  describe("Part One", () => {
    it("should return with 514579 if the two of the entries sum is 2020", () => {
      const result = p1(input);
      expect(result).eql(514579);
    });
  });

  describe("Part Two", () => {
    it("should return with 241861950 if the three of the entries sum is 2020", () => {
      const result = p2(input);
      expect(result).to.eql(241861950);
    });
  });
});
