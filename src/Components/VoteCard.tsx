import { IDogDataWithBreed } from "../interfaces";

interface IVoteCardProps {
    DoggyData: IDogDataWithBreed;
    handleVoteClick: (breed:string) => void;
}


export function VoteCard(props:IVoteCardProps):JSX.Element{

    return (
        <div className="ctn-VoteCard">
            <img src={props.DoggyData.message} alt={`Image of ${props.DoggyData.breed}`} />
            <p>{props.DoggyData.breed}</p>
            <button onClick={(event) => {return props.handleVoteClick(props.DoggyData.breed)}}>
                <label>
                    Vote for {props.DoggyData.breed}!
                </label>
            </button>
        Image (onClick: vote for dog) (onHover: show Breed name in later build, change boardercolour or transparency and shadows)
        Breed name
        </div>
    );
}