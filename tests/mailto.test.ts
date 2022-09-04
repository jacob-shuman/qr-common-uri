import { mailto } from "../src/index";

describe("mailto", () => {
  test("only address", () => {
    expect(mailto("foo@example.com")).toEqual("mailto:foo@example.com");
  });

  test("cc", () => {
    expect(
      mailto("foo@example.com", {
        cc: ["bar@example.com"],
      })
    ).toEqual("mailto:foo@example.com?cc=bar%40example.com");
  });

  test("bcc", () => {
    expect(
      mailto("foo@example.com", {
        bcc: ["bar@example.com", "baz@example.com"],
      })
    ).toEqual("mailto:foo@example.com?bcc=bar%40example.com,baz%40example.com");
  });

  test("subject", () => {
    expect(
      mailto("foo@example.com", {
        subject: "Do not reply to this email",
      })
    ).toEqual(
      "mailto:foo@example.com?subject=Do%20not%20reply%20to%20this%20email"
    );
  });

  test("subject", () => {
    expect(
      mailto("foo@example.com", {
        body: "This is a scam! What is you're credit card number?",
      })
    ).toEqual(
      "mailto:foo@example.com?body=This%20is%20a%20scam!%20What%20is%20you're%20credit%20card%20number%3F"
    );
  });
});
