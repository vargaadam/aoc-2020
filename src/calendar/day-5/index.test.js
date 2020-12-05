const { expect } = require("chai");
const getPassportID = require("./passport");

const { p1, p2 } = require(".");

describe("Day5", () => {
  describe("#findSeat", () => {
    it("should return with 357 when the input is FBFBBFFRLR", () => {
      const input = "FBFBBFFRLR";

      const result = getPassportID(input);
      expect(result).eql(357);
    });

    it("should return with 567 when the input is BFFFBBFRRR", () => {
      const input = "BFFFBBFRRR";

      const result = getPassportID(input);
      expect(result).eql(567);
    });

    it("should return with 119 when the input is FFFBBBFRRR", () => {
      const input = "FFFBBBFRRR";

      const result = getPassportID(input);
      expect(result).eql(119);
    });

    it("should return with 820 when the input is BBFFBBFRLL", () => {
      const input = "BBFFBBFRLL";

      const result = getPassportID(input);
      expect(result).eql(820);
    });
  });

  describe("Part one", () => {
    it("should return with 820", () => {
      const input = ["FBFBBFFRLR", "BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];
      const result = p1(input);

      expect(result).to.eql(820);
    });
  });
});
