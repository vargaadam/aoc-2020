const { expect } = require("chai");

const { p1, p2 } = require(".");

const input = [
  "abc",
  "",
  "a",
  "b",
  "c",
  "",
  "ab",
  "ac",
  "",
  "a",
  "a",
  "a",
  "a",
  "",
  "b",
];

describe("Day6", () => {
  describe("Part One", () => {
    it("should return with 11", () => {
      const result = p1(input);
      expect(result).eql(11);
    });
  });

  describe("Part Two", () => {
    it("should return with 6", () => {
      const result = p2(input);
      expect(result).eql(6);
    });
  });
});
