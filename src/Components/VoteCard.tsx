import { IDogDataWithBreed } from "../interfaces";

interface IVoteCardProps {
  DoggyData: IDogDataWithBreed;
  handleVoteClick: (breed: string) => Promise<void>;
}

export function VoteCard({DoggyData, handleVoteClick}: IVoteCardProps): JSX.Element {
  console.log("DoggyData", DoggyData)
 const combinedBreed = DoggyData.subBreed ? DoggyData.breed + " " + DoggyData.subBreed : DoggyData.breed;

  return (
    <div className="ctn-VoteCard">
      <img
        src={DoggyData.message}
        alt={`${DoggyData.breed}`}
      />
      <p>{DoggyData.breed}</p>
      <button
        onClick={() => handleVoteClick(combinedBreed)}
        // onClick={() => console.log("Button Clicked")}
      >
        Vote for {DoggyData.breed}!
      </button>
      {/* Image (onClick: vote for dog) (onHover: show Breed name in later build,
      change boardercolour or transparency and shadows) Breed name */}
    </div>
  );
}
