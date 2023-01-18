import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { IDogDataFromAPI } from "../interfaces";
import getTopDogPath from "../utils/getTopDogPath";

interface TopDogProps {
  formattedBreed: string;
  votes: number;
  placing: string;
}

export function TopDog({
  formattedBreed,
  votes,
  placing,
}: TopDogProps): JSX.Element {
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
  }, [setDogImage, breedImageURL]);

  useEffect(() => {
    getDogImage();
  }, [getDogImage]);

  return (
    <>
      <div className={placing === "🥇" ? "ctn-top-dog-first" : "ctn-top-dog"}>
        <p className="medal">{placing}</p>
        <img
          className={placing === "🥇" ? "top-dog-first-img" : "top-dog-img"}
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
