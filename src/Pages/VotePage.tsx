import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { IDogDataWithBreed } from "../interfaces";
import { getDogBreed } from "../utils/getDogBreed";

export function VotePage(): JSX.Element {
  const [dogDataArray, setDogDataArray] = useState<IDogDataWithBreed[]>([]);

  async function getDogData() {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("data", data)
    return data;
  }

  const fetchBothDogs = useCallback(async () => {
    const firstDog = getDogBreed(await getDogData());

    //While the second dog is the same breed as the first dog, continue fetching
    let secondDog: IDogDataWithBreed  =  getDogBreed(await getDogData());
    while (firstDog.breed === secondDog.breed && firstDog.subBreed === secondDog.subBreed) {
       secondDog  = await getDogData();
    }
    
    setDogDataArray([firstDog, secondDog])
  }, [])
 
  useEffect(() => {
    fetchBothDogs();
  }, [fetchBothDogs])
  console.log("dogDataArray", dogDataArray)

  return <>Vote Page</>;
}


