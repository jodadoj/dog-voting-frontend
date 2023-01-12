import getTopDogPath from "./getTopDogPath";

test("breeds with no subbreed return correct path", () => {
  expect(getTopDogPath("Affenpinscher")).toEqual(
    "https://dog.ceo/api/breed/affenpinscher/images/random"
  );
});

test("breeds with subbreed return correct path", () => {
  expect(getTopDogPath("Afghan Hound")).toEqual(
    "https://dog.ceo/api/breed/hound/afghan/images/random"
  );
});
