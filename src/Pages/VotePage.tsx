import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../App";
import { VoteCard } from "../Components/VoteCard";
import { IDogDataWithBreed } from "../interfaces";
import { getDogBreed } from "../utils/getDogBreed";
import LoadingSpin from "react-loading-spin";

export function VotePage(): JSX.Element {
  const [dogDataArray, setDogDataArray] = useState<IDogDataWithBreed[]>([]);

  async function getDogData() {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const fetchBothDogs = useCallback(async () => {
    const firstDog = getDogBreed(await getDogData());
    // console.log('Set firstDog as ', firstDog);

    //While the second dog is the same breed as the first dog, continue fetching
    let secondDog: IDogDataWithBreed = getDogBreed(await getDogData());
    // console.log('Set secondDog as ', firstDog);
    while (
      firstDog.breed === secondDog.breed &&
      firstDog.subBreed === secondDog.subBreed
    ) {
      // console.log('Checked if same... they were', secondDog);
      secondDog = getDogBreed(await getDogData());
      // console.log('Changed secondDog to ', secondDog);
    }

    setDogDataArray([firstDog, secondDog]);
  }, [setDogDataArray]);

  useEffect(() => {
    fetchBothDogs();
  }, [fetchBothDogs]);
  // console.log("dogDataArray", dogDataArray);

  //HANDLERS
  const handleVoteClick = async (breed: string) => {
    await axios.post(baseUrl + "leaderboard", { breed: breed });
    await axios.put(baseUrl + "leaderboard/" + breed);
    fetchBothDogs();
  };

  if (dogDataArray.length > 0) {
    return (
      <div className="ctn-vote-page">
        <p className="welcome-msg-txt">Vote for your favourite dog!</p>
        <div className="ctn-vote-cards">
          <VoteCard
            DoggyData={dogDataArray[0]}
            handleVoteClick={handleVoteClick}
          />
          <VoteCard
            DoggyData={dogDataArray[1]}
            handleVoteClick={handleVoteClick}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={"loading-icon"}>
        <h1>Fetching Data</h1>
        <LoadingSpin />
      </div>
    );
  }
}
