export default function getTopDogPath(formattedBreed: string) {
  const pathStart = "https://dog.ceo/api/breed/";
  const pathEnd = "/images/random";
  const lowercaseBreed = formattedBreed.toLowerCase();
  const splitBreed = lowercaseBreed.split(" ");
  if (splitBreed.length > 1) {
    return pathStart + `${splitBreed[1]}/${splitBreed[0]}` + pathEnd;
  } else {
    return pathStart + `${splitBreed[0]}` + pathEnd;
  }
}
