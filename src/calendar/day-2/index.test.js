const { expect } = require("chai");

const { p1, p2 } = require(".");

const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

describe("Day2", () => {
  describe("Part One", () => {
    it("should return with 2 if the lowest and highest number of times a given letter appear in the password", () => {
      const result = p1(input);
      expect(result).eql(2);
    });
  });

  describe("Part Two", () => {
    it("should return with 1 if exactly one of the positions contain the given letter", () => {
      const result = p2(input);
      expect(result).to.eql(1);
    });
  });
});
