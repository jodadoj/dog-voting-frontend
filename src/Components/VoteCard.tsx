import { IDogDataWithBreed } from "../interfaces";

interface IVoteCardProps {
    DoggyData: IDogDataWithBreed;
}

export function VoteCard(props:IDogDataWithBreed):JSX.Element{

    return (
        <>
        Vote Card
        </>
    );
}