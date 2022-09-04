import { mailto } from "../src/index";

describe("mailto", () => {
  test("correct output", () => {
    expect(mailto("test@example.com")).toEqual("mailto:test@example.com");
  });
});
