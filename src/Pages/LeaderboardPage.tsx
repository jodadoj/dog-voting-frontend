import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../App";
import { ILeaderboard } from "../interfaces";
import LoadingSpin from "react-loading-spin";
import { TopDog } from "../Components/TopDog";

export function LeaderboardPage(): JSX.Element {
  const [top10Doggies, setTop10Doggies] = useState<ILeaderboard[]>([]);

  const fetchTop10Doggies = useCallback(async () => {
    try {
      const { data } = await axios.get(baseUrl + "leaderboard");
      setTop10Doggies(data);
    } catch (error) {
      console.error(error);
    }
  }, [setTop10Doggies]);

  useEffect(() => {
    fetchTop10Doggies();
  }, [fetchTop10Doggies]);

  if (top10Doggies.length > 0) {
    return (
      <div className="ctn-leaderboard-page">
        <div className="ctn-podium">
          {top10Doggies.length > 1 && (
            <TopDog
              formattedBreed={top10Doggies[1].breed}
              votes={top10Doggies[1].votes}
              placing={"🥈"}
            />
          )}
          <TopDog
            formattedBreed={top10Doggies[0].breed}
            votes={top10Doggies[0].votes}
            placing={"🥇"}
          />
          {top10Doggies.length > 2 && (
            <TopDog
              formattedBreed={top10Doggies[2].breed}
              votes={top10Doggies[2].votes}
              placing={"🥉"}
            />
          )}
        </div>
        <p className="top-ten-txt">Top 10</p>
        <button className="btn-refresh-leaderboard" onClick={fetchTop10Doggies}>
          refresh leaderboard
        </button>
        <div className="ctn-leaderboard">
          <div className="ctn-leaderboard-row">
            <div className="ctn-leaderboard-row-breed">
              <b>Dog</b>
            </div>
            <div className="ctn-leaderboard-row-votes">
              <b>Votes</b>
            </div>
          </div>
          {top10Doggies.length > 0 &&
            top10Doggies.map((oneDog, index) => {
              return (
                <div className="ctn-leaderboard-row" key={oneDog.breed}>
                  <div className="ctn-leaderboard-row-breed">
                    {oneDog.breed}
                  </div>
                  <div className="ctn-leaderboard-row-votes">
                    {oneDog.votes}
                  </div>
                </div>
              );
            })}
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
