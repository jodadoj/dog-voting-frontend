import { IDogDataFromAPI, IDogDataWithBreed } from "../interfaces";

export function getDogBreed(DogData: IDogDataFromAPI): IDogDataWithBreed {
  const imgURL = DogData.message;
  const imgURLArr = imgURL.split("/");
  const splitBreedArr = imgURLArr[4].split("-");
  const subBreed = splitBreedArr.length > 1 ? splitBreedArr[1] : null;
  const breed = splitBreedArr[0];

  return {
    message: DogData.message,
    status: DogData.status,
    breed: breed,
    subBreed: subBreed,
  };
}
