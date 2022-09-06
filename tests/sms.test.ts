import { sms } from "../src/index";

describe("sms", () => {
  test("only number", () => {
    expect(sms("1112223333")).toEqual("sms:1112223333");
  });

  test("with country code", () => {
    expect(sms("2223334444", { countryCode: "1" })).toEqual("sms:+12223334444");
  });

  test("with message", () => {
    expect(sms("2223334444", { message: "This is a message." })).toEqual(
      "sms:2223334444:This%20is%20a%20message."
    );
  });

  test("with country code and message", () => {
    expect(
      sms("2223334444", { countryCode: "1", message: "This is a message." })
    ).toEqual("sms:+12223334444:This%20is%20a%20message.");
  });
});
