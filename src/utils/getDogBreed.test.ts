import { getDogBreed } from "./getDogBreed";
test("given an object containing a message property with a url for a dog image, extract the breed of the dog from the url and return new object", () => {
  expect(
    getDogBreed({
      message: "https://images.dog.ceo/breeds/leonberg/n02111129_3045.jpg",
      status: "success",
    })
  ).toStrictEqual({
    message: "https://images.dog.ceo/breeds/leonberg/n02111129_3045.jpg",
    status: "success",
    breed: "leonberg",
    subBreed: null,
  });

  expect(
    getDogBreed({
      message:
        "https://images.dog.ceo/breeds/spaniel-sussex/n02102480_5792.jpg",
      status: "success",
    })
  ).toStrictEqual({
    message: "https://images.dog.ceo/breeds/spaniel-sussex/n02102480_5792.jpg",
    status: "success",
    breed: "spaniel",
    subBreed: "sussex",
  });
});
