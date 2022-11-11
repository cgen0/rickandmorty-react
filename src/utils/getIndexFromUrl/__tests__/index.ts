import { getIndexFromUrl } from "..";

describe("getIndexFromUrl", () => {
  it("Returns the index number (page, location or episode) from an url", () => {
    expect(
      getIndexFromUrl("https://rickandmortyapi.com/api/character/?page=42")
    ).toStrictEqual(42);
    expect(
      getIndexFromUrl("https://rickandmortyapi.com/api/location/20")
    ).toStrictEqual(20);
    expect(getIndexFromUrl(null)).toStrictEqual(0);
  });
});
