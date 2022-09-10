import { spotify } from "../src/index";

describe("spotify", () => {
  describe("media", () => {
    test("with artist", () => {
      expect(spotify.media("artist", "4pejUc4iciQfgdX6OKulQn")).toEqual(
        "spotify:artist:4pejUc4iciQfgdX6OKulQn"
      );
    });

    test("with track", () => {
      expect(spotify.media("album", "64SL0QEXxulD2QgwJmJbUL")).toEqual(
        "spotify:album:64SL0QEXxulD2QgwJmJbUL"
      );
    });

    test("with track", () => {
      expect(spotify.media("track", "1Ei1qFCo7Jf4eUSEvvzipa")).toEqual(
        "spotify:track:1Ei1qFCo7Jf4eUSEvvzipa"
      );
    });
  });

  describe("search", () => {
    test("required field", () => {
      expect(spotify.search("queens of the stone age")).toEqual(
        "spotify:search:queens%20of%20the%20stone%20age"
      );
    });
  });

  describe("user", () => {
    test("required field", () => {
      expect(spotify.user("nhqrantl7v0dd0ts4aj5mfubh")).toEqual(
        "spotify:user:nhqrantl7v0dd0ts4aj5mfubh"
      );
    });
  });

  describe("playlist", () => {
    test("required fields", () => {
      expect(spotify.playlist("3ul0sVtaIQTD3CcUMGr1Bf")).toEqual(
        "spotify:playlist:3ul0sVtaIQTD3CcUMGr1Bf"
      );
    });
  });
});
