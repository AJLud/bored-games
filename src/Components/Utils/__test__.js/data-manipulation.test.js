import { formatDate } from "../data-manipulation";

describe("formatDate", () => {
  it("should return a date and time that looks like YYYY/MM/DD @ HH:MM", () => {
    expect(formatDate("2021-03-27T19:48:58.110Z")).toBe("2021/03/27 @ 19:48");
  });
});
