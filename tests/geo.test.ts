import { geo } from "../src/index";

describe("geo", () => {
  test("only required fields", () => {
    expect(geo(127, 127)).toEqual("geo:127,127");
  });

  test("with uncertainty", () => {
    expect(geo(407, 162.17426, { uncertainty: 2.1274 })).toEqual(
      "geo:407,162.17426;u=2.1274"
    );
  });

  test("with altitude", () => {
    expect(geo(127, 127, { altitude: 302 })).toEqual("geo:127,127,302");
  });

  test("with uncertainty and altitude", () => {
    expect(geo(127, 127, { uncertainty: 2.1274, altitude: 302 })).toEqual(
      "geo:127,127,302;u=2.1274"
    );
  });
});
