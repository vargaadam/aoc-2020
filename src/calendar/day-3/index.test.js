const { expect } = require("chai");

const { p1, p2 } = require(".");

const input = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe("Day3", () => {
  describe("Part One", () => {
    it("should return with 7", () => {
      const result = p1(input);
      expect(result).eql(7);
    });
  });

  describe("Part Two", () => {
    it("should return with 336", () => {
      const result = p2(input);
      expect(result).to.eql(336);
    });
  });
});
