import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { IDogDataFromAPI } from "../interfaces";
import getTopDogPath from "../utils/getTopDogPath";

interface TopDogProps {
  formattedBreed: string;
  votes: number;
}

export function TopDog({ formattedBreed, votes }: TopDogProps): JSX.Element {
  const breedImageURL = getTopDogPath(formattedBreed);
  const [dogImage, setDogImage] = useState<string>();

  const getDogImage = useCallback(async () => {
    try {
      const response = await axios.get(breedImageURL);
      const dogData: IDogDataFromAPI = response.data;
      setDogImage(dogData.message);
    } catch (error) {
      console.error(error);
    }
  }, [setDogImage]);

  useEffect(() => {
    getDogImage();
  }, [getDogImage]);

  return (
    <>
      <div className="ctn-top-dog">
        <img
          className="top-dog-img"
          src={dogImage}
          alt={`${formattedBreed}`}
          onClick={() => getDogImage()}
        />
        <p className="top-dog-name">{formattedBreed}</p>{" "}
        <p className="top-dog-votes">{votes} votes</p>
      </div>
    </>
  );
}

//https://dog.ceo/api/breed/hound/afghan/images/random
//https://dog.ceo/api/breed/african/images/random

//PATH: https://dog.ceo/api/breed/BREED/?SUBBREED?/images/random
