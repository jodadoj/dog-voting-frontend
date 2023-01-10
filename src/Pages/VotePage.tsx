import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../App";
import { VoteCard } from "../Components/VoteCard";
import { IDogDataWithBreed } from "../interfaces";
import { getDogBreed } from "../utils/getDogBreed";

export function VotePage(): JSX.Element {
  const [dogDataArray, setDogDataArray] = useState<IDogDataWithBreed[]>([]);

  async function getDogData() {
    console.log("get Dog Data is RUNNING");
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("DATA", data);
    return data;
  }

  const fetchBothDogs = useCallback(async () => {
    const firstDog = getDogBreed(await getDogData());

    //While the second dog is the same breed as the first dog, continue fetching
    let secondDog: IDogDataWithBreed = getDogBreed(await getDogData());
    while (
      firstDog.breed === secondDog.breed &&
      firstDog.subBreed === secondDog.subBreed
    ) {
      secondDog = await getDogData();
    }

    setDogDataArray([firstDog, secondDog]);
  }, [setDogDataArray]);

  useEffect(() => {
    fetchBothDogs();
  }, [fetchBothDogs]);
  console.log("dogDataArray", dogDataArray);

  //HANDLERS
  const handleVoteClick = async (breed: string) => {
    await axios.post(baseUrl + "leaderboard", { breed: breed });
    await axios.put(baseUrl + "leaderboard/" + breed);
    fetchBothDogs();
  };

  if (dogDataArray.length > 0) {
  return (
  <div className="ctn-vote-page">
 
  <VoteCard DoggyData={dogDataArray[0]} handleVoteClick={handleVoteClick}/> 
  <VoteCard DoggyData={dogDataArray[1]} handleVoteClick={handleVoteClick}/>
  </div>

  );
} else {
  return <h1>Fetching Data</h1>
}
}
