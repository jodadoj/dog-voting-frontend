import { IDogDataWithBreed } from "../interfaces";

interface IVoteCardProps {
  DoggyData: IDogDataWithBreed;
  handleVoteClick: (breed: string) => Promise<void>;
}

function capitilisedWord(inputStr: string): string {
  return inputStr[0].toUpperCase() + inputStr.substring(1);
}

export function VoteCard({
  DoggyData,
  handleVoteClick,
}: IVoteCardProps): JSX.Element {
  // const combinedBreed = DoggyData.subBreed
  //   ? DoggyData.subBreed + " " + DoggyData.breed
  //   : DoggyData.breed;

  const formattedBreed = DoggyData.subBreed
    ? capitilisedWord(DoggyData.subBreed) +
      " " +
      capitilisedWord(DoggyData.breed)
    : capitilisedWord(DoggyData.breed);

  return (
    <div className="ctn-vote-card">
      <img
        className="vote-card-img"
        src={DoggyData.message}
        alt={`${DoggyData.breed}`}
      />
      <p className="vote-card-breed-txt">{formattedBreed}</p>
      <button
        className="vote-button"
        onClick={() => handleVoteClick(formattedBreed)}
        // onClick={() => console.log("Button Clicked")}
      >
        Vote for me!
      </button>
      {/* Image (onClick: vote for dog) (onHover: show Breed name in later build,
      change boardercolour or transparency and shadows) Breed name */}
    </div>
  );
}
