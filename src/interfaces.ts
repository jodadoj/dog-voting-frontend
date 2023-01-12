export interface IDogDataFromAPI {
  message: string;
  status: string;
}

export interface IDogDataWithBreed extends IDogDataFromAPI {
  breed: string;
  subBreed: string | null;
}

export interface ILeaderboard {
  breed: string;
  votes: number;
}
