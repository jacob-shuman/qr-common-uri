import { facetime } from "../src/index";

describe("facetime", () => {
  test("video", () => {
    expect(facetime("1112223333")).toEqual("facetime:1112223333");
  });

  test("audio", () => {
    expect(facetime("1112223333", "audio")).toEqual(
      "facetime-audio:1112223333"
    );
  });
});
