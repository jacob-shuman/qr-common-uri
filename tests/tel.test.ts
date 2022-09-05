import { tel } from "../src/index";

describe("tel", () => {
  test("only number", () => {
    expect(tel("1112223333")).toEqual("tel:1112223333");
  });

  test("with country code", () => {
    expect(tel("2223334444", "1")).toEqual("tel:+12223334444");
  });
});
