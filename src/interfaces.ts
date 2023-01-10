export interface IDogDataFromAPI {
    message:string;
    status:string;
}

export interface ILeaderboard {
    breed:string;
    votes:number;
}

export interface IDogDataWithBreed extends IDogDataFromAPI{
    breed: string;
}